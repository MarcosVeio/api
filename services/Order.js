import { products } from "../controller/product/Product.js";

function ListOfOrders() {
  this.listOrders = [
    {
      productsList: [
        {
          category: "Eletrônico",
          description: "Galaxy Y",
          price: 350,
          id: "352606",
        },
        {
          category: "Eletrônico",
          description: "Iphone 12",
          price: 4500,
          id: "544021",
        },
      ],
      id: "756583",
    },
  ];

  this.getAllOrders = () => {
    return this.listOrders;
  };

  this.addOrder = (newOrder) => {
    this.listOrders.push(newOrder);
  };

  this.getOrderById = (idOrder) => {
    return this.listOrders.filter(({ id }) => id === idOrder);
  };

  this.addProductInOrder = (idProduct, idOrder) => {
    const [getOrderById] = this.getOrderById(idOrder);
    const [getProductById] = products.getProductById(idProduct);

    getOrderById.productsList.push(getProductById);
    return getOrderById;
  };

  this.removeProductInOrder = (idProduct, idOrder) => {
    for (const order of this.listOrders) {
      if (order.id === idOrder) {
        order.productsList = order.productsList.filter(
          ({ id }) => id !== idProduct
        );
      }
    }
  };

  this.removeOrder = (idOrder) => {
    this.listOrders = this.listOrders.filter(({ id }) => id !== idOrder);
  };
}

export { ListOfOrders };
