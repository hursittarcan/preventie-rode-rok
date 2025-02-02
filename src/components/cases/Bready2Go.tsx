import {Box, chakra, ChakraProvider, Container, Divider, Image, Skeleton, SkeletonText, Text} from '@chakra-ui/react';
import Header from "../../components/Header.tsx";
import {customChakraTheme} from "../../styles/CustomChakraTheme.tsx";
import breadyMainImage from '../../assets/bready2go/bready-main.jpg';
import WhatsAppButton from "../WhatsappButton.tsx";
import {Footer} from "../Footer.tsx";
import {Copyright} from "../Copyright.tsx";
import React, {useEffect} from "react";

function Bready2Go() {

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
                                        Taxi
                                        {' '}
                                        <chakra.h1
                                            as="span"
                                            display="inline-block"
                                            style={{color: "#801AFB", whiteSpace: "nowrap"}}
                                        >
                                            boeken
                                        </chakra.h1>
                                        {' '}
                                        zonder gedoe.
                                    </chakra.h1>
                                </Skeleton>

                                {/* Add Hero Image */}
                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{borderRadius: "5px"}}>
                                    <Image
                                        style={{borderRadius: '10px'}}
                                        src={breadyMainImage}
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

                                        Een <b>succesvolle onderneming</b> vraagt niet alleen om uitstekende service, maar
                                        ook om <b style={{color: "#801AFB"}}>slimme oplossingen</b>.

                                        Voor een druk <b>taxibedrijf</b> nabij <b>Brussel</b> werd het al snel duidelijk dat de traditionele manier van ritten plannen niet langer voldeed.

                                        <br/><br/>

                                        Klanten wilden <b>snel en eenvoudig</b> hun ritten kunnen boeken, terwijl de eigenaar behoefte had aan meer rust en overzicht in het proces.

                                        <br/><br/>

                                        <b>Asif</b> kwam bij ons met een duidelijke missie: hij wilde een moderne, <b style={{color: "#801AFB"}}>gebruiksvriendelijke website</b> die zijn klanten in staat stelde om hun ritten <b>online</b> te boeken,
                                        zonder dat hij continu bereikbaar hoefde te zijn.

                                        <br/><br/>

                                        Het doel? Tijd besparen, zijn service professionaliseren, en een <b style={{color: "#801AFB"}}>vlekkeloze ervaring</b> bieden voor iedereen die een rit met zijn <b>taxi's</b> wil plannen.


                                        <br/><br/>

                                        We begonnen, zoals bij elk project, met aandachtig te luisteren naar <b>Asif’s</b> wensen.
                                        Hij had een helder beeld voor ogen: een platform dat niet alleen functioneel en efficiënt zou zijn, maar ook zijn <b style={{color: "#801AFB"}}>bedrijfskarakter</b> weerspiegelde.

                                        <br/><br/>

                                        Het <b>resultaat</b> was een op <b style={{color: "#801AFB"}}>maat gemaakte website</b> waarmee klanten met slechts een paar klikken hun rit kunnen boeken.
                                        Het <b>systeem</b> werd ontworpen met gebruiksvriendelijkheid en overzichtelijkheid als kernwaarden, zodat zowel <b>Asif</b> als zijn klanten moeiteloos door het proces konden navigeren.

                                        <br/><br/>

                                        Met slechts een paar <b>klikken</b> plannen klanten nu moeiteloos hun volgende <b>reis</b>, of het nu gaat om een rit naar de luchthaven, een zakelijke afspraak, of een comfortabele reis door de stad.
                                        Het <b>resultaat</b> is een systeem dat niet alleen tijd bespaart, maar ook het <b style={{color: "#801AFB"}}>vertrouwen</b> en de <b style={{color: "#801AFB"}}>tevredenheid</b> van klanten versterkt.

                                        <br/><br/>

                                        Heeft u binnenkort een trip gepland? <b>Check</b> dan zeker even bij <b style={{color: "#801AFB"}}>Bready 2 Go</b> voor de <b>voordeligste tarieven</b>. 🚖
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

export default Bready2Go;
