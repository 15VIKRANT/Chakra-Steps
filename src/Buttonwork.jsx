import React from 'react'
import {Button} from "@chakra-ui/react"

export const Buttonwork = () => {
  return (
    <div>
 <Button  size='md' width={"300px"} marginLeft={"105px"}
       backgroundColor={"rgb(101,77,228)"}
       onClick={() => {
          nextStep(0);
        }}
        >
        Create Workspace
      </Button>

    </div>
  )
}
