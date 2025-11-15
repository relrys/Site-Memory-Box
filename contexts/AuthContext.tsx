import React, { createContext, useState, useEffect, ReactNode } from 'react';
import type { User } from '../types';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  register: (name: string, email: string, pass: string) => boolean;
  subscribe: (planName: string) => void;
  updateUser: (updatedData: Partial<User & { newPassword?: string }>) => boolean;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('memoryBoxUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, pass: string): boolean => {
    // This is a mock implementation. In a real app, you'd call an API.
    const storedUsers = JSON.parse(localStorage.getItem('memoryBoxUsers') || '[]');
    const foundUser = storedUsers.find((u: any) => u.email === email && u.password === pass);
    if (foundUser) {
      const { password, ...userToStore } = foundUser;
      setUser(userToStore);
      localStorage.setItem('memoryBoxUser', JSON.stringify(userToStore));
      closeAuthModal();
      return true;
    }
    return false;
  };
  
  const register = (name: string, email: string, pass: string): boolean => {
    const storedUsers = JSON.parse(localStorage.getItem('memoryBoxUsers') || '[]');
    const existingUser = storedUsers.find((u: any) => u.email === email);
    if(existingUser) {
      alert("Usuário com este e-mail já existe.");
      return false;
    }
    const newUser = { id: Date.now().toString(), name, email, password: pass };
    storedUsers.push(newUser);
    localStorage.setItem('memoryBoxUsers', JSON.stringify(storedUsers));
    
    const { password, ...userToStore } = newUser;
    setUser(userToStore);
    localStorage.setItem('memoryBoxUser', JSON.stringify(userToStore));
    closeAuthModal();
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('memoryBoxUser');
  };
  
  const subscribe = (planName: string) => {
    if(user){
      const updatedUser = { ...user, subscription: planName };
      setUser(updatedUser);
      localStorage.setItem('memoryBoxUser', JSON.stringify(updatedUser));
      
      // Update user in the global users list as well
      const storedUsers = JSON.parse(localStorage.getItem('memoryBoxUsers') || '[]').map((u: any) => {
        if(u.id === user.id) {
          const { password } = u; // keep password
          return { ...updatedUser, password };
        }
        return u;
      });
      localStorage.setItem('memoryBoxUsers', JSON.stringify(storedUsers));
    }
  };

  const updateUser = (updatedData: Partial<User & { newPassword?: string }>): boolean => {
    if (!user) return false;

    let success = false;
    const storedUsers = JSON.parse(localStorage.getItem('memoryBoxUsers') || '[]');
    const userIndex = storedUsers.findIndex((u: any) => u.id === user.id);

    if (userIndex !== -1) {
        const currentUserData = storedUsers[userIndex];
        
        // Update user data
        const updatedUserForList = {
            ...currentUserData,
            name: updatedData.name ?? currentUserData.name,
            email: updatedData.email ?? currentUserData.email,
            password: updatedData.newPassword ? updatedData.newPassword : currentUserData.password
        };
        storedUsers[userIndex] = updatedUserForList;
        localStorage.setItem('memoryBoxUsers', JSON.stringify(storedUsers));

        // Update session user
        const { password, ...userToStore } = updatedUserForList;
        setUser(userToStore);
        localStorage.setItem('memoryBoxUser', JSON.stringify(userToStore));
        success = true;
    }
    return success;
  };

  const openAuthModal = () => setAuthModalOpen(true);
  const closeAuthModal = () => setAuthModalOpen(false);
  
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, register, subscribe, updateUser, isAuthModalOpen, openAuthModal, closeAuthModal }}>
      {children}
    </AuthContext.Provider>
  );
};