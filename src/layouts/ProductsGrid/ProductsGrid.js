import styles from "./ProductsGrid.module.scss";

function ProductsGrid({ children }) {
  return <div className={styles.row}>{children}</div>;
}

export default ProductsGrid;
