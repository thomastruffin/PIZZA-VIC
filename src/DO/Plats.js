import Ingrediants from "./Ingredients";
import { Ingrediants } from "./enum";
//@ts-check

export class Pizza {
  #ingredientList;
  #price;
  #name;
  #Categories;
  /**
   * @param {Array<Ingrediants>} ingredientList
   * @param {Number} price
   * @param {String} name
   */
  constructor(ingredientList, price, name) {
    this.#ingredientList = ingredientList;
    this.#price = price;
    this.#name = name;
  }

  get ingredientList() {
    return this.#ingredientList;
  }
  set ingredientList(ingredientList) {
    this.#ingredientList = ingredientList;
  }
  get price() {
    return this.#price;
  }
  set price(price) {
    this.#price = price;
  }
  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }
}
