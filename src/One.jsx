import React, { useState } from 'react'
import { Input, Box } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'

const One = () => {
    const [displayName,setDisplayName]=useState("")
    const nameFun=(e)=>{
setDisplayName(e.target.value)
localStorage.setItem("displayName",displayName)
    }
    console.log(displayName)
  return (
    <div>
  <Box style={{margin:"auto",textAlign:"center",marginTop:"30px"}}>
  <Heading as='h1' size='5xl' noOfLines={1}>Welcome! First things First</Heading>
  <p style={{fontSize:"10px", marginBottom:"30px", fontWeight:"bold", color:"grey"}}>You can always change later</p>

  <p style={{color:"black", fontWeight:"bolder", marginRight:"211px"}}>Full Name</p>
  <Input placeholder='Steve Jobs'  size='md' width={"300px"} />
  <p style={{color:"black", fontWeight:"bolder", marginRight:"190px"}}>Display Name</p>
  <Input placeholder='Steve' size='md' width={"300px"} onChange={nameFun} value={displayName}/>

  </Box>


    </div>
  )
}

export default One