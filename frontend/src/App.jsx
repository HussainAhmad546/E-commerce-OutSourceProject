import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/common/AuthLayout";
import AuthLogin from "./screens/authScreen/LoginScreen";
import AuthRegister from "./screens/authScreen/RegisterScreen";
import AdminLayout from "./components/adminScreenComponents/layout";
import AdminDashboard from "./screens/adminScreen/dashboard";
import AdminProducts from "./screens/adminScreen/products";
import AdminOrders from "./screens/adminScreen/orders";
import AdminFeatures from "./screens/adminScreen/features";
import ShoppingLayout from "./components/userScreenComponents/ShoppingLayout";
import NotFound from "./screens/NotFoundPage";
import ShoppingHome from "./screens/userScreen/home";
import ShoppingListing from "./screens/userScreen/listing";
import ShoppingCheckout from "./screens/userScreen/checkout";
import ShoppingAccount from "./screens/userScreen/account";
import CheckAuth from "./components/common/CheckAuth";
import UnauthPage from "./screens/UnAuthPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/authScreenSlice";
import { Skeleton } from "@/components/smallCommonComponents/SkeletonLoader";
import PaypalReturnPage from "./screens/userScreen/paypal-return";
import PaymentSuccessPage from "./screens/userScreen/payment-success";
import SearchProducts from "./screens/userScreen/search";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

  console.log(isLoading, user);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
            ></CheckAuth>
          }
        />
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="paypal-return" element={<PaypalReturnPage />} />
          <Route path="payment-success" element={<PaymentSuccessPage />} />
          <Route path="search" element={<SearchProducts />} />
        </Route>
        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
