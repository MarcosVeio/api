function ListOfProducts() {
  // tabela listProduct do banco de dados
  this.listProduct = [];

  this.getAllProducts = () => {
    return this.listProduct;
  };

  this.addProduct = (newProduct) => {
    this.listProduct.push(newProduct);
  };

  this.deleteProduct = (idProduct) => {
    this.listProduct = this.listProduct.filter(({ id }) => id !== idProduct);
  };
}

export { ListOfProducts };
