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
  <Heading as='h1' size='5xl' noOfLines={1}>Let's set up Home for all your work</Heading>
  <p style={{fontSize:"10px", marginBottom:"30px",fontWeight:"bold", color:"grey"}}>You can always create another workspace</p>

  <p style={{color:"black", fontWeight:"bolder", marginRight:"170px"}}>Workspace Name</p>
  <Input placeholder='Eden'  size='md' width={"300px"} />
  <p style={{color:"black", fontWeight:"bolder", marginRight:"100px"}}>Workspace URL (optional)</p>
  <Input placeholder='www.eden.com/    Example' size='md' width={"300px"} onChange={nameFun} value={displayName}/>

  </Box>


    </div>
  )
}

export default One