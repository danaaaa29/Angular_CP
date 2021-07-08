import { EventEmitter } from "@angular/core";
import { IngredientModel } from "../shared/ingredient.model";

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<IngredientModel[]>();
  private ingredients: IngredientModel[] = [
    new IngredientModel('Flour', 5),
    new IngredientModel('Eggs', 30),
    new IngredientModel('Potatoes', 10)
  ];
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient: IngredientModel){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: IngredientModel[]){
    /*for(let ingredient of ingredients){
      this.addIngredient(ingredient);
    }*/
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
