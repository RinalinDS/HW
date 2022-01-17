import React from 'react'
import {FilterType} from "./HW2";

type AffairPropsType = {
    affairPriority:  FilterType

    affair: string
    deleteAffairCallback: () => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback()

    return (
        <div>
            {props.affair} - priority: {props.affairPriority}

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
