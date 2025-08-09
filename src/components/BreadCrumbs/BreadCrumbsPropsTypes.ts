export interface BreadCrumbLabel {
  text: string;
  style?: React.CSSProperties;
}

export interface BreadCrumbType {
  label: BreadCrumbLabel;
  link: string;
  showDivider?: boolean;
  style?: React.CSSProperties;
}

export interface BreadCrumbsPropsType {
  style?: React.CSSProperties;
  breadCrumbs?: BreadCrumbType[];
  onBreadCrumbClick?: (link: string) => void;
}
