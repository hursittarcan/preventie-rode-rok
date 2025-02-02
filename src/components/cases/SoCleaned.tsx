import {Box, chakra, ChakraProvider, Container, Divider, Image, Skeleton, SkeletonText, Text} from '@chakra-ui/react';
import Header from "../Header.tsx";
import {customChakraTheme} from "../../styles/CustomChakraTheme.tsx";
import socleanedMainImage from '../../assets/socleaned/socleaned-main.jpg';
import WhatsAppButton from "../WhatsappButton.tsx";
import {Footer} from "../Footer.tsx";
import {Copyright} from "../Copyright.tsx";
import React, {useEffect} from "react";

function SoCleaned() {

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
                                            style={{color: "#1823df", whiteSpace: "nowrap"}}
                                        >
                                            onzichtbaar
                                        </chakra.h1>
                                        {' '}
                                        naar
                                        {' '}
                                        <chakra.h1
                                            as="span"
                                            display="inline-block"
                                            style={{color: "#1823df", whiteSpace: "nowrap"}}
                                        >
                                            onmisbaar
                                        </chakra.h1>
                                        .
                                    </chakra.h1>
                                </Skeleton>

                                {/* Add Hero Image */}
                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{borderRadius: "5px"}}>
                                    <Image
                                        style={{borderRadius: '10px'}}
                                        src={socleanedMainImage}
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

                                        <b>Sevki</b> is de trotse eigenaar van <b style={{color: "#1823df"}}>SO Cleaned</b>, een professioneel <b>schoonmaakbedrijf</b>
                                        dat uitblinkt in <b>kwaliteit</b> en <b>service</b>. Maar ondanks zijn harde werk, een
                                        bestaande <b>website</b> en <b>social media-profielen</b>, merkte <b>Sevki</b> dat klanten hem
                                        moeilijk wisten te vinden. Hij had al veel geprobeerd om zijn <b>zichtbaarheid</b> te
                                        <b>vergroten</b>, maar het resultaat bleef uit. Bovendien slokte de <b>zoektocht</b> naar
                                        nieuwe <b>klanten</b> kostbare tijd op, tijd die hij liever aan zijn <b>werk</b> besteedde.

                                        <br/><br/>

                                        <b>Sevki</b> besloot dat het anders moest en kwam bij ons met een <b>duidelijke vraag</b>: "Help mij om <b><u>makkelijker vindbaar</u></b> te zijn voor klanten." Met die <b>missie</b> in ons
                                        achterhoofd gingen we <b>meteen</b> aan de slag.

                                        <br/><br/>

                                        Allereerst ontwikkelden we een op maat gemaakte <b>SEO-strategie</b>, gericht op het
                                        <b>verhogen</b> van het <b>verkeer</b> naar de <b>website</b> van <b style={{color: "#1823df"}}>SO Cleaned</b>. Daarnaast hebben we een
                                        <b>Google Business-profiel</b> opgezet en <b>geoptimaliseerd</b>, zodat <b>potentiële klanten</b> het
                                        bedrijf eenvoudig konden vinden en contact konden opnemen. Alles werd ingericht
                                        met het beste <b>bereik</b> en <b>maximale</b> impact als doel.

                                        <br/><br/>

                                        Het <b>resultaat</b>? Na slechts een paar dagen begon het <b>harde werk</b> zich uit te
                                        betalen. De berichten en aanvragen stroomden binnen, en <b>Sevki</b> zag zijn
                                        <b>klantenbestand</b> groeien. Dankzij een betere <b>online zichtbaarheid</b> kan hij zich nu
                                        volledig richten op wat hij het beste doet: huizen en bedrijven <b>schoon</b> en <b>fris</b> achterlaten.

                                        <br/><br/>

                                        Met een sterker <b>online profiel</b> is <b style={{color: "#1823df"}}>SO Cleaned</b> nu niet alleen <b>zichtbaar</b>, maar ook
                                        de <b>go-to</b> keuze voor mensen die <b>kwaliteit</b> zoeken in <b>schoonmaakdiensten</b>. Een <b>succesverhaal</b> waar we met <b>trots</b> aan hebben <b>bijgedragen</b>! 🧼
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

export default SoCleaned;
