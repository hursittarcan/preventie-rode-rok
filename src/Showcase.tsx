import {Box, chakra, ChakraProvider, Container, Text} from '@chakra-ui/react';
import Header from "./components/Header.tsx";
import './i18n';
import {customChakraTheme} from "./styles/CustomChakraTheme.tsx";
import ShowcaseSection from "./components/ShowcaseSection.tsx";
import WhatsAppButton from "./components/WhatsappButton.tsx";

function Showcase() {

    return (
        <ChakraProvider theme={customChakraTheme}>
            <>
                <Header style={{ boxShadow: "var(--chakra-shadows-sm)" }} />

                <Box as='section' pb={{ base: '0', md: '5rem' }}>
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
                                Projecten waar we <span style={{color: "#801AFB"}}>trots</span> op zijn.
                            </chakra.h1>
                            <Text
                                mx='auto'
                                color='gray.500'
                                _dark={{ color: 'gray.400' }}
                                fontSize={{ base: 'lg', lg: 'xl' }}
                                mt='6'
                            >
                                Succesverhalen die laten zien wat mogelijk is met de juiste aanpak.
                            </Text>
                            <ShowcaseSection />
                        </Box>
                    </Container>
                </Box>
                <WhatsAppButton/>
            </>
        </ChakraProvider>
    );
}

export default Showcase;
