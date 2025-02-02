import {Box, chakra, ChakraProvider, Container, Divider, Image, Skeleton, SkeletonText, Text} from '@chakra-ui/react';
import Header from "../Header.tsx";
import {customChakraTheme} from "../../styles/CustomChakraTheme.tsx";
import worstelclubMainImage from '../../assets/worstelclubhasselt/worstelclub-main.jpg';
import worstelclubSubImage from '../../assets/worstelclubhasselt/worstelclub-sub.jpg';
import WhatsAppButton from "../WhatsappButton.tsx";
import {Footer} from "../Footer.tsx";
import {Copyright} from "../Copyright.tsx";
import React, {useEffect} from "react";

function WorstelclubHasselt() {

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
                                            digitale kracht
                                        </chakra.h1>
                                        {' '}
                                        achter Worstelclub Hasselt
                                    </chakra.h1>
                                </Skeleton>

                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{borderRadius: "5px"}}>
                                    <Image
                                        style={{borderRadius: '10px'}}
                                        src={worstelclubMainImage}
                                        alt="Hero Illustration"
                                        mx="auto"
                                        mt="6"
                                        mb="8"
                                    />
                                </Skeleton>

                                <SkeletonText fadeDuration={4} isLoaded={isLoaded} noOfLines={20} skeletonHeight='7'>
                                    <Text
                                        mx="auto"
                                        color="#00044F"
                                        _dark={{color: 'gray.400'}}
                                        fontSize={{base: 'lg', lg: 'xl'}}
                                        mt="6"
                                        lineHeight="1.8"
                                    >

                                        <b style={{color: "#801AFB"}}>Worstelclub Hasselt</b>, onder leiding van
                                        eigenaar <b>Adam</b>, is veel meer dan een <b>sportclub</b>.
                                        Het is een <b>gemeenschap</b> waar sportiviteit, discipline en doorzettingsvermogen samenkomen.
                                        Met jarenlange ervaring en een diepgewortelde passie voor <b>worstelen</b>, heeft <b>Adam</b> een plek gecreëerd waar zowel beginners als ervaren worstelaars hun vaardigheden kunnen ontwikkelen
                                        en elkaar kunnen inspireren.
                                        Hij had een duidelijke <b>visie</b>: een centrale plek waar geïnteresseerden niet alleen alle <b>informatie</b> over de club konden vinden, maar ook eenvoudig <b>contact</b> met hem konden opnemen.

                                        <br/><br/>

                                        Met deze <b>visie</b> in gedachten gingen wij aan de slag. Ons doel was om een <b>informatieve</b> en <b>gebruiksvriendelijke</b> website te ontwikkelen die past bij de kernwaarden van <b style={{color: "#801AFB"}}>Worstelclub Hasselt</b>.
                                        De website moest niet alleen een platform zijn voor praktische informatie, maar ook de energie en de <b>missie van de club</b> uitstralen.
                                        Van trainingsschema’s en lidmaatschapsopties tot een soepel werkend <b>inschrijvingsformulier</b> – elk <b>detail</b> werd zorgvuldig ontworpen om de behoeften van de gebruikers te vervullen.

                                        <br/><br/>

                                        De <b>website</b> biedt nieuwe en bestaande leden alle <b>informatie</b> die ze nodig hebben.
                                        Potentiële leden kunnen nu eenvoudig ontdekken wat de club te bieden heeft en zich direct aanmelden. Bestaande leden vinden er gemakkelijk hun trainingsroosters en updates.
                                        En dat alles <b>zonder gedoe</b>: helderheid en gebruiksgemak stonden centraal in ons ontwerp. Geen rompslomp, alleen een <b>soepele ervaring voor alle bezoekers</b>.

                                        <br/><br/>

                                        Naast het praktische aspect is de website ook een <b>digitale etalage</b> van de club geworden.
                                        Het straalt kracht, professionaliteit en betrokkenheid uit – precies zoals <b>Adam</b> het voor ogen had. Dankzij deze <b style={{color: "#801AFB"}}>digitale oplossing</b> kan <b>Adam</b> zich nu volledig richten op wat hij het liefste doet:
                                        mensen inspireren en begeleiden in hun reis door de wereld van het <b>worstelen</b>.
                                        Met zijn kennis en passie helpt hij leden niet alleen fysiek sterker te worden, maar ook zelfverzekerder en veerkrachtiger.

                                        <br/><br/>

                                        Voor iedereen die worstelen wil ontdekken, biedt de <b>website</b> een laagdrempelige manier om kennis te maken met de club.
                                        Bezoekers kunnen niet alleen praktische details vinden, maar ook meer leren over de missie en visie van de club.
                                        Zo voelt <b style={{color: "#801AFB"}}>Worstelclub Hasselt</b> voor velen als een warm welkom in een wereld van kracht en sportieve uitdaging.
                                    </Text>
                                </SkeletonText>

                                {/* Divider Image */}
                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{borderRadius: "5px"}}>
                                    <Image
                                        src={worstelclubSubImage}
                                        alt="Section Divider"
                                        mx="auto"
                                        my="12"
                                    />
                                </Skeleton>

                                {/* Continue Text */}
                                <SkeletonText fadeDuration={4} isLoaded={isLoaded} noOfLines={2} skeletonHeight='7'>
                                    <Text
                                        mx="auto"
                                        color="#00044F"
                                        _dark={{color: 'gray.400'}}
                                        fontSize={{base: 'lg', lg: 'xl'}}
                                        mt="6"
                                        lineHeight="1.8"
                                    >
                                        Wil jij ontdekken wat worstelen voor jou kan betekenen? Neem dan een kijkje op de website en maak kennis met de kracht, discipline en kameraadschap die deze sport uniek maakt. 💪
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

export default WorstelclubHasselt;
