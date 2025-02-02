import {Box, chakra, ChakraProvider, Container, Divider, Image, Skeleton, SkeletonText, Text} from '@chakra-ui/react';
import Header from "../../components/Header.tsx";
import {customChakraTheme} from "../../styles/CustomChakraTheme.tsx";
import fadeMainImage from '../../assets/fadebarbershop/fadebarbershop-main.jpeg';
import fadeSubImage from '../../assets/fadebarbershop/fadebarbershop-sub.jpg';
import fadeExtraImage from '../../assets/fadebarbershop/fadebarbershop-extra.jpg';
import WhatsAppButton from "../../components/WhatsappButton.tsx";
import {Footer} from "../Footer.tsx";
import {Copyright} from "../Copyright.tsx";
import React, {useEffect} from "react";

function FadeBarbershop() {

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
                                        Strakke
                                        {' '}
                                        <chakra.h1
                                            as="span"
                                            display="inline-block"
                                            style={{color: "#801AFB", whiteSpace: "nowrap"}}
                                        >
                                            snit
                                        </chakra.h1>
                                        {' '}
                                        en een strakke
                                        {' '}
                                        <chakra.h1
                                            as="span"
                                            display="inline-block"
                                            style={{color: "#801AFB", whiteSpace: "nowrap"}}
                                        >
                                            website
                                        </chakra.h1>
                                        .
                                    </chakra.h1>
                                </Skeleton>

                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{borderRadius: "5px"}}>
                                    <Image
                                        style={{borderRadius: '10px'}}
                                        src={fadeMainImage}
                                        alt="Hero Illustration"
                                        mx="auto"
                                        mt="6"
                                        mb="8"
                                    />
                                </Skeleton>

                                <SkeletonText fadeDuration={4} isLoaded={isLoaded} noOfLines={15} skeletonHeight='7'>
                                    <Text
                                        mx="auto"
                                        color="#00044F"
                                        _dark={{color: 'gray.400'}}
                                        fontSize={{base: 'lg', lg: 'xl'}}
                                        mt="6"
                                        lineHeight="1.8"
                                    >
                                        In het hart van <b>Hasselt</b>, opende onlangs een nieuwe parel haar deuren: <b
                                        style={{color: "#801AFB"}}>Fade Barbershop</b>, een hippe, moderne kapperszaak waar
                                        vakmanschap en stijl hand in hand gaan. De eigenaar, <b>Omer</b>, had een duidelijk
                                        doel voor ogen: een strakke en professionele uitstraling, zowel in zijn zaak -
                                        als <b>online</b>.

                                        <br/><br/>

                                        Maar nog voor de officiële opening stond hij al voor een uitdaging, hoe kon hij zijn
                                        afspraken <b>eenvoudig en foutloos</b> beheren zonder in chaos te belanden?

                                        <br/><br/>

                                        <b>Omer</b> stond aan het begin van zijn ondernemersreis en wist dat
                                        een handmatig afsprakenboek te veel <b>risico’s</b> met zich meebracht, zoals
                                        dubbele boekingen en miscommunicaties. Toen hij bij ons aanklopte, had hij een
                                        simpele vraag: <b>hoe kan ik een systeem opzetten dat mijn klanten eenvoudig laat
                                        reserveren</b> en mij meer tijd geeft om te focussen op wat ik het beste doe -
                                        knippen?

                                        <br/><br/>

                                        Als oude vriend van <b>Omer</b>, wist ik dat zijn zaak een succes kon worden, en dat
                                        een <b style={{color: "#801AFB"}}>sterke digitale basis</b> daarbij zou helpen.
                                        Samen besloten we niet alleen een oplossing te bouwen voor de afspraken, maar om
                                        een <b>complete online aanwezigheid</b> op te zetten die zijn kapperszaak naar <b
                                        style={{color: "#801AFB"}}>the
                                        next level</b> zou tillen.
                                    </Text>
                                </SkeletonText>

                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{borderRadius: "5px"}}>
                                    <Image
                                        src={fadeSubImage}
                                        alt="Section Divider"
                                        mx="auto"
                                        my="12"
                                    />
                                </Skeleton>

                                <SkeletonText fadeDuration={4} isLoaded={isLoaded} noOfLines={15} skeletonHeight='7'>
                                    <Text
                                        mx="auto"
                                        color="#00044F"
                                        _dark={{color: 'gray.400'}}
                                        fontSize={{base: 'lg', lg: 'xl'}}
                                        mt="6"
                                        lineHeight="1.8"
                                    >
                                        Met de officiële opening al over twee weken, stond de tijdsdruk hoog. We begonnen
                                        met het ontwikkelen van een tijdelijke “coming soon”-pagina, zodat klanten alvast
                                        nieuwsgierig werden en wisten dat de website eraan kwam.

                                        <br/><br/>

                                        Parallel hieraan werkten we aan de uiteindelijke website. We spraken
                                        met <b>Omer</b> over zijn visie en haalden inspiratie uit de uitstraling van <b
                                        style={{color: "#801AFB"}}>Fade Barbershop</b>.
                                        De zaak is modern, minimalistisch en stijlvol, en dat moest de <b>website</b> ook
                                        zijn. Met een ‘zwart-wit’ design en eenvoudige navigatie creëerden we een platform
                                        dat net zo strak en verfijnd was als de kapsels die <b>Omer</b> levert.

                                        <br/><br/>

                                        <b>Het hart van de website?</b> Een geïntegreerd online <b
                                        style={{color: "#801AFB"}}>boekingssysteem</b>,
                                        waarmee klanten met een paar klikken een afspraak kunnen maken. Geen telefoontjes,
                                        geen misverstanden – gewoon gemak en efficiëntie.

                                        <br/><br/>

                                        We gingen nog een stap verder door een <b style={{color: "#801AFB"}}>geavanceerd
                                        mailsysteem</b> toe te voegen dat niet alleen
                                        automatisch <b>bevestigingsmails</b> naar klanten stuurde, maar hen ook vooraf
                                        herinnerde aan hun afspraak met een <b>herinneringsmail</b>. Zo bleef alles soepel
                                        verlopen en werden gemiste afspraken tot een minimum beperkt.

                                        <br/><br/>

                                        Na twee weken hard werken, was alles precies op tijd klaar voor de <b>grote
                                        opening</b>. De nieuwe website ging live en maakte direct indruk. Met een
                                        professionele uitstraling en een gebruiksvriendelijk boekingssysteem
                                        kon <b>Omer</b> niet alleen zijn zaak soepel laten draaien, maar ook zijn eerste
                                        klanten overtuigen van zijn <b>professionaliteit</b> en aandacht voor <b>detail</b>.
                                    </Text>
                                </SkeletonText>

                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{borderRadius: "5px"}}>
                                    <Image
                                        src={fadeExtraImage}
                                        alt="Website Design Preview"
                                        mx="auto"
                                        my="12"
                                    />
                                </Skeleton>

                                <SkeletonText fadeDuration={4} isLoaded={isLoaded} noOfLines={5} skeletonHeight='7'>
                                    <Text
                                        mx="auto"
                                        color="#00044F"
                                        _dark={{color: 'gray.400'}}
                                        fontSize={{base: 'lg', lg: 'xl'}}
                                        mt="6"
                                        lineHeight="1.8"
                                    >
                                        Sindsdien trekt de <b>website</b>, te bezoeken op <b>fadebarbershop.be</b>,
                                        voortdurend nieuwe klanten aan, die eenvoudig een afspraak kunnen boeken. De
                                        combinatie van een strak design, slimme functionaliteiten, en snelle realisatie
                                        gaf <b style={{color: "#801AFB"}}>Fade Barbershop</b> de
                                        perfecte start.

                                        <br/><br/>

                                        Wanneer boek jij je afspraak bij <b style={{color: "#801AFB"}}>Fade Barbershop</b>?
                                        ✂️
                                    </Text>
                                </SkeletonText>
                                <br/><br/>
                                <br/><br/>
                            </Box>
                        </Container>

                        <WhatsAppButton/>
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

export default FadeBarbershop;
