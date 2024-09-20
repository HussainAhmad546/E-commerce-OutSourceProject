// import heroimage from "../../assets/men.jpg";
// import {
//   Airplay,
//   BabyIcon,
//   CloudLightning,
//   Heater,
//   Images,
//   Shirt,
//   ShirtIcon,
//   ShoppingBasket,
//   UmbrellaIcon,
//   WashingMachine,
//   WatchIcon,
// } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchAllFilteredProducts,
//   fetchProductDetails,
// } from "@/store/shop/products-slice";
// import ShoppingProductTile from "@/components/shopping-view/product-tile";
// import { useNavigate } from "react-router-dom";
// import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
// import { useToast } from "@/components/ui/use-toast";
// import ProductDetailsDialog from "@/components/shopping-view/product-details";
// import { getFeatureImages } from "@/store/common-slice";

// const categoriesWithIcon = [
//   { id:"men", label: "Men", icon: ShirtIcon },
//   { id: "women", label: "Women", icon: CloudLightning },
//   { id: "kids", label: "Kids", icon: BabyIcon },
//   { id: "accessories", label: "Accessories", icon: WatchIcon },
//   { id: "footwear", label: "Footwear", icon: UmbrellaIcon },
// ];

// const brandsWithIcon = [
//   { id: "nike", label: "Nike", icon: Shirt },
//   { id: "adidas", label: "Adidas", icon: WashingMachine },
//   { id: "puma", label: "Puma", icon: ShoppingBasket },
//   { id: "castore", label: "Castore", icon: Airplay },
//   { id: "chivas", label: "Chivas", icon: Images },
//   { id: "america", label: "Club América", icon: Heater },
//   { id: "mexico", label: "Mexico", icon: Heater },
//   { id: "cruz-azul", label: "Cruz Azul", icon: Heater },
// ];


// function ShoppingHome() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const { productList, productDetails } = useSelector(
//     (state) => state.shopProducts
//   );
//   const { featureImageList } = useSelector((state) => state.commonFeature);

//   const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

//   const { user } = useSelector((state) => state.auth);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { toast } = useToast();

//   function handleNavigateToListingPage(getCurrentItem, section) {
//     sessionStorage.removeItem("filters");
//     const currentFilter = {
//       [section]: [getCurrentItem.id],
//     };

//     sessionStorage.setItem("filters", JSON.stringify(currentFilter));
//     navigate('/shop/listing');
//   }

//   function handleGetProductDetails(getCurrentProductId) {
//     dispatch(fetchProductDetails(getCurrentProductId));
//   }

//   function handleAddtoCart(getCurrentProductId) {
//     dispatch(
//       addToCart({
//         userId: user?.id,
//         productId: getCurrentProductId,
//         quantity: 1,
//       })
//     ).then((data) => {
//       if (data?.payload?.success) {
//         dispatch(fetchCartItems(user?.id));
//         toast({
//           title: "Product is added to cart",
//         });
//       }
//     });
//   }

//   useEffect(() => {
//     if (productDetails !== null) setOpenDetailsDialog(true);
//   }, [productDetails]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
//     }, 15000);

//     return () => clearInterval(timer);
//   }, [featureImageList]);

//   useEffect(() => {
//     dispatch(
//       fetchAllFilteredProducts({
//         filterParams: {},
//         sortParams: "price-lowtohigh",
//       })
//     );
//   }, [dispatch]);

//   console.log(productList, "productList");

