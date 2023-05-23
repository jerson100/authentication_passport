import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import useAuthContext from "../../../hooks/useAuthContext";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { logout } = useAuthContext();

  useEffect(() => {
    let abortController = new AbortController();
    const getProducts = async () => {
      try {
        setLoading(true);
        setProducts([]);
        const response = await fetch("http://localhost:4001/api/v1/products", {
          signal: abortController.signal,
          headers: {
            Authorization: `Bearer ${Cookie.get("appauth-accessToken")}`,
          },
        });
        const data = await response.json();
        if (response.status === 200) {
          setProducts(data);
        } else if (response.status === 401) {
          console.log(data);
          logout();
        } else {
          console.log(response.statusText);
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    getProducts();
    return () => abortController?.abort();
  }, []);

  return (
    <div className="p-4 max-w-5xl m-auto">
      {loading ? (
        <h1>Cargando productos...</h1>
      ) : (
        <ul className="grid grid-cols-[repeat(auto-fit, minmax(250px, 1fr))] gap-4">
          {products.map((product) => {
            return (
              <li
                key={product.id}
                className="p-4 border border-gray-200 rounded-lg"
              >
                <article className="flex flex-col gap-4 items-center">
                  <h1 className="text-center text-md font-bold">
                    {product.name}
                  </h1>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover"
                  />
                  <p className="text-center text-md font-bold">
                    {product.price}
                  </p>
                  <p className="text-center text-md font-bold">
                    {product.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ProductsPage;
