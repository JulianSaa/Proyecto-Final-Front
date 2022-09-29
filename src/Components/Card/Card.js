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
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
                <div className="card me-5">
                    <img src={gris} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
                <div className="card ms-4">
                    <img src={gris} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
                <div className="card ms-5">
                    <img src={gris} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Card 