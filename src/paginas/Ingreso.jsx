import React from 'react'

import { NavLink } from 'react-router-dom'
import ListaIngresos from '../componentes/ingresos/lista/ListaIngresos'

const Ingreso = () => {
    return (
        <>
            <NavLink className='btn btn-primary btn-sm p-2' to='/nuevoIngreso'>NUEVO INGRESO</NavLink>
            <ListaIngresos />
        </>
    )
}

export default Ingreso