import images from '../config/images'

export const currency = '$';
export const orderId = '#0134234';

export const orderSummary = {
  total_price: 1300,
  discount_percentage: 10,
  discount_price: 25.99,
}

export const orders = [
  {
    product_title: "Kendall Jackson Vintner's Reserve Chardonnay",
    product_image: images.products.product1,
    product_price: 349.38,
    product_qty: 1,
    total_price: 349.38,
    discount_percentage: 0,
    discount_price: 0,
  },
  {
    product_title: "Kendall Jackson Vintner's Reserve Chardonnay Luxury Wine",
    product_image: images.products.product2,
    product_price: 2035.67,
    product_qty: 2,
    total_price: 4439.98,
    discount_percentage: 0,
    discount_price: 0,
  },
  {
    product_title: "Kendall Chardonnay",
    product_image: '',
    product_price: 349.38,
    product_qty: 1,
    total_price: 349.38,
    discount_percentage: 0, 
    discount_price: 0,
  },
  {
    product_title: "Kendall Jackson Vintner's Reserve Chardonnay",
    product_image: images.products.product1,
    product_price: 5349.38,
    product_qty: 1 ,
    total_price: 5349.38,
    discount_percentage: 0,
    discount_price: 0,
  },
  {
    product_title: "Jackson Luxury Wine",
    product_image: images.products.product2,
    product_price: 345.67,
    product_qty: 2,
    total_price: 439.98,
    discount_percentage: 10,
    discount_price: 25.99,
  },
]