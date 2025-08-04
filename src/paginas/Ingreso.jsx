import React from 'react'
import ListaIngresos from '../componentes/ListaIngresos'
import { NavLink } from 'react-router-dom'

const Ingreso = () => {
    return (
        <>
            <NavLink className='btn btn-primary btn-sm p-2' to='/nuevoIngreso'>NUEVO INGRESO</NavLink>
            <ListaIngresos />
        </>
    )
}

export default Ingreso