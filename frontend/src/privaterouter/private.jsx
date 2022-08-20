import axios from "axios";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"

export const Private = ( {children} ) => {
    const navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies(['Bearer']);
    const [auth, setauth]= useState(false)
    useEffect(() => {
        axios.post("https://bandbserver.herokuapp.com/admin", cookies)
            .then((res) => {
                if (res.status == 200) {
                    setauth(true)
                }
            })
            .catch((err) => {
                if (err.status == 500) {
                    alert("your are not login")
                    return navigate("/login", { replace: true })
                }
                else {
                    alert("your are not admin")
                    return navigate("/login", { replace: true })
                }
            })
        
    }, [])
    return auth ? children : null
}