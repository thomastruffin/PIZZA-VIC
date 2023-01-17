//@ts-check
import { IngrediantsType } from "./enum";
export default class Ingrediants {
  #legumeName;
  #type;
  /**
   *
   * @param {String} legumeName
   * @param {String} type
   */
  constructor(legumeName, type) {
    this.#legumeName = legumeName;
    this.#type = IngrediantsType[type];
  }
  get legumeName() {
    return this.#legumeName;
  }
  set legumeName(legumeName) {
    this.#legumeName = legumeName;
  }

  get type() {
    return this.#type;
  }
  set type(legumeName) {
    this.#type = legumeName;
  }
}
