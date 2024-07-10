const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 750 },
  { id: 4, name: "Monitor", price: 300 },
  { id: 5, name: "Headphones", price: 150 },
];
const orders = [
  {
    orderId: 1,
    customerId: 1,
    items: [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 2 },
    ],
  },
  { orderId: 2, customerId: 2, items: [{ productId: 3, quantity: 1 }] },
  {
    orderId: 3,
    customerId: 1,
    items: [
      { productId: 4, quantity: 2 },
      { productId: 5, quantity: 1 },
    ],
  },
  {
    orderId: 4,
    customerId: 3,
    items: [
      { productId: 2, quantity: 3 },
      { productId: 5, quantity: 2 },
    ],
  },
];

const result = orders.map((order) => {
  let sum = 0;
  const orderItems = order.items.map((item) => {
    products.map((product) => {
      if (item.productId === product.id) {
        sum += product.price * item.quantity;
      }
    });
  });
  return {
    orderId: order.orderId,
    customerId: order.customerId,
    totalItemPrice: sum,
  };
});
console.log("TotalValue", result);

//2. Identify the customer who spent the most money.
let customertotalPrice = {};

result.forEach((order) => {
  if (customertotalPrice[order.customerId]) {
    customertotalPrice[order.customerId] += order.totalItemPrice;
  } else {
    customertotalPrice[order.customerId] = order.totalItemPrice;
  }
});
let maxMoney = Object.keys(customertotalPrice);
max = 0;
let i;
let customerMostMoney = {};
maxMoney.forEach((cid) => {
  if (customertotalPrice[cid] > max) {
    max = customertotalPrice[cid];
    i = cid;
  }
  customerMostMoney = {
    customerId: i,
    price: max,
  };
});

console.log("customer who spent the most money", customerMostMoney);

// 3. most Frquently Ordered

let productArray = [];
const orderItems = orders.map((order) => {
  const items = order.items.map((item) => {
    productArray.push(item);
  });
});
let totalQuantity = {};
productArray.forEach((prdt) => {
  if (totalQuantity[prdt.productId]) {
    totalQuantity[prdt.productId] += prdt.quantity;
  } else {
    totalQuantity[prdt.productId] = prdt.quantity;
  }
});

let maxQuantity = 0;
let mostFrequentlyOrdered = {};
Object.keys(totalQuantity).forEach((productId) => {
  if (totalQuantity[productId] > maxQuantity) {
    maxQuantity = totalQuantity[productId];
    mostFrequentlyOrdered = {
      productId: parseInt(productId),
      totalQuantity: maxQuantity,
    };
  }
});
const mostFrequentProduct = products.find(
  (product) => mostFrequentlyOrdered.productId === product.id
);
console.log("most frequently ordered product", mostFrequentProduct);
