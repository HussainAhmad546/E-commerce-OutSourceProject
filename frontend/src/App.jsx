import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/common/AuthLayout";
import AuthLogin from "./screens/authScreen/LoginScreen";
import AuthRegister from "./screens/authScreen/RegisterScreen";
import AdminLayout from "./components/adminScreenComponents/AdminLayout";
import AdminDashboard from "./screens/adminScreen/AdminDashboardScreen";
import AdminProducts from "./screens/adminScreen/AdminProductsScreen";
import AdminOrders from "./screens/adminScreen/AdminOrdersScreen";
import AdminFeatures from "./screens/adminScreen/AdminFeaturesScreen";
import ShoppingLayout from "./components/userScreenComponents/ShoppingLayout";
import NotFound from "./screens/NotFoundPage";
import ShoppingHome from "./screens/userScreen/HomeScreen";
import ShoppingListing from "./screens/userScreen/ListingScreen";
import ShoppingCheckout from "./screens/userScreen/CheckoutScreen";
import ShoppingAccount from "./screens/userScreen/ShoppingAccountScreen";
import CheckAuth from "./components/common/CheckAuth";
import UnauthPage from "./screens/UnAuthPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/authScreenSlice";
import { Skeleton } from "@/components/smallCommonComponents/SkeletonLoader";
import PaypalReturnPage from "./screens/userScreen/PayPalReturnScreen";
import PaymentSuccessPage from "./screens/userScreen/PaymentSuccessScreen";
import SearchProducts from "./screens/userScreen/SearchProductsScreen";

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
