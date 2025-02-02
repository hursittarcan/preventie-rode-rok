import {Box, chakra, ChakraProvider, Container, Divider, Image, Skeleton, SkeletonText, Text} from '@chakra-ui/react';
import Header from "../Header.tsx";
import {customChakraTheme} from "../../styles/CustomChakraTheme.tsx";
import essoMainImage from '../../assets/essomoonen/esso-main.jpg';
import WhatsAppButton from "../WhatsappButton.tsx";
import {Footer} from "../Footer.tsx";
import {Copyright} from "../Copyright.tsx";
import React, {useEffect} from "react";

function EssoMoonen() {

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
                                        <chakra.h1
                                            as="span"
                                            display="inline-block"
                                            style={{color: "red", whiteSpace: "nowrap"}}
                                        >
                                            Esso
                                        </chakra.h1>
                                        {' '}
                                        maakt indruk met gloednieuwe website.
                                    </chakra.h1>
                                </Skeleton>

                                {/* Add Hero Image */}
                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{borderRadius: "5px"}}>
                                    <Image
                                        style={{borderRadius: '10px'}}
                                        src={essoMainImage}
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

                                        Stel je een klein, gezellig <b>tankstation</b> voor. Een plek waar je niet alleen je
                                        auto vol kunt tanken, maar ook kunt genieten van een snelle <b>snack</b>, een <b>krantje</b>,
                                        of een <b>sigaar</b> voor onderweg. Dat is <b style={{ color: "red" }}>Esso Moonen</b> in <b>Lommel</b>, al jarenlang een
                                        vertrouwd adres in de buurt. Maar zoals zoveel lokale bedrijven, merkte eigenaar
                                        <b>Khalil</b> dat het steeds lastiger werd om op te vallen. De concurrentie groeide, en
                                        zonder <b style={{ color: "red" }}><u>online aanwezigheid</u></b> bleef zijn zichtbaarheid beperkt.

                                        <br/><br/>

                                        <b>Khalil</b> besloot dat het tijd was voor verandering. Hij klopte bij ons aan met een <b>duidelijke missie</b>: <b style={{ color: "red" }}>Esso Moonen</b> digitaliseren,
                                        en zorgen dat zijn bedrijf beter <b>zichtbaar</b> werd op <b>Google</b>.

                                        <br/><br/>

                                        Met die <b>uitdaging</b> in gedachten hebben we samen een prachtige, <b> gebruiksvriendelijke website</b> gecreëerd. Een <b>digitaal</b> visitekaartje waar klanten
                                        niet alleen <b>praktische informatie</b> kunnen vinden, maar ook een indruk krijgen van
                                        de <b>warme</b> sfeer en het <b>uitgebreide</b> aanbod van <b style={{ color: "red" }}>Esso Moonen</b>.

                                        <br/><br/>

                                        Vervolgens hebben we een <b>Google Business-profiel</b> opgezet om ervoor te zorgen dat <b>Khalil’s</b> station
                                        eenvoudig te vinden was voor <b>voorbijgangers</b> en <b>buurtbewoners</b>.

                                        <br/><br/>

                                        Maar we gingen nog een stap verder. Met een stevige <b>SEO-strategie</b> zorgden we
                                        ervoor dat <b style={{ color: "red" }}>Esso Moonen</b> naar de <b>top resultaten</b> klom wanneer mensen in de
                                        buurt op zoek waren naar een <b>tankstation</b> of <b>winkel</b>. Het resultaat? Waar <b>Khalil</b>
                                        eerder maar een <b>handvol telefoontjes</b> kreeg op een dag, ontvangt hij nu zoveel
                                        <b>berichten</b> en <b>telefoontjes</b> dat hij en zijn team er hun <b>handen vol</b> aan hebben.

                                        <br/><br/>

                                        Dus, ben je op zoek naar een <b>snack</b>, een <b>sigaar</b> of een lekker <b>drankje</b> voor het
                                        weekend? Spring dan zeker eens langs bij <b>Khalil</b> in <b>Lommel</b>. Dankzij een vleugje
                                        <b>digitalisering</b> en een flinke dosis passie heeft <b style={{ color: "red" }}>Esso Moonen</b> nu zowel lokaal als
                                        online een plekje in het hart van de <b>community</b>. 🚗
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

export default EssoMoonen;
