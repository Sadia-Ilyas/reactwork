import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:5000/products");
    const data = await response.json();
    return data;
  }
);
const initialState = {
  list: [],
  status: "idle",
  error: null,
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
   extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.list = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        });
    },
});

// Selector: Redux se Card component me data fetch karne ke liye
export const selectProducts = (state) => state.products.list;

export default ProductSlice.reducer;
