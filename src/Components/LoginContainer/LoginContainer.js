import React, { useContext, useState } from 'react'
import { Context } from '../../Store/AppContext'

const LoginContainer = () => {

    const {onLogin} = useContext(Context)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const onClick = (e) => {
        e.preventDefault()
        // console.log(name, password)
        onLogin(name, password)
        
    }

    return (
        <>
            <form>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button onClick={onClick} type="submit" className="btn btn-primary">Submit</button>
            </form></>
    )
}

export default LoginContainer