import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  
  getDishes(): Dish[] {
    return DISHES;
  }

  getDish(id: string): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }

  getAppetizers(): Dish[] {
    return DISHES.filter((dish) => dish.category === 'appetizer');
  }

  getDesserts(): Dish[] {
    return DISHES.filter((dish) => dish.category === 'dessert');
  }

  getMains() : Dish[] {
    return DISHES.filter((dish) => dish.category === 'mains')
  }
  
  constructor() { }
}
