const initState = {
    loading: false
}

export type stateType = {
    loading: boolean
}

const CHANGE_LOADING = 'CHANGE-LOADING'

export const loadingReducer = (state:stateType = initState, action: GeneralType): stateType => { // fix any
    switch (action.type) {
        case CHANGE_LOADING: {
            return {...state, loading: !state.loading}
            }
        default:
            return state
    }
}

export type GeneralType = loadingACType

export type loadingACType = {
    type: 'CHANGE-LOADING' // почему тут нельзя переменную вставить, интересно
}

export const loadingAC = (): loadingACType => {
    return {
        type: CHANGE_LOADING
    }
} // fix any