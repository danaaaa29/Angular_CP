import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { RecipeModel } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
      @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
      recipes: RecipeModel[] = [
        new RecipeModel('Pancakes', 'Yummy',
          'https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-1-1200.jpg'),
        new RecipeModel('French Fries', 'Voila',
          'https://img.taste.com.au/K02TrrZJ/w720-h480-cfill-q80/taste/2016/11/rachel-87711-2.jpeg')
      ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: RecipeModel){
    this.recipeWasSelected.emit(recipe);

  }

}
