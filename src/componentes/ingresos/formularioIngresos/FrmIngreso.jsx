import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const FrmIngreso = () => {
    const [ingreso, setIngreso] = useState({ fecha: "", descripcion: "", monto: "", categoria: "" });

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        // const name = e.target.name;
        // const value = e.target.value;
        setIngreso({ ...ingreso, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ingreso);
        localStorage.setItem('ingreso', JSON.stringify(ingreso));
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="card p-4 bg-light rounded shadow-sm">
                <h5 className="mb-3">Registrar Ingreso</h5>

                <div className="mb-3">
                    <label className="form-label">Fecha</label>
                    <input type='date' name="fecha" onChange={handleChange} placeholder="fecha" className="form-control rounded" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <input name="descripcion" onChange={handleChange} placeholder="Descripción" className="form-control rounded" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Monto</label>
                    <input name="monto" type="number" onChange={handleChange} placeholder="Monto" className="form-control rounded" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Categoría</label>
                    <input name="categoria" onChange={handleChange} placeholder="Categoría" className="form-control rounded" />
                </div>

                <button type="submit" className="btn btn-primary rounded">Registrar Ingreso</button>
            </form>
            <NavLink to='/ingresos'> Atras</NavLink>
        </>
    )
}

export default FrmIngreso