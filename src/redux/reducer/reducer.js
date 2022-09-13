import { createAction, createReducer} from "@reduxjs/toolkit"

export const changeMode = createAction('change/mode')
export const selected = createAction("selected/nav")

const initialState = { 
    mode: null,
    selected: "home"
}

const rootReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(changeMode, (state, action) => {
          state.mode = action.payload;
      })
      .addCase(selected, (state, action) => {
          state.selected = action.payload;
      })
})


export default rootReducer