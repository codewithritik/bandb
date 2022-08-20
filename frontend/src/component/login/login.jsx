import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
} from '@chakra-ui/react';

import "./login.css"
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios"

export const Login  = ()=> {
    const navigate = useNavigate()


    const [logData, setlogData] = useState("")
    const Handlechange = (e) => {
        setlogData({ ...logData, [e.target.name]: e.target.value })
    }


    const Handlesubmit = (e) => {
        e.preventDefault()
    console.log("hhd")
        axios.post("https://bandbserver.herokuapp.com/login", logData)
            .then((res) => {
            
                if (res.status == 200) {
                    navigate("/admin", { replace: true })
                }
            })
            .catch((err) => {
              
                let allerror = (err.response.data)
                
                alert(allerror)
            })
    }

   

    return (< div className="login-contanier" >
        <Container className='singupform'>
            <Stack
                bg={'gray.50'}
                rounded={'xl'}
                p={{ base: 4, sm: 6, md: 8 }}
                spacing={{ base: 8 }}
                maxW={{ lg: 'lg' }}>
                <Stack spacing={4}>
                    <Heading
                        color={'gray.800'}
                        lineHeight={1.1}
                        fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                        Login
                        <Text
                            as={'span'}
                            bgGradient="linear(to-r, red.400,#FF426F)"
                            bgClip="text">
                            !
                        </Text>
                    </Heading>
                </Stack>
                <Box mt={10}>
                    <form  onSubmit={Handlesubmit}>

                   
                    <Stack spacing={4}>
                       
                        <Input
                            placeholder="example@gamil.com"
                            _focus={{ border: "2px solid #56E4ED" }}
                            bg={'gray.100'}
                            border={0}
                            color={'black'}
                            _placeholder={{
                                color: 'gray.500',
                            }}
                            type="email"
                            name="email"
                            required
                            onChange={Handlechange}
                        />
                        <Input
                            placeholder="Password"
                            _focus={{ border: "2px solid #56E4ED" }}
                            bg={'gray.100'}
                            border={0}
                            color={'black'}
                            _placeholder={{
                                color: 'gray.500',
                            }}
                            type="password"
                            required
                            onChange={Handlechange}
                            name="password"
                        />
                       
                    </Stack>
                    <Button
                        fontFamily={'heading'}
                        mt={8}
                        type="submit"
                        w={'full'}
                        bgGradient="linear(to-r, red.400,pink.400)"
                        color={'white'}
                        _hover={{
                            bgGradient: 'linear(to-r, red.400,#FF3673)',
                            boxShadow: 'xl',
                        }}>
                       Login
                        </Button>
                    </form>
                    <Text
                        as={"h2"}
                        marginTop="5px"
                        _hover={{
                            color: 'blue',

                        }}>

                        <Link to="/" >   New user? create an account</Link>
                    </Text>


                </Box>

            </Stack>
        </Container>
    </div>



    );
}
