import styles from "./ProductCard.module.scss";

function ProductCard({ product }) {
  const productStock =
    product.stock > 0 ? (
      <div className={styles.detailsText}>Stock: {product.stock} </div>
    ) : (
      <div className={styles.detailsText}>
        Stock: {product.stock} (not available)
      </div>
    );

  const tax = product.price * (product.tax / 100);
  const promotionPrice =
    product.price * ((100 - product.promotion_discount) / 100) + tax;
  const price = Math.ceil(promotionPrice * 100) / 100;

  return (
    <div className={styles.product}>
      <div className={styles.image}>Image</div>
      <div className={styles.alert}>
        {product.new_product ? <span className={styles.new}>NEW</span> : null}
        {product.promotion_discount ? (
          <span
            className={styles.new}
          >{`${product.promotion} -${product.promotion_discount}%`}</span>
        ) : null}
      </div>
      <div className={styles.details}>
        <span className={styles.price}>${price}</span>
        <span className={styles.title}>{product.name}</span>
        <span className={styles.detailsText}>{product.description}</span>
        <span className={styles.detailsText}>
          Manufacturer: <b>{product.manufacturer}</b>
        </span>
        <button className={styles.buyBtn}>Buy now</button>
        {productStock}
      </div>
    </div>
  );
}

export default ProductCard;
