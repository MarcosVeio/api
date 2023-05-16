export function Order(productsList) {
  this.productsList = productsList;
  this.id = `${Math.floor(Math.random() * 1000000)}`;
}
