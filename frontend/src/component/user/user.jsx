import { Heading } from "@chakra-ui/react"

export const Userpage = () => {
    return <div>
        <Heading as='h2' size='2xl' marginBottom={"20px"} paddingTop="60px">
        ....you are user, welcome to user page
        </Heading>
        <div style={{
            width: "50%",
            height:"600px",
            margin:"auto"
        }}>

            <img style={{
                width:"100%",
                 
                height: "90%"
            }} src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="userimg" />
        </div>
    </div>
}