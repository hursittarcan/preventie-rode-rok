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
import tiaMainImage from '../../assets/tia/tia-main.jpg';
import tiaSubImage from '../../assets/tia/tia-sub.jpg';
import WhatsAppButton from "../WhatsappButton.tsx";
import {Footer} from "../Footer.tsx";
import {Copyright} from "../Copyright.tsx";
import React, {useEffect} from "react";

function TechnologyInnovationAgency() {

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
                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{ borderRadius: "5px"}}>
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
                                        {React.useState(() => window.innerWidth < 768)[0] ? "De " : "Een "}
                                        <chakra.h1
                                            as="span"
                                            display="inline-block"
                                            style={{color: "darkgreen", whiteSpace: "nowrap"}}
                                        >
                                            {React.useState(() => window.innerWidth < 768)[0] ? "toekomst" : "duurzame"}
                                        </chakra.h1>
                                        {" "}
                                        {React.useState(() => window.innerWidth < 768)[0] ? "van afval in" : "toekomst voor afvalbeheer in"}
                                        {' '}
                                        <chakra.h1
                                            as="span"
                                            display="inline-block"
                                            style={{color: "darkgreen", whiteSpace: "nowrap"}}
                                        >
                                            Zuid-Afrika
                                        </chakra.h1>
                                        .
                                    </chakra.h1>
                                </Skeleton>

                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{ borderRadius: "5px"}}>
                                    <Image
                                        style={{borderRadius: '10px'}}
                                        src={tiaMainImage}
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

                                        <b style={{color: "darkgreen"}}>Zuid-Afrika</b> bevindt zich op een
                                        belangrijk <b>keerpunt</b>. De snelle groei en urbanisatie brengen ongekende
                                        mogelijkheden, maar ook <b>immense uitdagingen</b> met zich mee. Een van de grootste
                                        problemen waarmee het land wordt geconfronteerd, is het beheer van het groeiende
                                        <b> afvalvolume</b>.
                                        <b style={{color: "darkgreen"}}> Oude systemen</b> kunnen de
                                        druk niet meer aan, en <b>traditionele methoden </b>
                                        schieten tekort. Het was in deze context dat we samen met de
                                        {' '}
                                        <Link
                                            href="https://www.tia.org.za/"
                                            isExternal
                                            textDecoration="underline"
                                            color="darkgreen"
                                            fontWeight="bold"
                                            _hover={{ color: "green" }}
                                        >
                                            Technology Innovation Agency
                                        </Link>
                                        {' '}
                                        een ambitieus project zijn gestart.

                                        <br/><br/>

                                        De <b>reis</b> begon met een simpele maar <b>krachtige vraag</b>: hoe kunnen we de groei van het
                                        land ondersteunen zonder dat gemeenschappen ingrijpende veranderingen in hun
                                        dagelijks leven hoeven te ondergaan? Het <b>antwoord</b> was allesbehalve eenvoudig, maar
                                        met de gezamenlijke inzet van onze partners werden de eerste stappen gezet naar een
                                        oplossing die zowel <b>technologisch innovatief</b> als <b>sociaal rechtvaardig</b> moest zijn.

                                        <br/><br/>

                                        De samenwerking met
                                        {' '}
                                        <Link
                                            href="https://www.tia.org.za/"
                                            isExternal
                                            textDecoration="underline"
                                            color="darkgreen"
                                            fontWeight="bold"
                                            _hover={{ color: "green" }}
                                        >
                                            TIA
                                        </Link>
                                        {' '}
                                        gaf ons toegang tot een brede <b>kennisbasis</b> en middelen om het
                                        <b> probleem</b> vanuit verschillende invalshoeken te benaderen. Maar het project ging
                                        verder dan alleen <b>technologie</b>. Het was essentieel om de <b>gemeenschappen</b> die door het
                                        <b> afvalbeheer</b> werden beïnvloed, centraal te stellen. Door samen te werken met
                                        {' '}
                                        <Link
                                            href="https://www.un.org/en/"
                                            isExternal
                                            textDecoration="underline"
                                            color="darkgreen"
                                            fontWeight="bold"
                                            _hover={{ color: "green" }}
                                        >
                                            De Verenigde Naties
                                        </Link>
                                        {' '}
                                        werd ervoor gezorgd dat elke <b>oplossing</b> niet alleen praktisch was, maar ook bijdroeg
                                        aan betere <b>leefomstandigheden</b>.

                                        <br/><br/>

                                        Een <b>belangrijke les</b> die we tijdens dit project hebben geleerd, is dat echte
                                        verandering begint bij <b>betrokkenheid</b> van de <b style={{ color: "darkgreen"}}>gemeenschap</b>. Kleine, tastbare
                                        initiatieven, zoals het belonen van mensen voor het recycleren, kunnen een enorme <b>impact </b>
                                        hebben. Maar ook <b>educatie</b> speelt een cruciale rol. Door bewustwording te creëren,
                                        hebben we niet alleen oplossingen geïntroduceerd, maar ook bijgedragen aan een
                                        <b> cultuur</b> van <b style={{ color: "darkgreen"}}>duurzaamheid</b>.
                                    </Text>
                                </SkeletonText>

                                {/* Divider Image */}

                                <Skeleton fadeDuration={4} isLoaded={isLoaded} style={{ borderRadius: "5px"}}>
                                    <Image
                                        src={tiaSubImage}
                                        alt="Section Divider"
                                        mx="auto"
                                        my="12"
                                        borderRadius="10px"
                                    />
                                </Skeleton>

                                {/* Continue Text */}
                                <SkeletonText fadeDuration={4} isLoaded={isLoaded} noOfLines={10} skeletonHeight='7'>
                                    <Text
                                        mx="auto"
                                        color="#00044F"
                                        _dark={{color: 'gray.400'}}
                                        fontSize={{base: 'lg', lg: 'xl'}}
                                        mt="6"
                                        lineHeight="1.8"
                                    >
                                        Dit <b>project</b> is meer dan een technische uitdaging geweest; het heeft een beweging in
                                        gang gezet die <b style={{ color: "darkgreen"}}>Zuid-Afrika</b> helpt om een duurzame toekomst te bouwen. Het <b>onderzoek</b>,
                                        dat de basis vormt van de voorgestelde <b>oplossingen</b>, is volledig gedocumenteerd en
                                        <b> beschikbaar</b> als paper op de website van
                                        {' '}
                                        <Link
                                            href="https://www.belgiumcampus.ac.za/"
                                            isExternal
                                            textDecoration="underline"
                                            color="darkgreen"
                                            fontWeight="bold"
                                            _hover={{ color: "green" }}
                                        >
                                            Belgium Campus University
                                        </Link>
                                        .
                                        <br/><br/>

                                        We zijn <b>trots</b> op wat we samen met onze <b>partners</b> hebben bereikt.
                                        Dit project onderstreept onze toewijding aan <b style={{ color: "darkgreen"}}>duurzame innovatie</b>. Voor <b style={{ color: "darkgreen"}}>groene</b> projecten zoals
                                        deze gebruiken we zelfs een <b>speciale huisstijl</b> om onze waardering en focus op
                                        <b style={{ color: "darkgreen"}}> duurzaamheid</b> extra kracht bij te zetten.

                                        <br/><br/>

                                        <b style={{ color: "darkgreen"}}>Zuid-Afrika</b> heeft aangetoond dat <b>groei</b> en
                                        <b> duurzaamheid</b> hand in hand kunnen gaan, en we zijn dankbaar dat we aan deze reis
                                        mochten <b>bijdragen</b>. 🌳
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

export default TechnologyInnovationAgency;
