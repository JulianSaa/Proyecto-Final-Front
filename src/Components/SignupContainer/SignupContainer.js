import React, { useContext, useState } from 'react'
import { Context } from '../../Store/AppContext'

const SignupContainer = () => {

    const [email, setEmail] = useState('')
    const { onSignup } = useContext(Context)
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [password, setPassword] = useState('')

    const onClick = (e) => {
        e.preventDefault()
        onSignup(name, surname, email, password)
    }

    return (
        <>
            <form>
                <div className="mb-3">
                    <label className="form-label">Direccion de correo</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">No compartiremos esta informacion con nadie</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input value={surname} onChange={(e) => setSurname(e.target.value)} type="text" className="form-control" id="surname" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" />
                </div>
                <button onClick={onClick} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )

}

export default SignupContainer