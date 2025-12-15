import React from "react";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
// selector import
import { selectProducts ,fetchProducts} from "../store/productsSlice";

const Products = () => {
    const dispatch = useDispatch();
  const products = useSelector(selectProducts); // Redux se data fetch
  const status = useSelector((state) => state.products.status);


  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);
    if (status === "loading") return <p>Loading...</p>;
    if (status === "failed") return <p>Error loading products!</p>;
    
  return (
    <div className="flex flex-col gap-4 items-center">
      {products.map((prod) => (
        <div
          key={prod.id}
          className="card p-5 bg-white rounded-xl shadow-lg w-80 text-center"
        >
          <h2 className="text-xl font-bold mb-2">Name:{prod.name}</h2>
          <p className="text-gray-700 mb-1">Price:{prod.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
