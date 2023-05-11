export function Item(category, description, price) {
  this.category = category;
  this.description = description;
  this.price = price;
  this.id = `${Math.floor(Math.random() * 1000000)}`;
}
