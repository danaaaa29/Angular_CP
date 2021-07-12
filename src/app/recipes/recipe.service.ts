import { EventEmitter, Injectable } from "@angular/core";
import { RecipeModel } from "./recipe.model";
import { IngredientModel } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<RecipeModel>();
  private recipes: RecipeModel[] = [
    new RecipeModel(
      'Pancakes',
      'Yummy',
      'https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-1-1200.jpg',
      [
        new IngredientModel('Sugar',1),
        new IngredientModel('Milk', 2)
      ]),
    new RecipeModel(
      'French Fries',
      'Voila',
      'https://img.taste.com.au/K02TrrZJ/w720-h480-cfill-q80/taste/2016/11/rachel-87711-2.jpeg',
      [
        new IngredientModel('Ketchup', 3),
        new IngredientModel('Garlic Sauce', 4)
      ])
  ];
  constructor(private shoppingListService: ShoppingListService){}
  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(index: number){
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: IngredientModel[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
