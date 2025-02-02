import {Box, chakra, ChakraProvider, Container, Divider, Image, Skeleton, SkeletonText, Text} from '@chakra-ui/react';
import Header from "../Header.tsx";
import {customChakraTheme} from "../../styles/CustomChakraTheme.tsx";
import houseofhairMainImage from '../../assets/houseofhair/houseofhair-main.jpg';
import WhatsAppButton from "../WhatsappButton.tsx";
import {Footer} from "../Footer.tsx";
import {Copyright} from "../Copyright.tsx";
import React, {useEffect} from "react";

function HouseOfHairByMaria() {

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
                                        Van
                                        {' '}
                                        <chakra.h1
                                            as="span"
                                            display="inline-block"
                                            style={{color: "#801AFB", whiteSpace: "nowrap"}}
                                        >
                                            House of Hair
                                        </chakra.h1>
                                        {' '}
                                        naar
                                        {' '}
                                        <chakra.h1
                                            as="span"
                                            display="inline-block"
                                            style={{color: "#801AFB", whiteSpace: "nowrap"}}
                                        >
                                            House of Peace
                                        </chakra.h1>
                                        .
                                    </chakra.h1>
                                </Skeleton>

                                {/* Add Hero Image */}
                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{borderRadius: "5px"}}>
                                    <Image
                                        style={{borderRadius: '10px'}}
                                        src={houseofhairMainImage}
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

                                        <b>Maria</b> is de drijvende <b>kracht</b> achter <b style={{ color: "#801AFB" }}>House of Hair by Maria</b>, een bruisend
                                        kapsalon waar <b>creativiteit</b> en <b>vakmanschap</b> samenkomen. Samen met haar team maakt
                                        ze dagelijks klanten blij met prachtige kapsels en persoonlijke aandacht. Maar
                                        zoals bij veel <b>succesvolle</b> bedrijven, bracht die populariteit ook een <b>uitdaging</b>
                                        met zich mee: de <b>constante vragen</b> van klanten.

                                        <br/><br/>

                                        <b>Maria</b> merkte dat haar <b>telefoon</b> de hele dag door ging met <b>vragen</b> over prijzen,
                                        services en openingstijden. Dit <b>kostte</b> haar en haar team niet alleen <b>veel tijd</b>,
                                        maar haalde ook de focus weg van wat echt belangrijk was: het leveren van
                                        <b>kwaliteit</b> aan hun <b>klanten</b>. Ze wist dat een oplossing nodig was en besloot een <b style={{ color: "#801AFB" }}>informatieve website</b> te laten maken.

                                        <br/><br/>

                                        We werkten nauw met <b>Maria</b> samen om een website te creëren die net zo
                                        <b>professioneel</b> en <b>stijlvol</b> is als haar kapsalon. Op de <b>website</b> vinden klanten nu
                                        alles wat ze nodig hebben: een overzicht van de beschikbare services, duidelijke <b>prijslijsten</b>, de actuele <b>openingstijden</b> en zelfs een handige mogelijkheid om
                                        <b>contact</b> op te nemen of <b>afspraken te plannen</b>. Dit geeft <b>Maria</b> en haar team niet
                                        alleen meer rust, maar zorgt er ook voor dat klanten <b>snel</b> en <b>eenvoudig</b> antwoord
                                        krijgen op hun vragen.

                                        <br/><br/>

                                        De <b>website</b> heeft het leven in <b style={{ color: "#801AFB" }}>House of Hair by Maria</b> echt veranderd. Klanten
                                        weten nu precies wat ze kunnen verwachten en <b>Maria</b> hoeft veel minder
                                        <b>telefoontjes</b> te <b>beantwoorden</b>. Zo heeft ze meer tijd om zich te concentreren op
                                        waar ze het allerbeste in is: haar klanten een <b>geweldige ervaring</b> bieden.

                                        <br/><br/>

                                        Of je nu op zoek bent naar een <b>nieuwe look</b> of gewoon een <b>kapsalon</b> wilt waar je
                                        altijd met een <b>glimlach</b> naar buiten stapt, bij <b style={{ color: "#801AFB" }}>House of Hair by Maria</b> zit je
                                        goed. En dankzij haar <b>nieuwe website</b> weet je precies wat je kunt verwachten
                                        voordat je zelfs <b>binnenstapt</b>. ✨
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

export default HouseOfHairByMaria;
