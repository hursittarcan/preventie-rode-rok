import {Box, Card, chakra, ChakraProvider, Container, FormControl, FormLabel, Input, Text} from '@chakra-ui/react';
import Header from "./Header.tsx";
import Logo from '../assets/logo.png'
import {customChakraTheme} from "../styles/CustomChakraTheme.tsx";
import ShowcaseSection from "./ShowcaseSection.tsx";
import WhatsAppButton from "./WhatsappButton.tsx";

function Login() {

    return (
        <ChakraProvider theme={customChakraTheme}>
            <>
                <Header style={{ boxShadow: "var(--chakra-shadows-sm)" }} />

                <Box as='section' pb={{ base: '0', md: '5rem' }}>
                    <Container py={{ base: '10', md: '120'}} maxW='1280px'>
                        <Box maxW='1500px' mx='auto' textAlign='center' mb='56px'>
                            <img
                                src={Logo}
                                style={{ height: "3rem", margin: "auto"}}
                                alt="Codelab logo"
                            />
                            <Text
                                mx='auto'
                                color='gray.500'
                                _dark={{color: 'gray.400'}}
                                fontSize={{base: 'lg', lg: 'xl'}}
                                mt='6'
                            >
                                Log in om toegang te krijgen tot je account.
                            </Text>

                            <br/>

                            <Card bg="#f6f8fa" variant="outline" borderColor="#d8dee4" maxW="500px" mx="auto" p={5}>
                                <FormControl>
                                    <FormLabel size="sm">Username or email address</FormLabel>
                                    <Input
                                        type="text"
                                        bg="white"
                                        borderColor="#d8dee4"
                                        size="sm"
                                        borderRadius="6px"
                                    />
                                </FormControl>

                                <br/>

                                <FormControl>
                                    <FormLabel size="sm">Username or email address</FormLabel>
                                    <Input
                                        type="text"
                                        bg="white"
                                        borderColor="#d8dee4"
                                        size="sm"
                                        borderRadius="6px"
                                    />
                                </FormControl>
                            </Card>
                        </Box>
                    </Container>
                </Box>
                <WhatsAppButton/>
            </>
        </ChakraProvider>
    );
}

export default Login;
