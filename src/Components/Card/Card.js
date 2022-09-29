import React from 'react';
import { Link } from 'react-router-dom';
import gris from '../../assets/img/gris.jpg'
import './Card.css'

const Card = () => {
    return (
        <>
            <div className='container-fluid cardcontainer mt-5'>
                <div className="card me-5">
                    <img src={gris} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Producto</h5>
                        <p className="card-text">Valor de producto:x </p>
                        <p className="card-text">Stock: Si </p>
                        <Link to="#" className="btn btn-primary">Ver producto</Link>
                    </div>
                </div>
                <div className="card me-5">
                    <img src={gris} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Producto</h5>
                        <p className="card-text">Valor de producto:x </p>
                        <p className="card-text">Stock: Si </p>
                        <Link to="#" className="btn btn-primary">Ver producto</Link>
                    </div>
                </div>
                <div className="card ms-4">
                    <img src={gris} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Producto</h5>
                        <p className="card-text">Valor de producto:x</p>
                        <p className="card-text">Stock: Si </p>
                        <Link to="#" className="btn btn-primary">Ver producto</Link>
                    </div>
                </div>
                <div className="card ms-5">
                    <img src={gris} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Producto</h5>
                        <p className="card-text">Valor de producto:x</p>
                        <p className="card-text">Stock: Si </p>
                        <Link to="#" className="btn btn-primary">Ver producto</Link>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Card 