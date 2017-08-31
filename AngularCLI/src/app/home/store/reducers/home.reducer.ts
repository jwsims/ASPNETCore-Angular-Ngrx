import { FoodItem } from '../../../shared/models/foodItem.model';
import * as HomeActions from '../actions/home.actions';

export interface HomeState {
    foodItems: FoodItem[],
    randomMeal: FoodItem[]
};

export const initialState: HomeState = {
    foodItems: [],
    randomMeal: []
};

export function foodItemsHomeReducer(state = initialState, action: any): HomeState {
    switch (action.type) {

        case HomeActions.LOAD_FOOD_SUCCESS:
            const loadFoodAction = <HomeActions.LoadFoodSuccessAction>action;
            return {
                randomMeal: state.randomMeal,
                foodItems: loadFoodAction.foodItems
            };

        case HomeActions.LOAD_RANDOM_MEAL_SUCCESS:
            const loadRandomMealAction = <HomeActions.LoadRandomMealSuccessAction>action;
            return {
                randomMeal: loadRandomMealAction.foodItems,
                foodItems: state.foodItems
            };

        default:
            return state;

    }
}

