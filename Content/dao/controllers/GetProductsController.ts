

class GetProductsController {
    private productsDAO
    constructor(productsDAO: ProductsDAO) {
        this.productsDAO = productsDAO    
    }
    execute() {
        return this.productsDAO.getAll()
    }
}

