import axios from "axios"
import { useEffect } from "react"
export const Admin = () => {
    useEffect(() => {
        axios.get("https://bandbserver.herokuapp.com/admin")
            .then((res) => {
                console.log(res)
                
                // if (res.status == 200) {
                //     navigate("/admin", { replace: true })
                // }
            })
            .catch((err) => {
                console.log(err)
                let allerror = (err.response.data)

                alert(allerror)
            })
    

        
    },[])
}