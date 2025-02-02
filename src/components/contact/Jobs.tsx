import {
    Box,
    Button,
    chakra,
    ChakraProvider,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Text,
    VStack
} from '@chakra-ui/react';
import Header from "../../components/Header.tsx";
import {customChakraTheme} from "../../styles/CustomChakraTheme.tsx";
import {FaBackward, FaForward} from "react-icons/fa";
import {Footer} from "../Footer.tsx";
import {Copyright} from "../Copyright.tsx";
import WhatsAppButton from "../WhatsappButton.tsx";

function Jobs() {

    return (
        <ChakraProvider theme={customChakraTheme}>
            <>
                <Header style={{ boxShadow: "var(--chakra-shadows-sm)" }} />

                <Box as='section' pb={{ base: '0', md: '5rem' }} background="gray.50">
                    <Container py={{ base: '60px', lg: '120px'}} maxW='1280px'>
                        <Box maxW='760px' mx='auto' textAlign='center' mb='56px' position='relative'>
                            {/* Heading */}
                            <chakra.h1
                                style={{ color: "#00044F" }}
                                maxW='20ch'
                                mx='auto'
                                fontSize={{ base: '2.5rem', sm: '3rem', lg: '4rem' }}
                                fontFamily='heading'
                                letterSpacing='tighter'
                                fontWeight='extrabold'
                                mb='16px'
                                lineHeight='1.2'
                            >
                                <span style={{color: "#801AFB"}}>Werken</span> bij Codelab?
                            </chakra.h1>

                            <Text
                                mx='auto'
                                color='gray.500'
                                _dark={{ color: 'gray.400' }}
                                fontSize={{ base: 'lg', lg: 'xl' }}
                                mt='6'
                            >
                                Laat ons je cv achter, wij bekijken wat mogelijk is.
                            </Text>

                            {/* Form */}
                            <VStack spacing={4} mt={10} as="form">
                                <FormControl isRequired>
                                    <FormLabel fontWeight="semibold">Naam</FormLabel>
                                    <Input size={{ base: 'md', lg: 'lg'}} placeholder="codelab" _focus={{ borderColor: '#801AFB', boxShadow: '0 0 0 1px #00044F' }} />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel fontWeight="semibold">Email</FormLabel>
                                    <Input size={{ base: 'md', lg: 'lg'}} type="email" placeholder="hello@codelabgroup.com" _focus={{ borderColor: '#801AFB', boxShadow: '0 0 0 1px #00044F' }} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel fontWeight="semibold">Telefoonnummer</FormLabel>
                                    <Input size={{ base: 'md', lg: 'lg'}} type="tel" placeholder="+32 456 69 09 10" _focus={{ borderColor: '#801AFB', boxShadow: '0 0 0 1px #00044F' }} />
                                </FormControl>
                                <FormControl mb={2}>
                                    <FormLabel fontWeight="semibold">Upload je cv</FormLabel>
                                    <Input
                                        type="file"
                                        size={{ base: 'md', lg: 'lg' }}
                                        _focus={{ borderColor: '#801AFB', boxShadow: '0 0 0 1px #00044F' }}
                                    />
                                </FormControl>
                                <br/><br/>
                            </VStack>

                            <VStack align="stretch" spacing={5}>

                                <Flex justify="space-between" mt={6}>
                                    <Button
                                        h={{ base: '3rem' }}
                                        px='30px'
                                        fontSize='1rem'
                                        as='a'
                                        href="/quickstart"
                                        border="solid 3px #00044F"
                                        style={{background: "white", color: "#00044F"}}
                                        leftIcon={<FaBackward fontSize='0.8em'/>}
                                        _hover={{ opacity: 0.7 }}
                                    >
                                        Terug
                                    </Button>
                                    <Button
                                        h={{ base: '3rem' }}
                                        px='30px'
                                        fontSize='1rem'
                                        as='a'
                                        size='lg'
                                        style={{background: "#00044F", color: "white"}}
                                        rightIcon={<FaForward fontSize='0.8em'/>}
                                        _hover={{ opacity: 0.7 }}
                                    >
                                        Verstuur
                                    </Button>
                                </Flex>
                            </VStack>
                        </Box>
                    </Container>
                </Box>

                <Footer />
                <Box display={{ base: 'none', md: 'block' }}>
                    <Copyright />
                </Box>
                <WhatsAppButton/>
            </>
        </ChakraProvider>
    );
}

export default Jobs;
