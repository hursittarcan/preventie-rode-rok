import {Box, Button, chakra, Container, Text} from "@chakra-ui/react";
import HomeShowcaseSection from "./HomeShowcaseSection.tsx";
import {FaArrowRight} from "react-icons/fa";

export const Projects = () => {
    return (
        <Box as='section' pb={{ base: '0', md: '5rem' }} id="projects">
            <Container py='120px' maxW='1280px'>
                <Box maxW='1500px' mx='auto' textAlign='center' mb='56px'>
                    <chakra.h1
                        style={{color: "#00044F"}}
                        maxW='20ch'
                        mx='auto'
                        fontSize={{base: '2.5rem', sm: '3rem', lg: '4rem'}}
                        fontFamily='heading'
                        letterSpacing='tighter'
                        fontWeight='extrabold'
                        mb='16px'
                        lineHeight='1.2'>
                        Echte <span style={{color: "#801AFB"}}>resultaten,</span> echte projecten.
                    </chakra.h1>
                    <Text
                        mx='auto'
                        color='gray.500'
                        _dark={{ color: 'gray.400' }}
                        fontSize={{ base: 'lg', lg: 'xl' }}
                        mt='6'
                    >
                        Laat je inspireren door wat we voor anderen hebben gedaan.
                    </Text>

                    <HomeShowcaseSection />

                    <Button
                        h={{ base: '3.5rem', lg: '4rem' }}
                        px='40px'
                        fontSize='1.2rem'
                        as='a'
                        href="/cases"
                        size='lg'
                        style={{background: "#00044F", color: "white"}}
                        rightIcon={<FaArrowRight fontSize='0.8em'/>}
                        _hover={{ opacity: 0.7 }}
                    >
                        Meer projecten
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

