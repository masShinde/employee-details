import styles from "./styles.module.css";
import { FaChevronRight } from "react-icons/fa";

const crumbs: BreadCrumbType[] = [
  {
    label: {
      text: "Candidates",
      style: { color: "#1F5FAC" },
    },
    link: "/candidates",
    showDivider: true,
  },
  {
    label: {
      text: "Robert Hardy",
    },
    link: "/rebort-hardy",
  },
  {
    label: {
      text: "ID - 231",
      style: {
        border: "1px solid #F8F9FA",
        borderRadius: "4px",
        padding: "2px 4px",
      },
    },
    link: "/id-231",
  },
];

export default function BreadCrumbs(props: BreadCrumbsPropsType) {
  const { style, breadCrumbs = crumbs, onBreadCrumbClick } = props;

  const handleClick = (link: string) => {
    onBreadCrumbClick?.(link);
  };

  return (
    <div className={styles.breadCrumbsContainer} style={style}>
      {breadCrumbs.map((crumb: BreadCrumbType, index: number) => (
        <div
          onClick={() => handleClick(crumb?.link)}
          key={index}
          className={styles.breadCrumbWrapper}
          style={crumb?.style}
        >
          <div
            key={index}
            className={styles.breadCrumb}
            style={crumb?.label?.style}
          >
            {crumb?.label?.text}
          </div>
          {crumb?.showDivider && (
            <FaChevronRight
              className={[styles.separator, crumb?.style || ""].join(" ")}
            />
          )}
        </div>
      ))}
    </div>
  );
}
