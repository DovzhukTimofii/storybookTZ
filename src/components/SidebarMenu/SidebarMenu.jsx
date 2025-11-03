import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./SidebarMenu.module.css";


export const SidebarMenu = ({ open, onClose, items }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className={styles.panel}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
            role="dialog"
            aria-modal="true"
          >
            <div className={styles.header}>
              <strong>Menu</strong>
              <button onClick={onClose} className={styles.closeBtn} aria-label="Close menu">×</button>
            </div>
            <nav>
              <MenuList items={items} level={0} />
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

function MenuList({ items, level }) {
  return (
    <ul className={styles.list} style={{ paddingLeft: level * 8 }}>
      {items.map((it) => (
        <MenuItemView key={it.id} item={it} level={level} />
      ))}
    </ul>
  );
}

function MenuItemView({ item, level }) {
  const hasChildren = item.children?.length;
  const [open, setOpen] = useState(false);
  return (
    <li className={styles.item}>
      <div className={styles.row} onClick={() => (hasChildren ? setOpen((v) => !v) : item.onClick?.())}>
        <span>{item.label}</span>
        {hasChildren && <button className={styles.chev}>{open ? "▾" : "▸"}</button>}
      </div>
      {hasChildren && open && <MenuList items={item.children} level={level + 1} />}
    </li>
  );
}

export default SidebarMenu;
