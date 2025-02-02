import {Box, chakra, ChakraProvider, Container, Divider, Image, Skeleton, SkeletonText, Text} from '@chakra-ui/react';
import Header from "../Header.tsx";
import {customChakraTheme} from "../../styles/CustomChakraTheme.tsx";
import douaMainImage from '../../assets/doua/doua-main.jpg';
import douaSubImage from '../../assets/doua/doua-sub.jpg';
import WhatsAppButton from "../WhatsappButton.tsx";
import {Footer} from "../Footer.tsx";
import {Copyright} from "../Copyright.tsx";
import React, {useEffect} from "react";

function Doua() {

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
                                        De
                                        {' '}
                                        <chakra.h1
                                            as="span"
                                            display="inline-block"
                                            style={{color: "#801AFB", whiteSpace: "nowrap"}}
                                        >
                                            digitale
                                        </chakra.h1>
                                        {' '}
                                        {React.useState(() => window.innerWidth < 768)[0] ? "essentie van schoonheid" : "essentie van natuurlijke schoonheid"}
                                        .
                                    </chakra.h1>
                                </Skeleton>

                                {/* Add Hero Image */}
                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{borderRadius: "5px"}}>
                                    <Image
                                        style={{borderRadius: '10px'}}
                                        src={douaMainImage}
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

                                        <b style={{color: "#801AFB"}}>Doua</b> is een merk dat meer is dan alleen producten.
                                        Het is een viering van
                                        <b> natuurlijke schoonheid</b> en zelfzorg. Toen eigenares <b>Gamze</b> naar ons toe kwam, wist
                                        ze precies wat ze wilde: een <b>webshop</b> die niet alleen haar producten verkocht, maar
                                        ook haar <b>merkverhaal</b> vertelde. Een <b>digitale plek</b> die de kernwaarden van <b style={{color: "#801AFB"}}>Doua</b> – puur,
                                        elegant en krachtig – tot uiting bracht.

                                        <br/><br/>

                                        Voor ons was dit een kans om een <b>prachtig merk</b> te helpen groeien en een <b style={{color: "#801AFB"}}>digitale identiteit</b> te geven die net zo <b>uniek</b> was als de producten zelf.

                                        <br/><br/>

                                        <b>Gamze</b> wilde niet zomaar een webshop; ze wilde een platform dat haar <b>merk</b> tot leven
                                        bracht. Een plek waar klanten niet alleen konden winkelen, maar zich ook verbonden
                                        voelden met de <b>waarden en missie</b> van <b style={{color: "#801AFB"}}>Doua</b>. De uitdaging? Hoe vertaal je een <b>visie </b>
                                        over natuurlijke schoonheid en eenvoud naar een <b>digitaal platform</b> dat impact maakt
                                        én klanten moeiteloos bedient?

                                        <br/><br/>


                                        Om het <b>merkverhaal</b> van <b style={{color: "#801AFB"}}>Doua</b> tot leven te brengen, kozen we voor een <b>minimalistisch
                                        design</b> met zachte kleuren en natuurlijke accenten. Elk detail van de webshop werd
                                        zorgvuldig ontworpen om de <b>authenticiteit</b> en <b>kwaliteit</b> van de producten te
                                        benadrukken.

                                        <br/><br/>

                                        Naast de <b>visuele uitstraling</b> lag de focus op <b>functionaliteit</b>. Klanten
                                        konden moeiteloos door de collectie bladeren, nieuwe producten ontdekken en
                                        eenvoudig een <b>bestelling</b> plaatsen. Met heldere productbeschrijvingen en een
                                        transparant bestelproces werd er <b style={{color: "#801AFB"}}>vertrouwen</b> gecreëerd bij de bezoekers.
                                    </Text>
                                </SkeletonText>

                                {/* Divider Image */}
                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{borderRadius: "5px"}}>
                                    <Image
                                        src={douaSubImage}
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
                                        Dankzij deze unieke aanpak is de webshop van <b style={{color: "#801AFB"}}>Doua</b> niet alleen een plek om producten te kopen, maar een <b>ervaring</b> waarin klanten zich volledig kunnen onderdompelen in de waarden van het <b>merk</b>.
                                        Het is een <b>digitale etalage</b> geworden die de essentie van natuurlijke <b>schoonheid</b> en zelfzorg weerspiegelt.

                                        <br/><br/>

                                        Met trots zien we hoe <b style={{color: "#801AFB"}}>Doua</b> nu klanten inspireert en verbindt via een <b>platform</b> dat zowel stijlvol als <b>functioneel</b> is.
                                        Het <b>resultaat</b> is niet zomaar een <b>webshop</b>, maar een online bestemming die het verhaal van <b>Gamze</b> en haar <b>merk</b> krachtig vertelt.
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

export default Doua;
