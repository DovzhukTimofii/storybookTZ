import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { ToastContainer } from "./ToastContainer";

// eslint-disable-next-line react-refresh/only-export-components
export const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const show = useCallback((title, message, opts) => {
    const id = opts?.id ?? `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    const toast = { id, title, message, duration: opts?.duration ?? 4000, type: opts?.type ?? "info", closable: opts?.closable ?? true };
    setToasts((t) => [toast, ...t]);
    return id;
  }, []);

  const dismiss = useCallback((id) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);

  useEffect(() => {
    // cleanup timers for auto-dismiss handled individually below via effect in ToastContainer rendering
  }, []);

  const value = useMemo(() => ({ show, dismiss, toasts }), [show, dismiss, toasts]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer toasts={toasts} onDismiss={dismiss} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
