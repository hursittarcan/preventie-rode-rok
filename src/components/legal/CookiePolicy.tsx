import {Box, chakra, ChakraProvider, Container, Divider, Text} from '@chakra-ui/react';
import Header from "../../components/Header.tsx";
import {customChakraTheme} from "../../styles/CustomChakraTheme.tsx";
import WhatsAppButton from "../WhatsappButton.tsx";
import {Footer} from "../Footer.tsx";
import {Copyright} from "../Copyright.tsx";

function CookiePolicy() {

    return (
        <ChakraProvider theme={customChakraTheme}>
            <>
                <Header style={{ boxShadow: "var(--chakra-shadows-sm)" }} />

                {/* Main Wrapper for Hero and Banner */}
                <Box position="relative" minH={`calc(100vh - 4.5rem)`}>
                    {/* Hero Section */}
                    <Box as="section" minH={`calc(100vh - 4.5rem)`} pt={{ base: '2rem', md: '3rem' }} pb={{ base: '0', md: '2rem' }} position="relative" style={{ overflow: "hidden" }}>
                        <Container position="relative" zIndex="1" maxW="container.lg">
                            <Box textAlign="left">
                                {/* Main Heading */}
                                <chakra.h1
                                    style={{color: "#00044F"}}
                                    mx="auto"
                                    fontSize={{base: '2.5rem', lg: '4rem'}}
                                    fontFamily="heading"
                                    letterSpacing="tighter"
                                    fontWeight="extrabold"
                                    mb="16px"
                                    textAlign="left"
                                    lineHeight="1.2"
                                >
                                    Ons cookie beleid
                                    <span style={{color: "#801AFB"}}>.</span>
                                </chakra.h1>

                                <Text
                                    mx='auto'
                                    color='gray.500'
                                    _dark={{color: 'gray.400'}}
                                    fontSize={{base: 'lg', lg: 'xl'}}
                                    mt='6'
                                >
                                    Laatst gewijzigd op: 14 december 2024, 17:37.
                                </Text>

                                <br/><br/>

                                <Text
                                    mx="auto"
                                    color="#00044F"
                                    fontSize={{base: 'md', lg: 'xl'}}
                                    mt="6"
                                    lineHeight="1.8"
                                >
                                    Binnekort beschikbaar.
                                </Text>

                                <br/><br/>
                                <br/><br/>
                            </Box>
                        </Container>

                        <WhatsAppButton/>
                    </Box>
                </Box>
                <Divider/>
                <Footer/>
                <Box display={{base: 'none', md: 'block'}}>
                    <Copyright/>
                </Box>
            </>
        </ChakraProvider>
    );
}

export default CookiePolicy;
