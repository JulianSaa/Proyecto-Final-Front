import axios from 'axios'
import { useEffect, useState, createContext } from 'react'
import { BASE_URL } from '../utils/URL'
import Cookies from 'js-cookie'


export const Context = createContext(null)
const UserProvider = ({ children }) => {
    // const [compras, setCompras] = useState([])
    // const [celulares, setCelulares] = useState([])
    const [usuario, setUsuario] = useState({})
    const [counter, setCounter] = useState(0)
    const [user, setUser] = useState(Cookies.get('user') ? JSON.parse(Cookies.get('user')) : '')

    //     const obtenerCelulares = async () => {
    //         const response = await axios.get(`${BASE_URL}`)
    //         setCelulares(response.data.results)
    //     }

    // const agregarCompras = (favs) => {

    //     const agregarFavs = compras.find(peliElegida => peliElegida.id === favs.id)

    //         if (agregarFavs) {
    //             setCompras([...compras])
    //         } else {
    //             setCounter(counter + 1)
    //             setCompras([...compras, { ...favs }])

    //         }
    //     }

    // const borrarCompras = (id) => {
    //     setCounter (counter - 1)
    //     setCompras(compras.filter(borrarFavs => borrarFavs.id !== id))
    // }


    const onLogin = async (email, password) => {

        try {
            const userInfo = { email, password }
            console.log(userInfo)

            const response = await axios.post(`${BASE_URL}/login/`, userInfo)

            // console.log(response)

            const data = await response.data
            console.log(data)

            if (data.existe) {
                setUser(data.user)
            } else {
                // console.log('no') -----------------------------------------
            }


        } catch (error) {
            // console.log(error)
        }
    }

    const onSignup = async (name, surname, email, password) => {

        try {
            const userInfo = { name, surname, email, password }

            // console.log(userInfo)

            const response = await axios.post(`${BASE_URL}/login/signup`, userInfo)
            console.log(response)

            const data = await response.data
            console.log(data)

            if (data.existe) {
                setUser(data.user)
            } else {
                // console.log('no') -----------------------------------------
            }

        } catch (error) {
            // console.log(error)
        }
    }


    useEffect(() => {
        Cookies.set('user', JSON.stringify(user))
    }, [user])



    return (

        <Context.Provider value={{
            onLogin, user, onSignup

            //
            // celulares, setCelulares, compras, agregarCompras, borrarCompras, counter, , setUser

        }}>
            {children}
        </Context.Provider>
    )


}


export default UserProvider