import mongoose from "mongoose";
import { productSchema } from "./Product.part1.js";
import slugify from "slugify";

// Indexes
productSchema.index({ name: "text", description: "text", tags: "text" });
productSchema.index({ category: 1, price: 1 });
productSchema.index({ featured: 1, status: 1 });
productSchema.index({ createdAt: -1 });

// Virtual
productSchema.virtual("finalPrice").get(function () {
  if (this.discountPrice && this.discountPrice > 0) {
    return this.discountPrice;
  }
  return this.price;
});

// Validation
productSchema.pre("validate", function (next) {
  if (
    this.discountPrice &&
    this.discountPrice > 0 &&
    this.discountPrice >= this.price
  ) {
    return next(new Error("Discount price must be less than price"));
  }
  next();
});

// Slug generation
productSchema.pre("save", function (next) {
  if (this.isModified("name")) {
    this.slug = slugify(this.name, {
      lower: true,
      strict: true,
      trim: true,
    });
  }
  next();
});

// Instance methods
productSchema.methods.isInStock = function () {
  return this.stock > 0;
};

productSchema.methods.hasDiscount = function () {
  return this.discountPrice > 0;
};

// Static methods
productSchema.statics.findPublished = function () {
  return this.find({
    status: "published",
    isDeleted: false,
  });
};

productSchema.statics.findFeatured = function () {
  return this.find({
    featured: true,
    status: "published",
    isDeleted: false,
  });
};

export default mongoose.model("Product", productSchema);
