import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    Select,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./register.css"
import axios from "axios"


export const Register =()=> {
   
    const navigate  = useNavigate()

    const [regData, setregData] = useState("")

    const Handlechange = (e) => {
        setregData({...regData,[e.target.name]:e.target.value})
    }
 

    const Handlesubmit = (e) => {
        e.preventDefault()
        console.log("ss")
        axios.post("https://bandbserver.herokuapp.com/register", regData)
            .then((res) => {
                if (res.status == 201) {
                    navigate("/login", { replace: true })
               }
            })
            .catch((err) => {
                let allerror = (err.response.data.errors)
                const { msg } = allerror[0]
                alert(msg)
        })
    }



    return (< div className= "resgister-contanier" >
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
                         Register Now
                            <Text
                                as={'span'}
                                bgGradient="linear(to-r, red.400,#FF426F)"
                                bgClip="text">
                                !
                            </Text>
                    </Heading>
                    <Heading 
                        as='h4' size='md'
                        color={ "#FF426F"}
                       >
                        Looks like you're new here!
                    </Heading>
                    
                    </Stack>
                    <Box  mt={10} >
                    <form onSubmit={Handlesubmit}>
                        
                    <Stack spacing={4}>
                            <Input
                                placeholder="Name"
                                _focus={{ border: "2px solid #56E4ED"}}
                                type="text"
                                name="Name"
                                bg={'gray.100'}
                                border={0}
                                color={'black'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                                onChange={Handlechange}
                                required
                            />
                            <Select placeholder='choose role'
                                _focus={{ border: "2px solid #56E4ED" }}
                                bg={'gray.100'}
                                border={0}
                            color={'black'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                                name="role"
                                required
                                onChange={Handlechange}
                            >
                            <option value='admin'> admin</option>
                            <option  value='user'> user</option>
                              
                            </Select>
                            <Input
                                type="email"
                                name="email"
                                placeholder="example@gamil.com"
                                     _focus={{ border: "2px solid #56E4ED"}}
                                bg={'gray.100'}
                                border={0}
                            color={'black'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                                onChange={Handlechange}
                                required
                            />
                            <Input
                                placeholder="Password"
                                name="password"
                                type={"password"}
                                     _focus={{ border: "2px solid #56E4ED"}}
                                bg={'gray.100'}
                                border={0}
                            color={'black'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                                onChange={Handlechange}
                                required
                            />
                            <Input
                                placeholder="Confirm Password"
                                type={"password"}
                                name="confirmpassword"
                                _focus={{ border: "2px solid #56E4ED" }}
                                bg={'gray.100'}
                                border={0}
                            color={'black'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                                onChange={Handlechange}
                                required
                            />
                        </Stack>
                        <Button
                            fontFamily={'heading'}
                            type="submit"
                            mt={8}
                            w={'full'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            color={'white'}
                            _hover={{
                                bgGradient: 'linear(to-r, red.400,#FF3673)',
                                boxShadow: 'xl',
                            }}>
                        Register Now
                        </Button>
                        </form>
              
                    <Text
                        as={"h2"}
                            marginTop="5px"
                        _hover={{
                            color: 'blue',

                        }}>
                      
                        <Link to="/login">   Existing user? login now</Link>
                    </Text>

                   
                    </Box>
                  
                </Stack>
            </Container>
    </div>);
}
