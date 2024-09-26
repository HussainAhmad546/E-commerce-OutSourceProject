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
import ForgetPasswordScreen from "./screens/authScreen/forgetPasswordScreen";
import ResetPasswordSentScreen from "./screens/userScreen/ResetPasswordSentScreen";
import ResetPasswordScreen from "./screens/userScreen/ResetPasswordScreen";
import AdminUsersScreen from "./screens/adminScreen/AdminUsersScreen";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="center-loader">
        <Skeleton className="w-[40px] h-[40px]" />
      </div>
    );
  }

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
        <Route path="/" element={<AuthLayout />}>
          <Route path="forget-password" element={<ForgetPasswordScreen />} />
          <Route path="reset-password-sent" element={<ResetPasswordSentScreen />} />
          <Route path="reset-your-password/:token" element={<ResetPasswordScreen/>} />
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
          <Route path="users" element={<AdminUsersScreen/>} />
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

export default App;