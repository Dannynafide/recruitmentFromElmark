import { useEffect, useState } from "react";

import useData from "../api/useData.js";
import ProductCard from "../components/ProductCard/ProductCard.js";
import FiltersLayout from "../layouts/FiltersLayout/FiltersLayout.js";
import Main from "../layouts/Main/Main.js";
import ProductsLayout from "../layouts/ProductsGrid/ProductsGrid.js";

function Home() {
  const { data } = useData(
    "https://mocki.io/v1/c9d2a9d5-56a2-42e3-aece-53ca9682f254"
  );
  const [products, setProducts] = useState(null);
  const [manufacturers, setManufacturers] = useState(null);
  const [filter, setFilters] = useState({
    available: true,
    unavailable: false,
  });
  const [manufacturerFilter, setManufacturerFilter] = useState([]);

  const getManufacturers = (products) => {
    const manufacturers = products.map((product) => product.manufacturer);
    return [...new Set(manufacturers)];
  };

  const removeProductsContaining_IsSalable = (products) => {
    const newProducts = products.filter((product) => product.is_salable !== 0);
    return newProducts;
  };

  const filteringProductsByAvailability = (products) => {
    const availableProducts = products.filter((product) => {
      if (filter.available) {
        if (product.stock > 0) return product;
      }
      if (filter.unavailable) {
        if (product.stock === 0) return product;
      }
      return null;
    });

    return availableProducts;
  };

  const filteringProductsByManufacturers = (products) => {
    const filteredProducts = products.filter((product) => {
      return manufacturerFilter.includes(product.manufacturer);
    });

    return filteredProducts;
  };

  const applyAllFilters = (products) => {
    let newProducts = removeProductsContaining_IsSalable(products);
    newProducts = filteringProductsByAvailability(newProducts);
    newProducts = filteringProductsByManufacturers(newProducts);

    return newProducts;
  };

  useEffect(() => {
    if (data?.products) {
      const newProducts = applyAllFilters(data.products);
      setProducts(newProducts);

      const productsWithout_IsSalable = removeProductsContaining_IsSalable(
        data.products
      );
      const manufacturers = getManufacturers(productsWithout_IsSalable);
      setManufacturers(manufacturers);
      setManufacturerFilter(manufacturers);
    }
  }, [data]);

  useEffect(() => {
    if (data?.products) {
      const productsToDisplay = applyAllFilters(data.products);
      setProducts(productsToDisplay);
    }
  }, [data, filter, manufacturerFilter]);

  if (!products) {
    return <div>Loading...</div>;
  }

  const handleAvailableChange = (event) => {
    setFilters((prevFilter) => {
      return {
        ...prevFilter,
        [event.target.name]: !filter[event.target.name],
      };
    });
  };

  const handleManufacturersFilterChange = (event) => {
    if (manufacturerFilter.includes(event.target.name)) {
      const newManufacturers = manufacturerFilter.filter(
        (name) => name !== event.target.name
      );
      setManufacturerFilter(newManufacturers);
    } else {
      setManufacturerFilter((prevFilter) => {
        return [...prevFilter, event.target.name.toString()];
      });
    }
  };

  return (
    <Main>
      <FiltersLayout>
        <p>Show including availability:</p>
        <div>
          <Checkbox
            name="available"
            label="Pokaz dostępne"
            value={filter.available}
            onChange={handleAvailableChange}
          />
          <Checkbox
            name="unavailable"
            label="Pokaz niedostępne"
            value={filter.unavailable}
            onChange={handleAvailableChange}
          />
        </div>
        <p>Show including manufacturers:</p>
        {manufacturers.map((name) => {
          return (
            <Checkbox
              key={name}
              name={name}
              label={name}
              value={manufacturerFilter.includes(name)}
              onChange={handleManufacturersFilterChange}
            />
          );
        })}
      </FiltersLayout>

      <ProductsLayout>
        {products.map((product) => {
          return <ProductCard key={product.entity_id} product={product} />;
        })}
      </ProductsLayout>
    </Main>
  );
}

const Checkbox = ({ label, value, onChange, name }) => {
  return (
    <label>
      <input name={name} type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default Home;
