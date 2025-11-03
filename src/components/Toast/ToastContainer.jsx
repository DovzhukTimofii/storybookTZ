import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ToastContainer.module.css";

export const ToastContainer = ({ toasts, onDismiss }) => {
  useEffect(() => {
    // placeholder — можно добавить глобальные эффекты позже
  }, [toasts]);

  return (
    <div className={styles.wrapper} aria-live="polite">
      <AnimatePresence initial={false}>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.25 }}
            className={`${styles.toast} ${styles[t.type ?? "info"]}`}
          >
            <div className={styles.content}>
              <div className={styles.title}>{t.title}</div>
              {t.message && <div className={styles.message}>{t.message}</div>}
            </div>

            {t.closable && (
              <button
                className={styles.closeBtn}
                onClick={() => onDismiss(t.id)}
                aria-label="Close"
              >
                ×
              </button>
            )}

            <AutoDismiss
              duration={t.duration ?? 4000}
              onDismiss={() => onDismiss(t.id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

function AutoDismiss({ duration, onDismiss }) {
  useEffect(() => {
    if (!duration || duration <= 0) return;
    const id = setTimeout(onDismiss, duration);
    return () => clearTimeout(id);
  }, [duration, onDismiss]);
  return null;
}

export default ToastContainer;
