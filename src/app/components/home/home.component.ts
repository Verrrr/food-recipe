import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipes: Recipe[];
  search: any;
  searchArray;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {

  }

  onKeyUp(event){
    let data = {};
    
    this.dataService.search(event.target.value)
      .subscribe(recipes=>{

        recipes.forEach(recipe => {
          data[recipe.name] = recipe.image;
        });

        this.searchArray = [{data}];
        event.target.blur();
        event.target.focus();

        if(event.keyCode == 13){
          this.recipes = recipes;
        }

      });
  }

  

}