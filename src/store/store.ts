import { combineReducers, createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

//Reducers
import { shopReducer } from "./reducers/shopReducer";

//Types
import { ShopState } from './reducers/types'

export interface ApplicationState {
  shop: ShopState;
}

const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>(
  {
    shop: shopReducer,
  }
);

export const store = createStore(rootReducer, composeWithDevTools());
