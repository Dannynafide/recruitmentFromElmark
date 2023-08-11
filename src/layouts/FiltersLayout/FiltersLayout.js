import styles from "./FiltersLayout.module.scss";

function FiltersLayout({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default FiltersLayout;
