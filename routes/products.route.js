import express from "express";

const router = express.Router();

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
  { id: 4, name: "Product 4", price: 400 },
  { id: 5, name: "Product 5", price: 500 },
  { id: 6, name: "Product 6", price: 600 },
  { id: 7, name: "Product 7", price: 700 },
  { id: 8, name: "Product 8", price: 800 },
  { id: 9, name: "Product 9", price: 900 },
  { id: 10, name: "Product 10", price: 1000 },
];

// GET method to fetch all products
router.get("/", (req, res) => {
  if (products.length === 0) {
    return res.status(404).json({ message: "No products found" });
  }
  res.json(products);
});

// GET method to fetch a single product by ID
router.get("product/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// POST method to create a new product
router.post("/add/", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT method to update an existing product by ID
router.put("/edit/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const productIndex = products.findIndex((p) => p.id === productId);
  if (productIndex !== -1) {
    products[productIndex] = {
      id: productId,
      name: req.body.name,
      price: req.body.price,
    };
    res.json(products[productIndex]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// PATCH method to partially update an existing product by ID
router.patch("/patch/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const productIndex = products.findIndex((p) => p.id === productId);
  if (productIndex !== -1) {
    const updatedProduct = { ...products[productIndex], ...req.body };
    products[productIndex] = updatedProduct;
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// DELETE method to delete a product by ID
router.delete("/delete/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const productIndex = products.findIndex((p) => p.id === productId);
  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

export default router;

// This code defines a set of RESTful API routes for managing products in an Express.js application. It includes routes for fetching all products, fetching a single product by ID, creating a new product, updating an existing product, partially updating a product, and deleting a product. Each route handles the request and response appropriately, including error handling for cases where products are not found.
// The routes are defined using the Express Router, which allows for modular route handling in the application. The products are stored in an array for demonstration purposes, but in a real application, you would typically use a database to manage product data.
// The code also includes HTTP status codes to indicate the success or failure of each operation, such as 200 for successful GET requests, 201 for successful POST requests, and 404 for not found errors.
// Overall, this code provides a basic structure for a RESTful API for product management, which can be expanded and integrated into a larger application as needed.
// The routes are defined using Express Router, and each route handles the corresponding HTTP method (GET, POST, PUT, PATCH, DELETE) for product management. The code also includes error handling for cases where a product is not found.
// The products are stored in an in-memory array for demonstration purposes. In a real application, you would typically use a database to store and manage product data.
