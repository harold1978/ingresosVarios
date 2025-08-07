import React, { useState } from 'react'
import TablaIngresos from './tablaingresos/TablaIngresos';

const ListaIngresos = () => {
    const [ingresos, setIngresos] = useState([
        { id: 'a01', fecha: '04/08/2025', descripcion: 'venta de pollos', monto: 100000, categoria: 'ventas' },
        { id: 'a02', fecha: '06/08/2025', descripcion: 'venta Automovil', monto: 5000000, categoria: 'ventas' }]);
    return (

        <TablaIngresos ingresos={ingresos} />
    )
}

export default ListaIngresos