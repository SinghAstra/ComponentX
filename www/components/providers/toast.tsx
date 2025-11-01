"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

type ToastContextType = {
  setToastMessage: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToastContext must be used within ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (message) {
      toast(message);
      setMessage(null);
    }
  }, [message]);

  return (
    <ToastContext.Provider value={{ setToastMessage: setMessage }}>
      {children}
    </ToastContext.Provider>
  );
};
