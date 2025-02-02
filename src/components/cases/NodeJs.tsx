import {
    Box,
    chakra,
    ChakraProvider,
    Container,
    Divider,
    Image,
    Link,
    Skeleton,
    SkeletonText,
    Text
} from '@chakra-ui/react';
import Header from "../Header.tsx";
import {customChakraTheme} from "../../styles/CustomChakraTheme.tsx";
import nodejsMainImage from '../../assets/nodejs/nodejs-main.jpg';
import WhatsAppButton from "../WhatsappButton.tsx";
import {Footer} from "../Footer.tsx";
import {Copyright} from "../Copyright.tsx";
import React, {useEffect} from "react";

function NodeJs() {

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
                                        Onze reis met
                                        {' '}
                                        <chakra.h1
                                            as="span"
                                            display="inline-block"
                                            style={{color: "#801AFB", whiteSpace: "nowrap"}}
                                        >
                                            NodeJS
                                        </chakra.h1>
                                        .
                                    </chakra.h1>
                                </Skeleton>

                                {/* Add Hero Image */}
                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{borderRadius: "5px"}}>
                                    <Image
                                        style={{borderRadius: '10px'}}
                                        src={nodejsMainImage}
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

                                        <b style={{ color: "#801AFB"}}>Node.js</b> is meer dan een <b>technologie</b>; het is de ruggengraat van
                                        moderne <b>webapplicaties</b> en een drijvende kracht achter innovatie in de <b>JavaScript-community</b>. Toen <b style={{ color: "#801AFB"}}>Node.js</b> ons benaderde,
                                        was hun <b>doel</b> helder: ze zochten een <b>partner</b> die hun platform kon versterken met een digitale
                                        aanwezigheid die net zo <b>flexibel</b> en <b>krachtig</b> is als hun technologie.

                                        <br/><br/>

                                        Met onze ervaring en een gedeelde passie voor <b>open-source</b>, waren we klaar voor
                                        deze uitdaging. Voor <b style={{ color: "#801AFB"}}>Node.js</b> ontwikkelden we een online ervaring die niet
                                        alleen <b>functioneel</b> was, maar ook de veelzijdigheid en <b>dynamiek</b> van hun community
                                        weerspiegelt. Net zoals bij onze samenwerking met
                                        {' '}
                                        <Link
                                            href="/cases/ethereum"
                                            isExternal
                                            textDecoration="underline"
                                            color="#801AFB"
                                            fontWeight="bold"
                                            _hover={{ color: "rebeccapurple" }}
                                        >
                                            Ethereum
                                        </Link>
                                        , ging dit project
                                        verder dan <b>techniek</b>; het ging om het uitdragen van een <b>visie</b>.

                                        <br/><br/>

                                        Een <b>hoogtepunt</b> van onze samenwerking was de introductie van een <b>interactieve</b> documentatiehub,
                                        ontworpen om ontwikkelaars wereldwijd te <b>inspireren</b> en te <b>ondersteunen</b>.
                                        Dit platform biedt niet alleen <b>informatie</b>, maar nodigt gebruikers
                                        ook uit om bij te dragen aan het groeiende <b>ecosysteem</b> van <b style={{ color: "#801AFB"}}>Node.js</b>.

                                        <br/><br/>

                                        Onze ervaring met
                                        {' '}
                                        <Link
                                            href="/cases/ethereum"
                                            isExternal
                                            textDecoration="underline"
                                            color="#801AFB"
                                            fontWeight="bold"
                                            _hover={{ color: "rebeccapurple" }}
                                        >
                                            Ethereum
                                        </Link>
                                        {' '}
                                        leerde ons hoe belangrijk het is om een <b>community</b> centraal
                                        te stellen. Diezelfde <b>filosofie</b> hebben we toegepast bij <b style={{ color: "#801AFB"}}>Node.js</b>,
                                        waarbij we een digitale omgeving hebben gecreëerd die <b>openheid</b> en <b>samenwerking</b> bevordert.

                                        <br/><br/>

                                        Samen met <b style={{ color: "#801AFB"}}>Node.js</b> blijven we bouwen aan de <b>tools</b> en <b>ervaringen</b> die developers
                                        nodig hebben om te <b>innoveren</b>. Voor ons is dit meer dan een <b>samenwerking</b>; het is
                                        een kans om bij te dragen aan een <b>technologie</b> die de manier waarop de wereld
                                        bouwt, blijft <b>transformeren</b>. 🚀
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

export default NodeJs;
