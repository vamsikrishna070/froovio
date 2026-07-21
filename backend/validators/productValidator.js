import { body } from "express-validator";

export const productValidator = [
  body("name")
    .trim()
    .notEmpty().withMessage("Product name is required")
    .isLength({ min: 3, max: 150 }),

  body("description")
    .trim()
    .notEmpty().withMessage("Description is required"),

  body("category")
    .notEmpty().withMessage("Category is required"),

  body("seller")
    .notEmpty().withMessage("Seller is required"),

  body("sku")
    .trim()
    .notEmpty().withMessage("SKU is required"),

  body("price")
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),

  body("discountPrice")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Discount price must be a positive number"),

  body("stock")
    .isInt({ min: 0 })
    .withMessage("Stock cannot be negative"),

  body("status")
    .optional()
    .isIn(["draft", "published", "archived"]),

  body("images")
    .optional()
    .isArray(),

  body("tags")
    .optional()
    .isArray()
];
