import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authScreenSlice";
import adminProductsSlice from "./adminScreenSlice/products-slice";
import adminOrderSlice from "./adminScreenSlice/order-slice";

import shopProductsSlice from "./userScreenSlice/productsSlice";
import shopCartSlice from "./userScreenSlice/cartSlice";
import shopAddressSlice from "./userScreenSlice/addressSlice";
import shopOrderSlice from "./userScreenSlice/orderSlice";
import shopSearchSlice from "./userScreenSlice/searchSlice";
import shopReviewSlice from "./userScreenSlice/reviewSlice";
import commonFeatureSlice from "./commonSlice";
import adminUsersSlice from "./adminScreenSlice/user-slice"

const store = configureStore({
  reducer: {
    auth: authReducer,

    adminProducts: adminProductsSlice,
    adminOrder: adminOrderSlice,

    shopProducts: shopProductsSlice,
    shopCart: shopCartSlice,
    shopAddress: shopAddressSlice,
    shopOrder: shopOrderSlice,
    shopSearch: shopSearchSlice,
    shopReview: shopReviewSlice,
   
    commonFeature: commonFeatureSlice,
    adminUsers:adminUsersSlice,
  },
});

export default store;
