import { Heading, Stack, VStack,Text,Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import videosArr from '../assets/videos.js'

const Videos = () => {

  const [videoSrc,setvideoSrc]=useState(0)
  return (
    <Stack direction={["column","row"]} h={"100vh"}>
      <VStack w={"full"}>
    <video controls controlsList='nodownload' src={videosArr[videoSrc]} style={{width: "100%"}}></video>
      <VStack alignItems={"flex-start"} p={"8"} w={"full"} overflowY={"auto"}>
        <Heading>Sample Heading</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit possimus nulla atque, numquam commodi natus enim, dolores cupiditate eveniet, incidunt laborum tempore magnam harum facilis omnis eius ratione eos officia et veniam dolorum! Asperiores at numquam vel natus sed sapiente cupiditate, accusantium repellendus odit quibusdam nisi impedit optio eum, nostrum laudantium repellat quod voluptate eius velit, quidem temp</Text>
      </VStack>
      </VStack>
      <VStack w={["full","xl"]} alignItems={"stretch"} p={"8"} spacing={"8"} overflowY={"auto"}>
      {
        videosArr.map((_,index)=>
          <Button onClick={()=>setvideoSrc(index)} variant={"ghost"} colorScheme='purple' >Lecture {index+1}</Button>
        )
      }
      </VStack>
    </Stack>
  )
}

export default Videos
