type themeReducerStateType = {
    theme: string
}

const initState = {
    theme: ''
};

export const themeReducer = (state: themeReducerStateType = initState, action: ActionsTypeForthemeReducer): themeReducerStateType => { // fix any
    switch (action.type) {
        case CHANGE_THEME : {
            return {...state, theme: action.payload.theme};
        }
        default:
            return state;
    }
};

type ActionsTypeForthemeReducer = changeThemeACType

const CHANGE_THEME = 'CHANGE_THEME'

type changeThemeACType = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (theme: string) => {
    return {
        type: CHANGE_THEME,
        payload: {
            theme
        }
    } as const
}

export const changeThemeC = (): any => {
}; // fix any