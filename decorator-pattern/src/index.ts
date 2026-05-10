import { CheeseBurstPizza } from "./BaseClass/CheeseBurstPizza.js";
import { PotCheesePizza } from "./BaseClass/PotCheesePizza.js";
import { CornTopping } from "./DecoratorClass/CornTopping.js";
import { JalapenoTopping } from "./DecoratorClass/JalapenoTopping.js";
import { OnionTopping } from "./DecoratorClass/OnionTopping.js";

const pizza1 = new OnionTopping(10, new CornTopping(10, new CheeseBurstPizza()))
console.log(pizza1.getDescription())
console.log(pizza1.getCost())

const pizza2 = new OnionTopping(12, new JalapenoTopping(5, new OnionTopping(3, new PotCheesePizza())))

console.log(pizza2.getDescription())
console.log(pizza2.getCost())
