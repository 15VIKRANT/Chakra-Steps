import React from 'react'
import { Input, Box,Flex,Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";

const Three = () => {
  return (
    <div>
  <Box>
  <Heading as='h1' size='5xl' noOfLines={1} textAlign={"center"}>How are you plannig to change Eden?</Heading>
  <Text textAlign={"center"} style={{color:"gray" ,fontSize:"14px"}}>We will streamline your setup experience accordingly</Text>
  <Flex justifyContent={"center"} style={{gap:"1vw",marginTop:"2vw"}}>
    <Box style={{padding:"0.5vw",boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",cursor:"pointer"}}>
    <BsFillPersonFill/>
    <Text style={{fontWeight:"bolder"}}>For myself</Text>
    <Text style={{color:"gray" ,fontSize:"14px"}}>Write better. Think</Text>
    <Text style={{color:"gray" ,fontSize:"14px"}}>more clearly.Stay</Text>
    <Text style={{color:"gray" ,fontSize:"14px"}}>organised</Text>
    </Box>
    <Box style={{padding:"0.5vw",borderRadius:"5px",boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px", cursor:"pointer"}} >
    <IoIosPeople/>
    <Text style={{fontWeight:"bolder"}}>With my team</Text>
    <Text style={{color:"gray" ,fontSize:"14px"}}>Wikis,dogs, tasks &</Text>
    <Text style={{color:"gray" ,fontSize:"14px"}}>projects. All in</Text>
    <Text style={{color:"gray" ,fontSize:"14px"}}>one place.</Text>
    </Box>
  </Flex>

  </Box>


    </div>
  )
}

export default Three


