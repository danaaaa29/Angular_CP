import { Injectable } from "@angular/core";
import { RecipeModel } from "./recipe.model";
import { IngredientModel } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";


@Injectable()
export class RecipeService{
  recipesChanged = new Subject<RecipeModel[]>();
  /*private recipes: RecipeModel[] = [
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
  ];*/

  private recipes : RecipeModel[] = [];

  constructor(private shoppingListService: ShoppingListService){}

  setRecipes(recipes: RecipeModel[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]){
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: RecipeModel){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: RecipeModel){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
