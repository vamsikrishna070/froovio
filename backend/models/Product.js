import mongoose from "mongoose";
import slugify from "slugify";

const { Schema } = mongoose;

const imageSchema = new Schema({
  public_id:{type:String,required:true,trim:true},
  url:{type:String,required:true,trim:true},
  alt:{type:String,default:"",trim:true},
  isPrimary:{type:Boolean,default:false}
},{_id:false});

const variantSchema = new Schema({
  name:{type:String,required:true,trim:true},
  value:{type:String,required:true,trim:true},
  additionalPrice:{type:Number,default:0,min:0},
  stock:{type:Number,default:0,min:0},
  sku:{type:String,trim:true}
},{_id:false});

const specificationSchema = new Schema({
  key:{type:String,required:true,trim:true},
  value:{type:String,required:true,trim:true}
},{_id:false});

const ratingSchema = new Schema({
  average:{type:Number,default:0,min:0,max:5},
  count:{type:Number,default:0,min:0}
},{_id:false});

const productSchema = new Schema({
  name:{
    type:String,
    required:[true,"Product name is required"],
    trim:true,
    minlength:3,
    maxlength:150
  },
  slug:{
    type:String,
    unique:true,
    lowercase:true,
    trim:true
  },
  shortDescription:{
    type:String,
    trim:true,
    maxlength:300
  },
  description:{
    type:String,
    required:true
  },
  category:{
    type:Schema.Types.ObjectId,
    ref:"Category",
    required:true
  },
  brand:{
    type:Schema.Types.ObjectId,
    ref:"Brand"
  },
  seller:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  sku:{
    type:String,
    required:true,
    unique:true,
    uppercase:true,
    trim:true
  },
  price:{
    type:Number,
    required:true,
    min:0
  },
  discountPrice:{
    type:Number,
    default:0,
    min:0
  },
  stock:{
    type:Number,
    required:true,
    default:0,
    min:0
  },
  images:[imageSchema],
  variants:[variantSchema],
  specifications:[specificationSchema],
  tags:[{type:String,trim:true}],
  rating:ratingSchema,
  featured:{type:Boolean,default:false},
  status:{
    type:String,
    enum:["draft","published","archived"],
    default:"draft"
  },
  seoTitle:String,
  seoDescription:String,
  isDeleted:{
    type:Boolean,
    default:false
  }
},{
  timestamps:true,
  toJSON:{virtuals:true},
  toObject:{virtuals:true}
});

export { productSchema };
