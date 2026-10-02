function formatPrice(price) {
  return '$' + price.toFixed(2)
}

function printItemName(item) {
  console.log("NAME:")
  console.log(item.name)
  console.log("PRICE:")
  console.log(formatPrice(item.price))
}

function printItemDetails(item) {
  console.log("NAME:")
  console.log(item.name)
  console.log("PRICE:")
  console.log(formatPrice(item.price))
  console.log("---")
}

function printCartLine(item, quantity) {
  console.log("NAME:")
  console.log(item.name)
  console.log("PRICE:")
  console.log(formatPrice(item.price))
  console.log("QTY:")
  console.log(quantity)
}

function printOrderSummary(items) {
  for (const item of items) {
    console.log("NAME:")
    console.log(item.name)
    console.log("PRICE:")
    console.log(formatPrice(item.price))
  }
  const total = items.reduce((sum, item) => sum + item.price, 0)
  console.log(`Total: ${formatPrice(total)}`)
}