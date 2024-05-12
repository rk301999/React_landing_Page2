import React from 'react'
import { Box ,Container,HStack,Heading ,Image ,Stack,Text, VStack,Button,Input, Center} from '@chakra-ui/react'
import { AiOutlineSend } from 'react-icons/ai'
import { FiYoutube,FiGithub,FiInstagram  } from "react-icons/fi";

const Footer = () => {
  return <Box bgColor="blackAlpha.900" minH={'40'} p="16" color={'white'}>
    <Stack direction={['column','row']} >
    <VStack alignItems={"stretch"}  w={"full"} px={"4"}>
      <Heading size={"md"} textTransform={"uppercase"} textAlign={["center","left"]}>Subscribe to our NewLetter</Heading>
      <HStack borderBottom={"2px solid white"} py={2} >
      <Input placeholder="Enter Email here" border="none" borderRadius="none" focusBorderColor='none' />
      <Button p={"0"} colorScheme='purple' variant={"ghost"} borderRadius={"0 20px 20px 0"}><AiOutlineSend size={25}/></Button>
    </HStack>
    </VStack>
    {/* 2 vstack both are full , so they will share 50% width each */}
    <VStack w={"full"} borderLeft={["none","1px solid white"]} borderRight={["none","1px solid white"]}> 
    <Heading  textTransform={"uppercase"}  textAlign={"center"} >
    VIDEO HUB
    </Heading>
    <Text>Ritesh | All rights reserved ©️</Text>
    </VStack>
    <VStack w={"full"} gap={"4"} justify={"center"} > 
    <Heading size={"md"} textTransform={"uppercase"}  >Connect with Us</Heading>
    <HStack  w={"full"} justifyContent={"center"} h={"auto"} >
    <Button variant={"link"} colorScheme='whiteAlpha' >
      <a target='_blank' href="#" ><FiYoutube size={33} color='white'/></a>
    </Button>
    <Button variant={"link"} colorScheme='whiteAlpha'>
      <a target='_blank' href="#" ><FiInstagram size={27} color='white'/></a>
    </Button>
    <Button variant={"link"} colorScheme='whiteAlpha'>
      <a target='_blank' href="#" ><FiGithub size={27} color='white'/></a>
    </Button>
    </HStack>
    </VStack>
    </Stack>
  </Box>
}

export default Footer
