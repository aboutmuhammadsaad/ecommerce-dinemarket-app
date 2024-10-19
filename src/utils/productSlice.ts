import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface Product {
  id: string;
  arr: any;
}

interface ProductStore {
  productarr: Product[];
}

const initialState: ProductStore = {
  productarr: [],
};

const productSlice = createSlice({
  name: "productarray",
  initialState,
  reducers: {
    addproduct: (state, action) => {
      const product = {
        id: nanoid(),
        arr: action.payload,
      };
      state.productarr.push(product);
    },
    removeproduct: (state, action) => {
      state.productarr = state.productarr.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addproduct, removeproduct } = productSlice.actions;
export const selectProducts = (state: RootState) => state.productarr;
export default productSlice.reducer;
