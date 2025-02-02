import {Box, chakra, ChakraProvider, Container, Divider, Image, Skeleton, SkeletonText, Text} from '@chakra-ui/react';
import Header from "../Header.tsx";
import {customChakraTheme} from "../../styles/CustomChakraTheme.tsx";
import ethereumMainImage from '../../assets/ethereum/ethereum-main.jpg';
import ethereumSubImage from '../../assets/ethereum/ethereum-sub.jpg';
import WhatsAppButton from "../WhatsappButton.tsx";
import {Footer} from "../Footer.tsx";
import {Copyright} from "../Copyright.tsx";
import React, {useEffect} from "react";

function Ethereum() {

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
                                        Het pad naar een
                                        {' '}
                                        <chakra.h1
                                            as="span"
                                            display="inline-block"
                                            style={{color: "#801AFB", whiteSpace: "nowrap"}}
                                        >
                                            gedecentraliseerde
                                        </chakra.h1>
                                        {' '}
                                        wereld.
                                    </chakra.h1>
                                </Skeleton>

                                {/* Add Hero Image */}
                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{borderRadius: "5px"}}>
                                    <Image
                                        style={{borderRadius: '10px'}}
                                        src={ethereumMainImage}
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

                                        <b style={{ color: "#801AFB" }}>Ethereum</b> is meer dan een platform; het is een beweging die <b>innovatie</b> en <b>decentralisatie</b> naar de wereld brengt.
                                        Toen <b style={{ color: "#801AFB" }}>Ethereum</b> ons in 2021 benaderde, hadden ze een duidelijke missie: een digitale partner vinden die niet alleen hun
                                        website kon ondersteunen, maar ook hun visie kon versterken. Voor ons was dit een unieke kans om samen te werken met een organisatie die
                                        de <b>toekomst</b> vormgeeft.

                                        <br/><br/>

                                        <b style={{ color: "#801AFB" }}>Ethereum</b> wilde niet zomaar een technische dienstverlener.
                                        Ze zochten een <b>partner</b> die hun kernwaarden kon vertalen naar een online ervaring – een <b>digitaal ecosysteem</b> dat hun wereldwijde community niet alleen zou bedienen, maar ook zou inspireren.
                                        Dit was een <b>uitdaging</b> waar we met volle <b>overtuiging</b> aan begonnen.

                                        <br/><br/>

                                        Onze <b>samenwerking</b> begon klein. We richtten ons op het oplossen van problemen, het
                                        implementeren van nieuwe functies en het migreren van hun website naar <b>moderne
                                        technologieën</b>. Maar wat begon als technische ondersteuning, <b>groeide</b> al snel uit
                                        tot een veel bredere <b>verantwoordelijkheid</b>.

                                        <br/><br/>

                                        Een van onze belangrijkste <b>mijlpalen</b> was het verzorgen van de <b>Nederlandse</b>
                                        lokalisatie van <b style={{ color: "#801AFB" }}>ethereum.org</b>. Hierdoor werd de
                                        website toegankelijker en
                                        relevanter voor <b>Nederlandstalige</b> gebruikers. Dit was meer dan een vertaling; het
                                        was een stap in de richting van het dichterbij brengen van <b style={{ color: "#801AFB" }}>Ethereum’s</b> missie tot
                                        de mensen die het willen gebruiken en begrijpen.
                                    </Text>
                                </SkeletonText>

                                {/* Divider Image */}
                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{borderRadius: "5px"}}>
                                    <Image
                                        src={ethereumSubImage}
                                        alt="Section Divider"
                                        mx="auto"
                                        my="12"
                                        borderRadius="10px"
                                    />
                                </Skeleton>

                                {/* Continue Text */}
                                <SkeletonText fadeDuration={4} isLoaded={isLoaded} noOfLines={5} skeletonHeight='7'>
                                    <Text
                                        mx="auto"
                                        color="#00044F"
                                        _dark={{color: 'gray.400'}}
                                        fontSize={{base: 'lg', lg: 'xl'}}
                                        mt="6"
                                        lineHeight="1.8"
                                    >
                                        Wat onze <b>samenwerking</b> met <b style={{ color: "#801AFB" }}>Ethereum</b> uniek maakt,
                                        is dat het een blijvend proces is. We blijven <b>samenwerken</b> aan nieuwe <b>blockchain applicaties</b> en <b>digitale
                                        initiatieven</b> die echte impact hebben op het <b style={{ color: "#801AFB" }}>Ethereum-ecosysteem</b>.
                                        Deze projecten
                                        zijn niet alleen technisch <b>innovatief</b>, maar hebben ook een duidelijk <b>doel</b>:
                                        waarde creëren voor een wereldwijde community.

                                        <br/><br/>

                                        Met <b>trots</b> zien we hoe <b style={{ color: "#801AFB" }}>Ethereum</b> blijft groeien en
                                        bloeien, ondersteund door een website die hun missie perfect uitdraagt. Voor ons is dit niet zomaar een
                                        project, maar een kans om deel uit te maken van een <b>beweging</b> die de <b><u>wereld gaat veranderen</u></b>. 🚀
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

export default Ethereum;
