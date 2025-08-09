import { useMemo } from "react";
import type { ButtonPropsType } from "./ButtonPropsTypes";
import styles from "./styles.module.css";

export default function Button(props: ButtonPropsType) {
  const { onClick, children, style, type = "default" } = props;

  const buttonClass = useMemo(() => {
    switch (type) {
      case "primary":
        return "primary";
      case "error":
        return "error";
      default:
        return "";
    }
  }, [type]);

  return (
    <button
      className={`${styles.default} ${styles[buttonClass]}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}
