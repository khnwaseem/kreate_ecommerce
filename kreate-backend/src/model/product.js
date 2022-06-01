const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;


const productSchema = new mongoose.Schema({
  title : {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
    unique:true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 2000
  },
  price: {
    type: Number,
    reqired: true,
    maxlength: 32,
    trim: true
  },
  discount_price: {
    type: Number,
    maxlength: 32
  },
  quantity: {
    type: Number,
    maxlength: 4,
    trim:true,
  },
  productimage: {
      type: String,
        required:true
  },
  sold: {
    type: Number,
    default: 0,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  slug: {
    type: String,
    trim: true,
    maxlength: 100,
    unique: true,
  },
  is_bestseller : {
    type:Boolean,
    default: false
  },
  is_featured: {
    type: Boolean,
    default: false
  },
  is_shipping : {
    type: Boolean,
    default: false
  },
  tax: {
    type:Boolean,
    default: false
  },
  weight: {
    type: Number,
    trim: true,
    default: 0
  },
  vendor: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

productSchema.pre('save',function (next) {
    const product = this

    const productlower = product.title.toLowerCase()

    product.slug = productlower.replace(/\s+/g,'-')
    next()
})




const Product = mongoose.model('Product',productSchema)

module.exports = Product
