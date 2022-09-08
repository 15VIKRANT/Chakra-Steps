import { Step, Steps, useSteps } from "chakra-ui-steps";
import { VStack, Flex, Box, Button,Text } from "@chakra-ui/react";

import { Image } from '@chakra-ui/react'
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
const Stepper = () => {
  const { nextStep, activeStep } = useSteps({
    initialStep: 0,
    
  });

  return (
    <Box width={"100%"} marginTop={"10%"}>
      <Flex margin={"auto"} marginLeft={"45%"}>
        <Box display={"flex"}>
          <div style={{backgroundColor:"rgb(101,77,228)",height:"30px",width:"20px",borderRadius:"50px 0px 50px 0px"}}></div>
          <div style={{backgroundColor:"rgb(101,77,228)",height:"30px",width:"20px",borderRadius:"0px 50px 0px 50px"}}></div>
        </Box>
        <Box fontWeight={"bolder"} fontSize={"25px"}>Eden</Box>
        </Flex>
        
<Box width="50%"  margin="auto" marginTop={"2vw"}>
      <Steps activeStep={activeStep} >
        <Step key={1} color={"violet"}>  
          <One/>
          </Step>
         
        <Step  key={2}>
        
           <Two/>
        </Step>
        <Step key={3}>
   hello three
          <Three/>
        </Step>
                <Step  key={4}>
        
          <Four/>
        </Step>
      </Steps>
      
    {/* <Button
        onClick={() => {
          prevStep(1);
        }}
      >
        Previous
      </Button>  */}
      <Box size='md' width={"300px"} marginTop={"15px"}>



     

<Box style={{margin:"auto",textAlign:"center",marginTop:"30px", marginLeft:"73%"}}>
 
  <Button  size='md' width={"300px"}  color={"white"} margin={"auto"}
       backgroundColor={"rgb(101,77,228)"} cursor={"pointer"}
       onClick={() => {
          nextStep(0);
        }}
        >
        Create Workspace
      </Button>
  </Box>
 


        </Box>
      </Box>
    </Box>
  );
};

export default Stepper;
