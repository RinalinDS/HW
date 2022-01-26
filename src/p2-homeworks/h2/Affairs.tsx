import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a.name}
            affairPriority = {a.priority}
            deleteAffairCallback={() => props.deleteAffairCallback(a._id)}
        />
    ))

    const setAll = () => props.setFilter("all")
    const setHigh = () => props.setFilter("high")
    const setMiddle = () => props.setFilter("middle")
    const setLow = () => props.setFilter("low")

    return (
        <div>

            {mappedAffairs}

            <SuperButton red className={s.someClass} onClick={setAll}>All</SuperButton>
            <SuperButton red className={s.someClass} onClick={setHigh}>High</SuperButton>
            <SuperButton red className={s.someClass} onClick={setMiddle}>Middle</SuperButton>
            <SuperButton red className={s.someClass} onClick={setLow}>Low</SuperButton>
        </div>
    )
}

export default Affairs
