import mongoose from 'mongoose';
import slugify from 'slugify';

const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
      trim: true,
      unique: true,
      minlength: 2,
      maxlength: 120,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    image: {
      public_id: String,
      url: String,
      alt: String,
    },
    parent: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
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

categorySchema.index({ name: 1 });
categorySchema.index({ slug: 1 });
categorySchema.index({ parent: 1 });

categorySchema.virtual('children', {
  ref: 'Category',
  localField: '_id',
  foreignField: 'parent',
  justOne: false,
});

categorySchema.pre('save', function (next) {
  if (this.isModified('name')) {
    this.slug = slugify(this.name, { lower: true, strict: true, trim: true });
  }
  next();
});

categorySchema.statics.findActive = function () {
  return this.find({ isDeleted: false, isActive: true });
};

export default mongoose.model('Category', categorySchema);
