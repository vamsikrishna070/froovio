import mongoose from "mongoose";
import slugify from "slugify";

const { Schema } = mongoose;

const imageSchema = new Schema(
  {
    public_id: { type: String, required: true, trim: true },
    url: { type: String, required: true, trim: true },
    alt: { type: String, default: "", trim: true },
    isPrimary: { type: Boolean, default: false },
  },
  { _id: false }
);

const variantSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true },
    additionalPrice: { type: Number, default: 0, min: 0 },
    stock: { type: Number, default: 0, min: 0 },
    sku: { type: String, trim: true },
  },
  { _id: false }
);

const specificationSchema = new Schema(
  {
    key: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true },
  },
  { _id: false }
);

const ratingSchema = new Schema(
  {
    average: { type: Number, default: 0, min: 0, max: 5 },
    count: { type: Number, default: 0, min: 0 },
  },
  { _id: false }
);

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: 3,
      maxlength: 150,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    shortDescription: {
      type: String,
      trim: true,
      maxlength: 300,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sku: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discountPrice: {
      type: Number,
      default: 0,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    images: [imageSchema],
    variants: [variantSchema],
    specifications: [specificationSchema],
    tags: [{ type: String, trim: true }],
    rating: ratingSchema,
    featured: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
    seoTitle: String,
    seoDescription: String,
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

productSchema.index({ name: "text", description: "text", tags: "text" });
productSchema.index({ category: 1, price: 1 });
productSchema.index({ featured: 1, status: 1 });
productSchema.index({ createdAt: -1 });

productSchema.virtual("finalPrice").get(function () {
  if (this.discountPrice && this.discountPrice > 0) {
    return this.discountPrice;
  }
  return this.price;
});

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

productSchema.methods.isInStock = function () {
  return this.stock > 0;
};

productSchema.methods.hasDiscount = function () {
  return this.discountPrice > 0;
};

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
