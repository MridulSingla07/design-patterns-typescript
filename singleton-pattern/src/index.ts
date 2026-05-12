import { Singleton1 } from "./eager_initialization.js";
import { Singleton2 } from "./lazy_initialization.js";

const eager_s1 = Singleton1.getInstance()
const eager_s2 = Singleton1.getInstance()

const lazy_s1 = Singleton2.getInstance()
const lazy_s2 = Singleton2.getInstance()

console.log('eager_s1 === eager_s2 : ', eager_s1 === eager_s2)
console.log('lazy_s1 === lazy_s2 : ', lazy_s1 === lazy_s2)