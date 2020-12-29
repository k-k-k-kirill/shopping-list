import { combineReducers, createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

//Reducers
import { shopReducer, ShopState } from "./reducers/shopReducer";

export interface ApplicationState {
  shop: ShopState;
}

const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>(
  {
    shop: shopReducer,
  }
);

export const store = createStore(rootReducer, composeWithDevTools());
