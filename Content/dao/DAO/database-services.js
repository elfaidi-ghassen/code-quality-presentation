function getProductsDAO() {
    return new MongoProductsDAO(dbConnection)
}
function getClientsDAO() {
    // return new PostgresProductsDAO(dbConnection)
    return new MongoProductsDAO(dbConnection)
}
