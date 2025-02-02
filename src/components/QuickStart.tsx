import {Box, chakra, ChakraProvider, Container, Text} from '@chakra-ui/react';
import Header from "../components/Header.tsx";
import {customChakraTheme} from "../styles/CustomChakraTheme.tsx";
import MultiStepForm from "./MultiStepForm.tsx";
import {Footer} from "./Footer.tsx";
import {Copyright} from "./Copyright.tsx";

function Showcase() {

    return (
        <ChakraProvider theme={customChakraTheme}>
            <>
                <Header style={{ boxShadow: "var(--chakra-shadows-sm)" }} />

                <Box bg='gray.50' as='section' pb={{ base: '0', md: '5rem' }}>
                    <Container py={{ base: '10', md: '120'}} maxW='1280px'>
                        <Box maxW='1500px' mx='auto' textAlign='center' mb='56px'>
                            <chakra.h1
                                style={{color: "#00044F"}}
                                maxW='20ch'
                                mx='auto'
                                fontSize={{base: '3rem', sm: '3rem', lg: '4rem'}}
                                fontFamily='heading'
                                letterSpacing='tighter'
                                fontWeight='extrabold'
                                mb='16px'
                                lineHeight='1.2'>
                                Kom in <span style={{color: "#801AFB"}}>contact</span> met ons team
                                <span style={{color: "#801AFB"}}>.</span>
                            </chakra.h1>
                            <Text
                                mx='auto'
                                color='gray.500'
                                _dark={{ color: 'gray.400' }}
                                fontSize={{ base: 'lg', lg: 'xl' }}
                                mt='6'
                            >
                                Vertel ons waar we je mee kunnen ondersteunen.
                            </Text>
                        </Box>

                        <MultiStepForm/>
                    </Container>
                </Box>

                <Footer />
                <Box display={{ base: 'none', md: 'block' }}>
                    <Copyright />
                </Box>
            </>
        </ChakraProvider>
    );
}

export default Showcase;
