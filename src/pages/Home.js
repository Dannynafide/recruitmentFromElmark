import { useEffect, useState } from "react";

import useData from "../api/useData.js";

function Home() {
  const { data } = useData(
    "https://mocki.io/v1/c9d2a9d5-56a2-42e3-aece-53ca9682f254"
  );
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (data?.products) {
      setProducts(data?.products);
    }
  }, [data]);

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map((product) => {
        return <div key={product.name}>{product.name}</div>;
      })}
    </div>
  );
}

export default Home;
