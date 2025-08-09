import type { InputPropsType } from "./InputPropsTypes";
import styles from "./styles.module.css";

export default function Input(props: InputPropsType) {
  const {
    prefix,
    labelText,
    labelStyles,
    postfix,
    onInputChange,
    containerStyle,
    value,
    ...restProps
  } = props;
  return (
    <div className={styles.inputContainer} style={containerStyle}>
      {!!labelText && <label className={styles.inputLabel} style={labelStyles}>{labelText}</label>}
      <div className={styles.inputWrapper}>
        {prefix}
        <input
          value={value}
          className={styles.input}
          onChange={onInputChange}
          {...restProps}
        />
        {postfix}
      </div>
    </div>
  );
}
