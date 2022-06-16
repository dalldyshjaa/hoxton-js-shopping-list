let items = ["Milk", "Cocoa", "Salad", "Carrots", "Tomatoes", "Ready meals"];
let itemsPrices = [1.2, 2.0, 2.0, 2.0, 2.5, 5.0];
let total = 0;
let itemsBoughtAndPrices = [];
let askCostumer = prompt("buy smthing or press cancel if you dont want");
while (askCostumer != null) {
  for (let index in items) {
    if (askCostumer === items[index]) {
      if (
        confirm(
          `${askCostumer} costs ${itemsPrices[index].toFixed(
            2
          )}$ do you want to buy it?`
        )
      ) {
        itemsBoughtAndPrices.push(askCostumer);
        itemsBoughtAndPrices.push(itemsPrices[index]);
        total += itemsPrices[index];
      }
    }
  }
  askCostumer = prompt("buy smthing or press cancel if you dont want");
}

for (let i = 0; i < itemsBoughtAndPrices.length; i += 2) {
  console.log(
    `- ${itemsBoughtAndPrices[i]}: ${itemsBoughtAndPrices[i + 1].toFixed(2)}$`
  );
}
console.log("- total: " + total.toFixed(2) + "$");
