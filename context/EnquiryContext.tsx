import React, { createContext, useContext, useState, ReactNode } from 'react';

interface EnquiryContextType {
  isOpen: boolean;
  productName: string;
  openEnquiry: (productName?: string) => void;
  closeEnquiry: () => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export const EnquiryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productName, setProductName] = useState('');

  const openEnquiry = (name: string = '') => {
    setProductName(name);
    setIsOpen(true);
  };

  const closeEnquiry = () => {
    setIsOpen(false);
    setProductName('');
  };

  return (
    <EnquiryContext.Provider value={{ isOpen, productName, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = () => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
};
