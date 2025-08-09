import styles from "./styles.module.css";

export default function Tag(props) {
  const {
    label,
    icon: Icon,
    onClick,
    iconStyle,
    tagContainerStyle,
    iconContainerStyle,
    labelContainerStyle,
  } = props;
  return (
    <div className={styles.tagContainer} style={tagContainerStyle}>
      {!!Icon && (
        <span className={styles.iconContainer} style={iconContainerStyle}>
          <Icon alt={label} className={styles.tagIcon} style={iconStyle} />
        </span>
      )}
      <span
        className={styles.labelContainer}
        onClick={onClick}
        style={labelContainerStyle}
      >
        {label}
      </span>
    </div>
  );
}
