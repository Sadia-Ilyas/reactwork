import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice"; // jo slice banaya
import productReducer from "./productsSlice";  // jo slice banaya

export const store = configureStore({
  reducer: {
    employees: employeeReducer, // slice ko yahan register karna
    products: productReducer,

  },
});
