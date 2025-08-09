import styles from "./styles.module.css";
import type { TabsPropsTypes } from "./TabsPropsTypes";

export default function Tabs(props: TabsPropsTypes) {
  const {
    tabsData,
    style,
    tabItemStyle = {},
    labelStyle,
    selectedItemStyle,
    selectedIndex = 0,
  } = props;
  return (
    <div className={styles.tabsContainer} style={style}>
      {tabsData.map((tab, index) => (
        <div
          key={tab.value}
          className={`${styles.tabItem} ${
            index === selectedIndex && !selectedItemStyle
              ? styles.activeTab
              : ""
          }`}
          style={{
            ...tabItemStyle,
            ...(index === selectedIndex && selectedItemStyle),
          }}
        >
          <p className={styles.tabText} style={labelStyle}>
            {tab.label}
          </p>
        </div>
      ))}
    </div>
  );
}
