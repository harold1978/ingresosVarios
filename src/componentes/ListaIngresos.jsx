import React, { useState } from 'react'

const ListaIngresos = () => {
    const [ingresos, setIngresos] = useState([{ id: 'a01', fecha: '04/08/2025', descripcion: 'venta de pollos', monto: 100000, categoria: 'ventas' },
    { id: 'a02', fecha: '06/08/2025', descripcion: 'venta Automovil', monto: 5000000, categoria: 'ventas' }]);
    return (
        <div className="card p-4 bg-light rounded shadow-sm mt-3">
            <h5 className="mb-3">Lista de Ingresos</h5>
            {ingresos.length === 0 ? (<p>No hay ingresos registrados.</p>) : (<table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>Descripción</th>
                        <th>Monto</th>
                        <th>Categoría</th>
                        <th>Comandos</th>
                    </tr>
                </thead>
                <tbody>
                    {ingresos.map((ingreso, index) => (
                        <tr key={index}>
                            <td>{ingreso.id}</td>
                            <td>{ingreso.fecha}</td>
                            <td>{ingreso.descripcion}</td>
                            <td>{ingreso.monto.toLocaleString("es-CR", { style: "currency", currency: "CRC", })}</td>
                            <td>{ingreso.categoria}</td>
                            <td>b-editar // b-eliminar // b-registro gastos</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            )}
        </div>
    )
}

export default ListaIngresos