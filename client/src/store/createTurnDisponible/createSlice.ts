import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";


interface CreateState {
  countryAvailable: any;
  countryBorder: any;
  errorMessage: any;
  isLoading: boolean;

  }
  
  export const initialState: CreateState = {
    countryAvailable: null,
    countryBorder: null,
    errorMessage: null,
    isLoading: false,
  };

  export const getCountry = createAsyncThunk(
    "get-country",
    async (data , thunkAPI: any) => {
      try {
        const res = await thunkAPI.extra.country.getCountry();
        return res.data;  
        }
       catch (err: any) {
        if (!err.response) {
          throw err;
        }
        return thunkAPI.rejectWithValue(err.response.data);
      }
    }
  );

  export const checkBorderCountries = createAsyncThunk(
    "check-border-countries",
    async (data: string, thunkAPI: any) => {
      console.log('data de border',data)
      try {
        const res = await thunkAPI.extra.country.checkBorderCountries(data);
        return res.data;  
        }
       catch (err: any) {
        if (!err.response) {
          throw err;
        }
        return thunkAPI.rejectWithValue(err.response.data);
      }
    }
  );

  export const CreateTurnSlice = createSlice({
    name: "createTurnDisponible",
    initialState,
    reducers: {
      // ------------- //
      // Sync Reducers //
      // ------------- //
      setCountry: (state, action) => {
       state.countryAvailable = null;
      }
    },
    extraReducers: {
        [getCountry.fulfilled.type]: (state, action) => {
            state.countryAvailable = action.payload;
           
            state.isLoading = false;
        },
        [getCountry.pending.type]: (state, action) => {
          state.isLoading = true;
            state.errorMessage = null;
        },
        [getCountry.rejected.type]: (state, action) => {
            state.countryAvailable = undefined;
            state.isLoading = false;
            
            state.errorMessage = action.error.message;
        },
        [checkBorderCountries.fulfilled.type]: (state, action) => {
          state.countryBorder = action.payload;
         
          state.isLoading = false;
      },
      [checkBorderCountries.pending.type]: (state, action) => {
        state.isLoading = true;
          state.errorMessage = null;
      },
      [checkBorderCountries.rejected.type]: (state, action) => {
          state.countryBorder = undefined;
          state.isLoading = false;
          
          state.errorMessage = action.error.message;
      },
     }
});
export const createSelector = (state: RootState) => state.create;
export const {
  setCountry,
} = CreateTurnSlice.actions;
export default CreateTurnSlice.reducer;