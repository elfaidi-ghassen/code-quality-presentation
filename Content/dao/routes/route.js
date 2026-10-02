

// GET
function GET(req, res) {
    let controller = new GetProductsController(getProductsDAO())
    let products = controller.execute()
    return products
}
