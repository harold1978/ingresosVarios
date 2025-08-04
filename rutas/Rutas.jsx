import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navegacion from '../src/componentes/Navegacion'
import Ingreso from '../src/paginas/ingreso'
import Gastos from '../src/paginas/Gastos'
import Foot from '../src/componentes/Foot'
import FrmIngreso from '../src/componentes/FrmIngreso'

export const Rutas = () => {
    return (
        <BrowserRouter>
            <Navegacion />
            <section className='mt-2'>
                <Routes>
                    <Route path="/" element={<h1>Bienvenido a la Aplicación de Finanzas</h1>} />
                    <Route path="/ingresos" element={<Ingreso />} />
                    <Route path="/nuevoIngreso" element={<FrmIngreso />} />
                    <Route path="/gastos" element={<Gastos />} />
                </Routes>
            </section>
            <Foot />
        </BrowserRouter>
    )
}
