import { combineReducers } from "@reduxjs/toolkit";
import CreateTurnSlice  from "./createTurnDisponible/createSlice";


const rootReducer = combineReducers({
  create: CreateTurnSlice,
});

export default rootReducer;
