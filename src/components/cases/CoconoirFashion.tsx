import {Box, chakra, ChakraProvider, Container, Divider, Image, Skeleton, SkeletonText, Text} from '@chakra-ui/react';
import Header from "../Header.tsx";
import {customChakraTheme} from "../../styles/CustomChakraTheme.tsx";
import coconoirMainImage from '../../assets/coconoirfashion/coconoir-main.jpeg';
import coconoirSubImage from '../../assets/coconoirfashion/coconoir-sub.jpg';
import WhatsAppButton from "../WhatsappButton.tsx";
import {Footer} from "../Footer.tsx";
import {Copyright} from "../Copyright.tsx";
import React, {useEffect} from "react";

function CoconoirFashion() {

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

                <Box position="relative" minH={`calc(100vh - 4.5rem)`}>
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
                                        {React.useState(() => window.innerWidth < 768)[0] ? null : "Een "}
                                        {' '}
                                        <chakra.h1
                                            as="span"
                                            display="inline-block"
                                            style={{color: "#801AFB", whiteSpace: "nowrap"}}
                                        >
                                            {React.useState(() => window.innerWidth < 768)[0] ? "Digitale" : "digitale"}
                                        </chakra.h1>
                                        {' '}
                                        transformatie voor
                                        {' '}
                                        <chakra.h1
                                            as="span"
                                            display="inline-block"
                                            style={{color: "#801AFB", whiteSpace: "nowrap"}}
                                        >
                                            elegante
                                        </chakra.h1>
                                        {' '}
                                        {React.useState(() => window.innerWidth < 768)[0] ? "mode" : "mode in Genk"}
                                        .
                                    </chakra.h1>
                                </Skeleton>

                                {/* Add Hero Image */}
                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{borderRadius: "5px"}}>
                                    <Image
                                        style={{borderRadius: '10px'}}
                                        src={coconoirMainImage}
                                        alt="Hero Illustration"
                                        mx="auto"
                                        mt="6"
                                        mb="8"
                                    />
                                </Skeleton>

                                <SkeletonText fadeDuration={4} isLoaded={isLoaded} noOfLines={25} skeletonHeight='7'>
                                    <Text
                                        mx="auto"
                                        color="#00044F"
                                        _dark={{color: 'gray.400'}}
                                        fontSize={{base: 'lg', lg: 'xl'}}
                                        mt="6"
                                        lineHeight="1.8"
                                    >

                                        In het hart van <b>Genk</b> vinden we <b style={{color: "#801AFB"}}>Coconoir
                                        Fashion</b>, een stijlvolle en moderne boetiek die elegantie en vrouwelijkheid
                                        ademt. <b style={{color: "#801AFB"}}>Coconoir
                                        Fashion</b> is een gevestigde naam geworden, mede dankzij de visie en passie van
                                        eigenares <b>Maria</b>. Als een succesvolle zakenvrouw en een van onze allereerste
                                        klanten, vertrouwde <b>Maria</b> op ons om haar zaak naar een <b>nieuw niveau</b> te
                                        tillen. Ze had een duidelijke wens: <b style={{color: "#801AFB"}}>een strakke, maar
                                        eenvoudige webshop</b>, die de unieke uitstraling van haar winkel perfect zou
                                        weerspiegelen.

                                        <br/><br/>

                                        <b>Maria</b> wist dat de online wereld een belangrijke kans bood om haar klanten
                                        beter te bedienen en haar bereik te vergroten. Maar hoe zet je een modeboetiek – met
                                        al haar details en persoonlijke touch – om in een digitale ervaring? Ze had niet
                                        zomaar een <b>webshop</b> nodig, maar een platform die de essentie van <b
                                        style={{color: "#801AFB"}}>Coconoir Fashion</b> perfect zou weerspiegelen.

                                        <br/><br/>

                                        Haar vraag: hoe maken we een online winkel die zowel bij haar merk past als
                                        gebruiksvriendelijk is, voor haarzelf én haar klanten?

                                        <br/><br/>

                                        We begonnen waar elk <b>succesvol project</b> begint: door aandachtig te
                                        luisteren. <b>Maria’s</b> vraag was helder, maar om die optimaal te beantwoorden,
                                        moesten we eerst haar unieke <b style={{color: "#801AFB"}}>visie</b> en <b
                                        style={{color: "#801AFB"}}>uitdagingen</b> volledig begrijpen. <b
                                        style={{color: "#801AFB"}}>Coconoir Fashion</b>, met zijn verfijnde mix van luxe en
                                        eenvoud, vormde een perfecte weerspiegeling van <b>Maria’s</b> smaak en
                                        ondernemerschap. Dit werd onze inspiratiebron.

                                        <br/><br/>

                                        In nauwe samenwerking gingen we stap voor stap aan de slag, met oog
                                        voor <b>detail</b> en een scherp afgebakend budget. Het resultaat?
                                        Een <b>elegante</b>, op maat gemaakte <b>webshop</b> die de uitstraling en sfeer van
                                        haar fysieke winkel naadloos naar de <b style={{color: "#801AFB"}}>digitale
                                        wereld</b> bracht – stijlvol, overzichtelijk en gebruiksvriendelijk.
                                    </Text>
                                </SkeletonText>

                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{borderRadius: "5px"}}>
                                    <Image
                                        src={coconoirSubImage}
                                        alt="Section Divider"
                                        mx="auto"
                                        my="12"
                                        borderRadius="10px"
                                    />
                                </Skeleton>


                                <SkeletonText fadeDuration={4} isLoaded={isLoaded} noOfLines={10} skeletonHeight='7'>
                                    <Text
                                        mx="auto"
                                        color="#00044F"
                                        _dark={{color: 'gray.400'}}
                                        fontSize={{base: 'lg', lg: 'xl'}}
                                        mt="6"
                                        lineHeight="1.8"
                                    >
                                        <b>Maria</b> is een klant van het eerste uur en heeft ons in het begin het
                                        vertrouwen gegeven dat cruciaal was voor ons <b>eigen succes</b>. Het is bijzonder
                                        om te zien hoe <b style={{color: "#801AFB"}}>Coconoir Fashion</b> en haar webshop
                                        zijn gegroeid sinds 2019. En hoewel de <b>webshop</b> inmiddels bijna vijf jaar oud
                                        is, blijft het een voorbeeld van hoe <b>stijl en technologie</b> hand in hand kunnen
                                        gaan.

                                        <br/><br/>


                                        <b style={{color: "#801AFB"}}>Coconoir Fashion</b> is niet zomaar een winkel; het is
                                        een <b>sterk en stijlvol</b> merk dat elegantie en klasse uitstraalt. We zijn dan
                                        ook <b>trots</b> dat we hebben mogen bijdragen aan de groei en <b>online
                                        transformatie</b> van deze bijzondere zaak.

                                        <br/><br/>

                                        Ontdek de collectie op <b>coconoirfashion.be</b> en laat je verrassen door
                                        tijdloze <b>elegantie</b>. 🛍️
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

export default CoconoirFashion;
