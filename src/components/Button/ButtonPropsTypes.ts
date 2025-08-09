export interface ButtonPropsType {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  style?: React.CSSProperties;
  type?: "default" | "primary" | "error";
}

