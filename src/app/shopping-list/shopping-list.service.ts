
import { IngredientModel } from "../shared/ingredient.model";
import { Subject } from 'rxjs';

export class ShoppingListService{
  ingredientsChanged = new Subject<IngredientModel[]>();
  startedEditing = new Subject<number>();
  private ingredients: IngredientModel[] = [
    new IngredientModel('Flour', 5),
    new IngredientModel('Eggs', 30),
    new IngredientModel('Potatoes', 10)
  ];
  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  addIngredient(ingredient: IngredientModel){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: IngredientModel[]){
    /*for(let ingredient of ingredients){
      this.addIngredient(ingredient);
    }*/
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: IngredientModel){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
     this.ingredients.splice(index, 1);
     this.ingredientsChanged.next(this.ingredients.slice());
  }
}
