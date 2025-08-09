import styles from "./styles.module.css";



export default function Input(props) {
  const { prefix, postfix, onChange, value, ...restProps } = props;
  return (
    <div className={styles.inputWrapper}>
      {prefix}
      <input
        value={value}
        className={styles.input}
        onInput={onChange}
        {...restProps}
      />
      {postfix}
    </div>
  );
}
