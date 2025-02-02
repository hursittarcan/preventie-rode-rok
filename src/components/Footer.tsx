import {Box, Container, Flex, Link, SimpleGrid, Stack, Text, useBreakpointValue} from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import {useNavigate} from "react-router-dom";

export const Footer = () => {

    const isDesktop = useBreakpointValue({ base: false, md: true });
    const navigate = useNavigate();

    return (
        <Box as='section' pb={{ base: '0', md: '5rem' }}>
            <Container py='120px' maxW='1280px'>
                <Box maxW='1500px' mx='auto' mb='56px'>
                    <Container maxW="1280px">
                        <SimpleGrid
                            columns={{ base: 1, md: 3 }}
                            spacing={{ base: "8", md: "0" }}
                            justifyContent="space-between"
                        >
                            {/* Left Section */}
                            <Box>
                                <Flex align="center" mb="4">
                                    <Box
                                        as="img"
                                        src={Logo}
                                        alt="Logo"
                                        h={{ base: "6", md: "10" }}
                                    />
                                </Flex>
                                <br/>
                                <Stack spacing="2">
                                    <Text fontWeight="bold" color="#00044F">
                                        Adres
                                        <span style={{color: "#801AFB"}}>.</span>
                                    </Text>
                                    <Text color="#00044F">Grote bameriklaan 28, 3511 Kuringen</Text>
                                    <br/>
                                    <Text color="#00044F" fontWeight="bold">
                                        Contact
                                        <span style={{color: "#801AFB"}}>.</span>
                                    </Text>
                                    <Text color="#00044F">+32 456 69 09 10</Text>
                                    <Text color="#00044F">hello@codelabgroup.com</Text>
                                    <Text color="#00044F">BE0798446986</Text>
                                    <br/>
                                    { !isDesktop && (
                                        <>
                                            <Text textDecoration="underline" color="#00044F" onClick={() => navigate("/privacybeleid")}>Privacybeleid</Text>
                                            <Text textDecoration="underline" color="#00044F" onClick={() => navigate("/cookiebeleid")}>Cookiebeleid</Text>
                                            <Text textDecoration="underline" color="#00044F" onClick={() => navigate("/algemenevoorwaarden")}>Algemene voorwaarden</Text>
                                        </>
                                    )}
                                </Stack>
                            </Box>

                            { isDesktop && (
                                <Box textAlign={{ base: "center", md: "right" }}>
                                    <Flex align="center" mb="4">
                                        <Box as="img" src={Logo} style={{ visibility: "hidden" }} alt="Logo" h="10" />
                                    </Flex>
                                    <br/>
                                    <Stack spacing="2">
                                        <Text fontWeight="bold" color="#00044F">
                                            Socials
                                            <span style={{color: "#801AFB"}}>.</span>
                                        </Text>
                                        <Stack spacing="2">
                                            <Link href="https://www.instagram.com/thecodelabgroup/" _hover={{ textDecoration: "underline" }}>
                                                Instagram
                                            </Link>
                                            <Link href="https://www.google.com" _hover={{ textDecoration: "underline" }}>
                                                Facebook
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/codelabgroup/" _hover={{ textDecoration: "underline" }}>
                                                LinkedIn
                                            </Link>
                                            <Link href="https://g.co/kgs/PBJhhwD" _hover={{ textDecoration: "underline" }}>
                                                Google
                                            </Link>
                                        </Stack>
                                    </Stack>
                                </Box>
                            )}

                            { isDesktop && (
                                <Box textAlign={{ base: "center", md: "right" }}>
                                    <Flex align="center" mb="4">
                                        <Box as="img" src={Logo} style={{ visibility: "hidden" }} alt="Logo" h="10" />
                                    </Flex>
                                    <br/>
                                    <Stack spacing="2">
                                        <Text fontWeight="bold" color="#00044F">
                                            Bronnen
                                            <span style={{color: "#801AFB"}}>.</span>
                                        </Text>
                                        <Stack spacing="2">
                                            <Link href="#" _hover={{ textDecoration: "underline" }}>
                                                Documentatie
                                            </Link>
                                            <Link href="#" _hover={{ textDecoration: "underline" }}>
                                                Downloads
                                            </Link>
                                            <Link href="#" _hover={{ textDecoration: "underline" }}>
                                                GitHub
                                            </Link>
                                            <Link href="#" _hover={{ textDecoration: "underline" }}>
                                                Blog
                                            </Link>
                                        </Stack>
                                    </Stack>
                                </Box>
                            )}
                        </SimpleGrid>
                    </Container>
                </Box>
            </Container>
        </Box>
    )
}