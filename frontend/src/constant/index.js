export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "americafc", label: "America fc" },
      { id: "chivasfc", label: "Chivas fc" },
      { id: "cruzazulfc", label: "Cruz Azul Fc" },
      { id: "realmadrid", label: "Real Madrid" },
      { id: "castoreredbull", label: "Castore Red Bull" },
      { id: "nikewhite", label: "Nike AF1 White" },
      { id: "nikeblack", label: "Nike AF1 Black" },
      { id: "mexicoteam", label: "Mexico Team" },

    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "aboutUs",
    label: "About Us",
    path: "/shop/aboutus",
  },
  {
    id: "contact",
    label: "Contact Us",
    path: "/shop/contactus",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  americafc: "America fc",
  chivasfc: "Chivas fc",
  cruzazulfc: "Cruz Azul Fc",
  realmadrid: "Real Madrid",
  castoreredbull: "Castore Red Bull",
  nikewhite: "Nike AF1 White",
  nikeblack: "Nike AF1 Black",
  mexicoteam:"Mexico Team"
}


export const filterOptions = {
  category: [
    { id: "americafc", label: "America fc" },
    { id: "chivasfc", label: "Chivas fc" },
    { id: "cruzazulfc", label: "Cruz Azul Fc" },
    { id: "realmadrid", label: "Real Madrid" },
    { id: "castoreredbull", label: "Castore Red Bull" },
    { id: "nikewhite", label: "Nike AF1 White" },
    { id: "nikeblack", label: "Nike AF1 Black" },
    { id: "mexicoteam", label: "Mexico Team" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
