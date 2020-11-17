import calculatePizzaPrice from './calculatePizzaPrice';

const CalculateOrderTotal = (order, pizzas) =>
  // Loop over each item in the order
  order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find(
      (singlePizza) => singlePizza.id === singleOrder.id
    );
    return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
// Calc the total for that pizza
// Add that total to the running total
export default CalculateOrderTotal;
