import { Box ,Container,Heading ,Image ,Stack,Text} from '@chakra-ui/react'
import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"
import { transform } from 'framer-motion'
import { CiTextAlignCenter } from 'react-icons/ci'

const headingOptions={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    p:"4",
    size:"4xl" 
}

function MyCarousel(){
    return<Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false} >
        <Box w="full" h={"100vh"}  >
        <Image src={img1}/>
        <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>
            Watch the future
        </Heading>
        </Box>
        <Box w="full" h={"100vh"} >
        <Image src={img2}/>
        <Heading bgColor={"whiteAlpha.700"} color={'black'} {...headingOptions}>
            Future is Gaming 
        </Heading>
        </Box>
        <Box w="full" h={"100vh"} >
        <Image src={img3}/>
        <Heading bgColor={"whiteAlpha.700"} color={'black'} {...headingOptions}>
            Gaming on console
        </Heading>
        </Box>
        <Box w="full" h={"100vh"} >
        <Image src={img4}/>
        <Heading bgColor={"whiteAlpha.700"} color={'black'} {...headingOptions}>
            Experience Nightlife
        </Heading>
        </Box>
        
    </Carousel>
}

//stack is div with flex applied

function Home() {
  return (
    <Box >
        <MyCarousel/>
        <Container maxH={"100vh"} maxW={'container.xl'} p="16"> 
        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={"2px solid"} m='auto'> Services</Heading>
        <Stack h="full" p={"4"} alignItems={"center"} direction={['column','row']}> {/* [small screen , large screen] */}
        <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40','400']}/>
        <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"] } textAlign={"center"} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis, ducimus doloribus voluptates nam assumenda, illum, eius itaque repudiandae aliquam pariatur tempore optio reprehenderit minus? Cumque sint accusamus maxime autem suscipit. Vero repellat laboriosam at animi ducimus suscipit nobis consequuntur facere voluptas cumque, excepturi sed corrupti eaque ipsa quia tenetur quisquam incidunt doloremque hic. Nobis quae, velit beatae delectus neque quos temporibus nam accusantium ab voluptatibus, ullam fuga necessitatibus sapiente, maiores officia sunt repellendus cupiditate nesciunt quam hic sed voluptatum mollitia deleniti. Id expedita iste, laborum harum assumenda qui ducimus vel alias quae corporis, aut libero obcaecati sequi explicabo tempore!
        </Text>
        </Stack>
        </Container>
    </Box>
  )
}

export default Home
