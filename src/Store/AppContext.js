import axios from 'axios'
import { useEffect, useState, createContext } from 'react'
import { BASE_URL } from '../utils/URL'
import Cookies from 'js-cookie'


export const Context = createContext(null)
const UserProvider = ({ children }) => {
    // const [usuario, setUsuario] = useState({})
    // const [counter, setCounter] = useState(0)
    const [user, setUser] = useState(Cookies.get('user') ? JSON.parse(Cookies.get('user')) : '')

    const onLogin = async (email, password) => {

        try {
            const userInfo = { email, password }
            console.log(userInfo)

            const response = await axios.post(`${BASE_URL}/login/`, userInfo)

            console.log(response)

            const data = await response.data
            console.log(data)

            if (data.existe) {
                setUser(data.user)
            } else {
                
            }


        } catch (error) {
            console.log(error)
        }
    }

    const onSignup = async (name, surname, email, password) => {

        try {
            const userInfo = { name, surname, email, password }

            console.log(userInfo)

            const response = await axios.post(`${BASE_URL}/login/signup`, userInfo)
            console.log(response)

            const data = await response.data
            console.log(data)

            if (data.existe) {
                setUser(data.user)
            } else {

            }

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        Cookies.set('user', JSON.stringify(user))
    }, [user])



    return (

        <Context.Provider value={{
            onLogin,
            user, 
            onSignup, 
            setUser
        }}>
            {children}
        </Context.Provider>
    )


}


export default UserProvider