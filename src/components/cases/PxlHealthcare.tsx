import {Box, chakra, ChakraProvider, Container, Divider, Image, Skeleton, SkeletonText, Text} from '@chakra-ui/react';
import Header from "../Header.tsx";
import {customChakraTheme} from "../../styles/CustomChakraTheme.tsx";
import pxlhealthcareMainImage from '../../assets/pxlhealthcare/pxlhealthcare-main.jpg';
import WhatsAppButton from "../WhatsappButton.tsx";
import {Footer} from "../Footer.tsx";
import {Copyright} from "../Copyright.tsx";
import React, {useEffect} from "react";

function PxlHealthcare() {

    const [isLoaded, setIsLoaded] = React.useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

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
                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{borderRadius: "5px"}}>
                                    <chakra.h1
                                        style={{color: "#00044F"}}
                                        mx="auto"
                                        fontSize={{base: '2.25rem', lg: '4rem'}}
                                        fontFamily="heading"
                                        letterSpacing="tighter"
                                        fontWeight="extrabold"
                                        mb="16px"
                                        textAlign="left"
                                        lineHeight="1.2"
                                    >
                                        Innovatie in
                                        {' '}
                                        <chakra.h1
                                            as="span"
                                            display="inline-block"
                                            style={{color: "#801AFB", whiteSpace: "nowrap"}}
                                        >
                                            communicatie
                                        </chakra.h1>
                                        {' '}
                                        voor kinderen met
                                        {' '}
                                        <chakra.h1
                                            as="span"
                                            display="inline-block"
                                            style={{color: "#801AFB", whiteSpace: "nowrap"}}
                                        >
                                            ASS
                                        </chakra.h1>
                                        .
                                    </chakra.h1>
                                </Skeleton>

                                {/* Add Hero Image */}
                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{borderRadius: "5px"}}>
                                    <Image
                                        style={{borderRadius: '10px'}}
                                        src={pxlhealthcareMainImage}
                                        alt="Hero Illustration"
                                        mx="auto"
                                        mt="6"
                                        mb="8"
                                    />
                                </Skeleton>

                                {/* Text Content */}
                                <SkeletonText fadeDuration={4} isLoaded={isLoaded} noOfLines={20} skeletonHeight='7'>
                                    <Text
                                        mx="auto"
                                        color="#00044F"
                                        _dark={{color: 'gray.400'}}
                                        fontSize={{base: 'lg', lg: 'xl'}}
                                        mt="6"
                                        lineHeight="1.8"
                                    >

                                        In 2022 benaderde <b style={{ color: "#801AFB"}}>PXL Healthcare</b> ons met een <b>ambitieuze</b> vraag: hoe kunnen we de
                                        <b>communicatie</b> verbeteren tussen <b>ouders</b>, <b>kinderen met ASS</b> (autismespectrumstoornis) en <b>CLB’s</b> (Centra voor Leerlingenbegeleiding)?
                                        Het <b>antwoord</b> werd gevonden in <b style={{ color: "#801AFB"}}>PRISMA</b>, een innovatief platform dat als doel heeft om
                                        samenwerking en communicatie <b>eenvoudiger</b> en <b>overzichtelijker</b> te maken.

                                        <br/><br/>

                                        Het <b>PRISMA-platform</b> is ontwikkeld in samenwerking met <b style={{ color: "#801AFB"}}>PXL Research</b> en richt zich
                                        op het bieden van een <b>centraal punt</b> waar alle betrokken partijen naadloos kunnen
                                        communiceren en informatie delen. Dit is niet zomaar een <b>tool</b>; het is een
                                        <b>hulpmiddel</b> dat is ontworpen met oog voor de unieke uitdagingen waarmee <b>kinderen</b>
                                        met ASS en hun <b>ondersteuningsteams</b> te maken hebben.
                                        <br/><br/>

                                        In de <b>eerste fase</b> van het <b>project</b> hebben we een <b>proof-of-concept</b> (POC)
                                        ontwikkeld. Deze POC demonstreerde de kracht en potentie van het platform om
                                        <b>communicatiebarrières</b> te doorbreken en meer <b>structuur</b> en <b>duidelijkheid</b> te
                                        bieden. Het <b>resultaat</b> van dit gezamenlijke werk heeft laten zien dat <b>technologie</b>
                                        kan bijdragen aan een meer ondersteunende omgeving voor <b>kinderen met ASS</b>.

                                        <br/><br/>

                                        Hoewel we nog wachten op een <b>definitieve goedkeuring</b> om verder te gaan met de
                                        volgende stappen in dit project, zijn we <b>trots</b> op wat er met <b style={{ color: "#801AFB"}}>PRISMA</b> al is
                                        bereikt. Door het platform te ontwikkelen met een focus op
                                        <b>gebruiksvriendelijkheid</b>, <b>privacy</b> en <b>data-integriteit</b>, leggen we de basis voor
                                        een oplossing die een blijvende impact kan hebben.
                                        <br/><br/>

                                        Vanwege <b><u>GDPR-beperkingen</u></b> kunnen we geen beelden van <b style={{ color: "#801AFB"}}>PRISMA</b> delen, maar we kijken
                                        met enthousiasme uit naar de toekomstige ontwikkelingen van dit veelbelovende
                                        project. Samen met <b style={{ color: "#801AFB"}}>PXL Healthcare</b> werken we aan een betere toekomst voor
                                        <b>kinderen met ASS</b> en hun <b>netwerk</b>. 🌈
                                    </Text>
                                </SkeletonText>
                                <br/><br/>
                                <br/><br/>
                            </Box>
                        </Container>

                        <WhatsAppButton />
                    </Box>
                </Box>

                <Divider/>
                <Footer/>
                <Box display={{ base: 'none', md: 'block' }}>
                    <Copyright />
                </Box>
            </>
        </ChakraProvider>
    );
}

export default PxlHealthcare;
