export interface InputPropsType {
  prefix?: React.ReactNode;
  labelText?: string;
  labelStyles?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  postfix?: React.ReactNode;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | readonly string[];
  [key: string]: any;
}
