import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:4000/products");
    console.log(response);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    filterItem: [],
    status: "idle",
    error: null,
  },
  reducers: {
    filterProducts: (state, action) => {
      console.log(state.products);
      const filterData = state.products.items.filter((state) =>
        state.products.name.includes(action.payload)
      );
    },
    // Reducers for creating, updating products can be added here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { filterProducts } = productSlice.actions;

export default productSlice.reducer;
