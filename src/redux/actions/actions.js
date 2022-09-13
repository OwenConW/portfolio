import { changeMode, selected } from "../reducer/reducer"


export const changeModeAction = (mode) => (dispatch) => {
    return dispatch(changeMode(mode))
}

export const changeSelectedWindow = (window) => (dispatch) => {
    return dispatch(selected(window))
}