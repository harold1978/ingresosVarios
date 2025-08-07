import React from 'react'

const TablaIngresos = ({ ingresos }) => {

    return (

        <div className="card p-4 bg-light rounded shadow-sm mt-3">
            <h5 className="mb-3">Lista de Ingresos</h5>
            {ingresos.length === 0 ? (<p>No hay ingresos registrados.</p>)
                : (
                    <div className="row">
                        {ingresos.map((ingreso, index) => (
                            <div key={index} className="col-md-4 mb-3">
                                <div className="card shadow-sm h-100">
                                    <div className="card-body">
                                        <h5 className="card-title">{ingreso.descripcion}</h5>
                                        <p className="card-text">
                                            <strong>ID:</strong> {ingreso.id}<br />
                                            <strong>Fecha:</strong> {ingreso.fecha}<br />
                                            <strong>Monto:</strong> {ingreso.monto.toLocaleString("es-CR", { style: "currency", currency: "CRC" })}<br />
                                            <strong>Categoría:</strong> {ingreso.categoria}
                                        </p>
                                        <div className="d-flex justify-content-between flex-wrap gap-2 mt-3">
                                            <button className="btn btn-info btn-sm">Editar</button>
                                            <button className="btn btn-danger btn-sm">Eliminar</button>
                                            <button className="btn btn-primary btn-sm">Gastos</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
        </div>
    )
}

export default TablaIngresos