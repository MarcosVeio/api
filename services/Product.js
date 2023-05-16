function ListOfProducts() {
  // tabela listProduct do banco de dados
  this.listProduct = [
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
  ];

  this.getAllProducts = () => {
    return this.listProduct;
  };

  this.addProduct = (newProduct) => {
    this.listProduct.push(newProduct);
  };

  this.deleteProduct = (idProduct) => {
    this.listProduct = this.listProduct.filter(({ id }) => id !== idProduct);
  };

  this.getProductById = (idProduct) => {
    return this.listProduct.filter(({ id }) => id === idProduct);
  };
}

export { ListOfProducts };
