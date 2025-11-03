import { useState, forwardRef } from "react";
import styles from "./Input.module.css";

const EyeIcon = ({ open }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7z" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r={open ? 3 : 0.8} fill="currentColor" />
  </svg>
);

export const Input = forwardRef(
  ({ type = "text", clearable, className, value: valueProp, onChange, ...rest }, ref) => {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState(() =>
      typeof valueProp === "string" ? valueProp : ""
    );

    const actualType = type === "password" && visible ? "text" : type;

    function handleClear() {
      setValue("");
      const fakeEvent = { target: { value: "" } };
      onChange?.(fakeEvent);
    }

    function handleChange(e) {
      setValue(e.target.value);
      onChange?.(e);
    }

    return (
      <div className={`${styles.wrapper} ${className || ""}`}>
        <input
          {...(rest)}
          ref={ref}
          className={styles.input}
          type={actualType}
          value={value}
          onChange={handleChange}
        />
        {type === "password" && (
          <button
            type="button"
            aria-label={visible ? "Hide password" : "Show password"}
            className={styles.iconBtn}
            onClick={() => setVisible((v) => !v)}
          >
            <EyeIcon open={visible} />
          </button>
        )}
        {clearable && value && (
          <button
            type="button"
            aria-label="Clear"
            className={styles.clearBtn}
            onClick={handleClear}
          >
            ×
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
