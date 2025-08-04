import React from 'react'
import { NavLink } from 'react-router-dom'

const Navegacion = () => {
    return (
        <>
            <ul className="nav nav-pills" >

                <li className="nav-item" role="presentation">
                    <NavLink className="nav-link" to='/' >
                        INICIO
                    </NavLink>
                </li>
                <li className="nav-item" role="presentation">
                    <NavLink
                        className="nav-link" to='/ingresos'
                    >INGRESOS</NavLink>
                </li>
                <li className="nav-item" role="presentation">
                    <NavLink
                        className="nav-link" to='/gastos'
                    >GASTOS</NavLink>
                </li>
            </ul>


        </>

        // <nav className="nav justify-content-center flex-column">
        //     <NavLink className="nav-link active" to='/ingresos' aria-current="page">INGRESOS</NavLink>
        //     <NavLink className="nav-link" to='/gastos'>GASTOS</NavLink>
        //     <NavLink className="nav-link" to='/'>INICIO</NavLink>
        // </nav>
    )
}

export default Navegacion