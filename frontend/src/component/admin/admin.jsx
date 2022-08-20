import { Heading, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react"
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import { LoadingComponet } from "../loading/loading";
import "./admin.css"


export const Admin = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['Bearer']);
    const [userData, setuserData] = useState([])
    const [loading, setloadin] = useState(true)
    const navigate = useNavigate()


    useEffect(() => {
        axios.post("https://bandbserver.herokuapp.com/admin", cookies)
            .then((res) => {
                setloadin(false)
                if (res.status == 200) {
                    setuserData(res.data)
                }
            })
            .catch((err) => {
                if (err.status == 500) {
                    alert("your are not login")
                    return navigate("/login", { replace: true })
                }
                else {
                   
                    return navigate("/user", { replace: true })
                }
            })
    }, [])


    return <div>
        {loading && <LoadingComponet />}
        <div >
            <Heading as='h2' size='2xl' marginBottom={"20px"} paddingTop="60px">Welcome admin</Heading>
        </div>
        <div  className="table">
        <TableContainer >
            <Table  variant='striped' colorScheme='blue'>
                <TableCaption></TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th isNumeric>role</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {userData?.map((e) => {
                        return <Tr key={e._id}>
                            <Td>{e.name}</Td>
                            <Td>{ e.email}</Td>
                            <Td isNumeric>{ e.role}</Td>
                        </Tr>
                    })}
                   
                </Tbody>
            </Table>
        </TableContainer>
        </div>

    </div>

   
    

        
  

}