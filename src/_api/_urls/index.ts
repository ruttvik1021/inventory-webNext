const baseUrls = {
  auth: "https://inventory-auth.onrender.com",
  inventory: "https://inventory-products.onrender.com",
};

const authUrls = {
  signUp: "/api/auth/signup",
  signIn: "/api/auth/signin",
  signOut: "/api/auth/signout",
  currentUser: "/api/auth/currentuser",
  completeProfile: "/api/auth/completeprofile",
  forgotPassword: "/api/auth/forgotpassword",
  countryList: "/api/auth/countryList",
  indutryList: "/api/auth/industries",
};

const inventoryUrls = {
  createCategory: "/api/create/category",
  getAllCategories: "/api/getAll/category",
  updateCategory: "/api/update/category",
  deleteCategory: "/api/delete/category",
  getCategoryByID: "/api/getCategory",

  getAllProducts: "/api/getAll/Products",
  getProductById: "/api/getProduct",
  getProductByCategory: "/api/getProduct/category",
  addProduct: "/api/add/product",
  updateProduct: "/api/update/product",
  deleteProduct: "/api/delete/product",
};

export { baseUrls, authUrls, inventoryUrls };
