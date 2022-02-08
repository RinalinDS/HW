import {UserType} from "../HW8";

type ActionType = SortACType | CheckAgeACType

type SortACType = {
    type: "sort"
    payload: "up" | "down"
}
type CheckAgeACType = {
    type: "check"
    payload: number
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort':
            const copyState = [...state]
            if (action.payload === "up") {
                copyState.sort((a, b) => a.age - b.age)
            } else if (action.payload === "down") {
                copyState.sort((a, b) => b.age - a.age)
            }
            return copyState
        case 'check': {
            return state.filter(f => f.age >= action.payload)
        }
        default:
            return state
    }
}