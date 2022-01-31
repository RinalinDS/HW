import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    return (
        <div>

            <NavLink to={'/pre-junior'}>Pre Junior | </NavLink>


            <NavLink to={'/junior'}>Junior | </NavLink>


            <NavLink to={'/juniorplus'}>Junior + </NavLink>


        </div>
    )
}

export default Header
