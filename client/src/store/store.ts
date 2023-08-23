import { createSlice, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { Api } from "./apiSlice";



// dummy intial state for users

const initialUserState = {
    name: '',  
}

const user = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        }
    }
})

const store = configureStore({
  reducer: {
    user: user.reducer,
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

setupListeners(store.dispatch);

export const userSliceActions = user.actions

export type RootState = ReturnType<typeof store.getState>;

export default store;
