import React, { useEffect, useState } from 'react'
import { Input, Box,Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'

const Four = () => {

    const [user, setUser] = useState("");
    useEffect(()=>{
        let displayName=localStorage.getItem("displayName") || "Eden"
        setUser(displayName)
    },[])

    
    
  return (                     
  <div>
  <Box style={{margin:"auto",textAlign:"center",marginTop:"30px"}}>

    <Box style={{height:"50px", width:"50px", borderRadius:"50px", backgroundColor:"rgb(101,77,228)", color:"white", textAlign:"center", padding:"9px", margin:"auto"}}>✓</Box>
  <Heading as='h1' size='5xl' noOfLines={1}>Congratulations, {user}!</Heading>
  <Text>You have completed onboarding, you can start using the Eden!</Text>
 
  </Box>
    

    </div>
  )
}

export default Four