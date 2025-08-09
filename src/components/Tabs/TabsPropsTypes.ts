
export interface TabDataType {
  label: string;
  value: string;
}

export interface TabsPropsTypes {
  tabsData: TabDataType[];
  style?: React.CSSProperties;
  tabItemStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  selectedItemStyle?: React.CSSProperties;
  selectedIndex: number;
}