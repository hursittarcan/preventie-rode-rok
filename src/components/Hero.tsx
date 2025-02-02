import {Box, Button, chakra, Container, Flex, Heading, Image, Stack, Text, useBreakpointValue} from "@chakra-ui/react";
import {FaArrowRight, FaFolder, FaWhatsapp} from "react-icons/fa";
import emblem from "../assets/emblem.png";
import WhatsAppButton from "./WhatsappButton.tsx";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";


export const Hero = () => {

    // @ts-ignore
    const MotionBox = motion(Box);
    const [index, setIndex] = useState(0);
    const isDesktop = useBreakpointValue({ base: false, md: true });
    const services = ["digitale oplossingen", "websites op maat", "google marketing", "software op maat", "mobiele applicaties"];
    const services2 = ["oplossingen", "websites", "marketing", "software", "applicaties"];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % services.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [services.length]);

    return (
        <Box position="relative" minH={`calc(100vh - 4.5rem)`}>
            <Box as='section' minH={`calc(100vh - 4.5rem)`} pt={{base: '2.5rem', md: '5rem'}}
                 pb={{base: '0', md: '5rem'}} position="relative" style={{overflow: "hidden"}}>
                <Box
                    maxW="container.sm"
                    mb="4"
                    bg="#D4EFDF"
                    color="#00044F"
                    px="6"
                    py="2"
                    borderRadius="md"
                    fontWeight="bold"
                    fontSize="lg"
                    textAlign="center"
                    mx="auto"
                    marginBottom="50px"
                    display={{base: 'none', md: 'block'}}
                >
                    🎉 Profiteer nu van 25% korting op al onze diensten! 🎉
                </Box>
                <Container position="relative" zIndex="1">
                    <Box textAlign='center'>
                        {/* Alert Banner */}
                        <chakra.h1
                            style={{color: "#00044F"}}
                            maxW='20ch'
                            mx='auto'
                            fontSize={{base: '3rem', sm: '3rem', lg: '4rem'}}
                            fontFamily='heading'
                            letterSpacing='tighter'
                            fontWeight='extrabold'
                            mb='16px'
                            lineHeight='1.2'
                        >
                            Innovatieve
                            {' '}
                            {isDesktop ? (
                                <MotionBox
                                    as="span"
                                    key={services[index]}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    display="inline-block"
                                    style={{ color: "#801AFB", whiteSpace: "nowrap" }}
                                >
                                    {services[index]}
                                </MotionBox>
                            ) : (
                                <MotionBox
                                    as="span"
                                    key={services[index]}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    display="inline-block"
                                    style={{ color: "#801AFB", whiteSpace: "nowrap" }}
                                >
                                    {services2[index]}
                                </MotionBox>
                            )}
                            {" "}
                            voor uw bedrijf
                            <span style={{color: "#801AFB"}}>.</span>
                        </chakra.h1>

                        <Text
                            mx='auto'
                            color='gray.500'
                            _dark={{color: 'gray.400'}}
                            fontSize={{base: 'lg', lg: 'xl'}}
                            mt='6'
                        >
                            Wij ondersteunen profit- en non-profit organisaties bij het versterken van hun digitale
                            aanwezigheid.
                        </Text>

                        <Stack
                            mt='10'
                            spacing='4'
                            justify='center'
                            direction={{base: 'column', sm: 'row'}}
                        >
                            <Button
                                h='4rem'
                                px='40px'
                                fontSize='1.2rem'
                                as='a'
                                size='lg'
                                style={{background: "#00044F", color: "white"}}
                                rightIcon={<FaArrowRight fontSize='0.8em'/>}
                                href="/quickstart"
                                _hover={{ opacity: 0.7 }}
                            >
                                Meteen starten
                            </Button>
                            <Button
                                h='4rem'
                                px='40px'
                                fontSize='1.2rem'
                                as='a'
                                size='lg'
                                style={{color: "#00044F", background: "transparent", border: "3px solid #00044F"}}
                                rightIcon={<FaFolder fontSize='0.8em'/>}
                                onClick={() => {
                                    const element = document.getElementById('projects');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                                _hover={{ opacity: 0.7, cursor: "pointer" }}
                            >
                                Onze realisaties
                            </Button>
                        </Stack>
                    </Box>
                </Container>
                <Image
                    src={emblem}
                    alt="Company Logo"
                    position="absolute"
                    bottom="10"
                    right="-10"
                    boxSize={{base: "250px", md: "400px"}}
                    opacity="0.2"
                    zIndex="0"
                    pointerEvents="none"
                />

                <WhatsAppButton/>
            </Box>

            <Box
                bg="#00044F"
                py="4"
                width="100%"
                color="white"
                position="absolute"
                bottom="0"
                display={{base: 'none', md: 'block'}}
                zIndex="999999"
                sx={{
                    '@media (max-height: 900px)': {
                        display: 'none',
                    },
                }}
            >
                <Container maxW="container.xl" py="4">
                    <Flex
                        direction={{base: 'column', md: 'row'}}
                        align="center"
                        justify="space-between"
                    >
                        <Flex align="center">
                            <FaWhatsapp size="60px" style={{marginRight: '12px'}}/>
                            <Box>
                                <Heading size="md" lineHeight="1.2" mb="1">
                                    Heb je vragen of zit je met problemen?
                                </Heading>
                                <Text opacity={0.8} fontSize="lg" style={{color: "white"}}>
                                    Chat met onze klantendienst via WhatsApp voor snelle antwoorden!
                                </Text>
                            </Box>
                        </Flex>

                        <Button
                            mt={{base: '4', md: '0'}}
                            color="gray.800"
                            as="a"
                            href="https://wa.me/32456690910"
                            rel="noopener"
                            target="_blank"
                            fontWeight="bold"
                            shadow="md"
                            bg="white"
                            px="24px"
                            h="56px"
                            rounded="lg"
                            fontSize="md"
                            style={{alignSelf: 'flex-end', background: "white"}}
                        >
                            WhatsApp ons nu!
                        </Button>
                    </Flex>
                </Container>
            </Box>
        </Box>
    )
}