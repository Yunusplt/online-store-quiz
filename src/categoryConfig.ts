// Description: Configuration file for product categories in the application.
// Add new categories here as needed.
export const PRODUCT_CATEGORIES = [
  "smartphones",
  "laptops",
  "fragrances",
  "skin-care",
  "beauty",
  "fake-category", // Example of a category that might not exist
];

// Number of products to load per category column at a time
// This is used for infinite scrolling in the category columns
// Adjust this value based on your needs
export const PRODUCT_CATEGORY_PAGE_SIZE = 5;