//   useEffect(() => {
//     dispatch(getFeatureImages());
//   }, [dispatch]);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="relative w-full h-[550px] overflow-hidden">
//         <div className="mt-12">
//           <div className="flex bg-white h-96 container mx-auto">
//             <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
//               <div>
//                 <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
//                   Welcome to{" "}
//                   <span className="text-blue-500">Global-Products</span> INT.
//                 </h2>
//                 <p className="mt-2 text-sm text-gray-500 md:text-base">
//                   Welcome to our e-commerce website. Here, you can explore a
//                   variety of jerseys from different brands and discover the
//                   latest collections. You can also find detailed information
//                   about each jersey and check out our featured brands.
//                 </p>
//                 <div className="flex justify-center lg:justify-start mt-6">
//                   <button className="md:mt-0 mt-2 md:mr-0 mr-2 bg-blue-500 px-5 py-3 rounded-xl text-sm text-white  hover:shadow-xl hover:bg-blue-700">
//                     About Us
//                   </button>
//                   <button className="md:mt-0 mt-2 ml-2 md:mr-0 mr-2 bg-blue-500 px-5 py-3 rounded-xl text-sm text-white  hover:shadow-xl hover:bg-blue-700">
//                     Explore Products
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="hidden lg:block lg:w-1/2"
//               style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
//             >
//               <div
//                 className="bg-contain bg-no-repeat bg-center h-screen"
//                 style={{ backgroundImage: `url(${heroimage})` }}
//               >
//                 <div className="h-full w-full opacity-25"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">
//             Shop by category
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             {categoriesWithIcon.map((categoryItem) => (
//               <Card
//                 onClick={() =>
//                   handleNavigateToListingPage(categoryItem, "category")
//                 }
//                 className="cursor-pointer hover:shadow-lg transition-shadow"
//               >
//                 <CardContent className="flex flex-col items-center justify-center p-6">
//                   <categoryItem.icon className="w-12 h-12 mb-4 text-primary" />
//                   <span className="font-bold">{categoryItem.label}</span>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {brandsWithIcon.map((brandItem) => (
//               <Card
//                 onClick={() => handleNavigateToListingPage(brandItem, "brand")}
//                 className="cursor-pointer hover:shadow-lg transition-shadow"
//               >
//                 <CardContent className="flex flex-col items-center justify-center p-6">
//                   <brandItem.icon className="w-12 h-12 mb-4 text-primary" />
//                   <span className="font-bold">{brandItem.label}</span>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-12">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">
//             Featured Products
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {productList && productList.length > 0
//               ? productList.map((productItem) => (
//                   <ShoppingProductTile
//                     handleGetProductDetails={handleGetProductDetails}
//                     product={productItem}
//                     handleAddtoCart={handleAddtoCart}
//                   />
//                 ))
//               : null}
//           </div>
//         </div>
//       </section>
//       <ProductDetailsDialog
//         open={openDetailsDialog}
//         setOpen={setOpenDetailsDialog}
//         productDetails={productDetails}
//       />
//     </div>
//   );
// }

// export default ShoppingHome;

import { useTranslation } from 'react-i18next';
import heroimage from "../../assets/images/men.jpg";
import {
  Airplay,
  BabyIcon,
  CloudLightning,
  Heater,
  Images,
  Shirt,
  ShirtIcon,
  ShoppingBasket,
  UmbrellaIcon,
  WashingMachine,
  WatchIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/smallCommonComponents/CommonCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/userScreenSlice/productsSlice";
import ShoppingProductTile from "@/components/userScreenComponents/ShoppingProductTile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/userScreenSlice/cartSlice";
import { useToast } from "@/components/smallCommonComponents/UseToast";
import ProductDetailsDialog from "@/components/userScreenComponents/ProductDetailsDialog";
import { getFeatureImages } from "@/store/commonSlice";

const categoriesWithIcon = [
  { id:"men", label: "Men", icon: ShirtIcon },
  { id: "women", label: "Women", icon: CloudLightning },
  { id: "kids", label: "Kids", icon: BabyIcon },
  { id: "accessories", label: "Accessories", icon: WatchIcon },
  { id: "footwear", label: "Footwear", icon: UmbrellaIcon },
];

const brandsWithIcon = [
  { id: "nike", label: "Nike", icon: Shirt },
  { id: "adidas", label: "Adidas", icon: WashingMachine },
  { id: "puma", label: "Puma", icon: ShoppingBasket },
  { id: "castore", label: "Castore", icon: Airplay },
  { id: "chivas", label: "Chivas", icon: Images },
  { id: "america", label: "Club América", icon: Heater },
  { id: "mexico", label: "Mexico", icon: Heater },
  { id: "cruz-azul", label: "Cruz Azul", icon: Heater },
];

function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { t } = useTranslation(); // Destructure 't' from useTranslation hook

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate('/shop/listing');
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: t('product_added_to_cart'), // Localized string for toast
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[550px] overflow-hidden">
        <div className="mt-12">
          <div className="flex bg-white h-96 container mx-auto">
            <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
              <div>
                <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                  {t("welcome_message")}
                  <span className="text-blue-500">Global-Products</span> INT.
                </h2>
                <p className="mt-2 text-sm text-gray-500 md:text-base">
                  {t("Welcome to our e-commerce website. Here, you can explore a variety of jerseys from different brands and discover the latest collections. You can also find detailed information about each jersey and check out our featured brands.")} 
                </p>
                <div className="flex justify-center lg:justify-start mt-6">
                  <button className="md:mt-0 mt-2 md:mr-0 mr-2 bg-blue-500 px-5 py-3 rounded-xl text-sm text-white hover:shadow-xl hover:bg-blue-700">
                    {t("about_us")} {/* Localized About Us */}
                  </button>
                  <button className="md:mt-0 mt-2 ml-2 md:mr-0 mr-2 bg-blue-500 px-5 py-3 rounded-xl text-sm text-white hover:shadow-xl hover:bg-blue-700">
                    {t("explore_products")} {/* Localized Explore Products */}
                  </button>
                </div>
              </div>
            </div>
            <div
              className="hidden lg:block lg:w-1/2"
              style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
              <div
                className="bg-contain bg-no-repeat bg-center h-screen"
                style={{ backgroundImage: `url(${heroimage})` }}
              >
                <div className="h-full w-full opacity-25"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            {t("shop_by_category")} {/* Localized Shop by Category */}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriesWithIcon.map((categoryItem) => (
              <Card
                onClick={() =>
                  handleNavigateToListingPage(categoryItem, "category")
                }
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <categoryItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            {t("shop_by_brand")} {/* Localized Shop by Brand */}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {brandsWithIcon.map((brandItem) => (
              <Card
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <brandItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


         <section className="py-12">
         <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
             Featured Products
          </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                  <ShoppingProductTile
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                ))
              : null}
          </div>
        </div>
      </section>
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
     />
    </div>
  );
}

export default ShoppingHome;
