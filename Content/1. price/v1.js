function printItemName(item) {
  console.log("NAME:")
  console.log(item.name)
  console.log("PRICE:")
  console.log('$' + item.price.toFixed(2))
}

function printItemDetails(item) {
  console.log("NAME:")
  console.log(item.name)
  console.log("PRICE:")
  console.log('$' + item.price.toFixed(2))
  console.log("---")
}

function printCartLine(item, quantity) {
  console.log("NAME:")
  console.log(item.name)
  console.log("PRICE:")
  console.log('$' + item.price.toFixed(2))
  console.log("QTY:")
  console.log(quantity)
}

function printOrderSummary(items) {
  for (const item of items) {
    console.log("NAME:")
    console.log(item.name)
    console.log("PRICE:")
    console.log('$' + item.price.toFixed(2))
  }
  const total = items.reduce((sum, item) => sum + item.price, 0)
  console.log(`Total: $${total.toFixed(2)}`)
}