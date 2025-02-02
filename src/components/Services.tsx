import {Box, chakra, Container, Flex, Grid, Heading, Icon, Text, useBreakpointValue} from "@chakra-ui/react";
import {AiFillBulb, AiFillThunderbolt} from "react-icons/ai";
import {SiBmcsoftware} from "react-icons/si";
import {GrMoney} from "react-icons/gr";
import {MdAdsClick} from "react-icons/md";
import {FiSmartphone} from "react-icons/fi";
import {RiServerFill} from "react-icons/ri";
import {BiBook} from "react-icons/bi";
import {IconType} from "react-icons";
import {ReactNode} from "react";

const Feature = ({
                     title,
                     icon,
                     children,
                     ...props
                 }: {
    title: string;
    icon: IconType;
    children: ReactNode;
    // @ts-ignore
    [key: string]: any;
}) => {
    return (
        <Box
            rounded='md'
            p='6'
            textAlign='left'
            bg='transparent'
            _dark={{ bg: 'transparent' }}
            {...props}
        >
            <Flex alignItems="center" mb='4'>
                <Flex
                    style={{ borderRadius: "7px"}}
                    width="50px"
                    height="50px"
                    minWidth="50px"
                    minHeight="50px"
                    bg='#00044F'
                    _dark={{ bg: 'white' }}
                    align='center'
                    justify='center'
                    mr='3'
                >
                    <Icon fontSize="25px" color='white' as={icon} />
                </Flex>
                <div style={{ paddingLeft: "5px"}}>
                    <Heading as='h3' size='md' fontWeight='bold'
                             style={{marginBottom: "8px", color: "#00044F"}}>
                        {title}
                        <span style={{color: "#801AFB"}}>.</span>
                    </Heading>
                    <Text fontSize='md' style={{ color: "#00044F", fontSize: "18px"}}>
                        {children}
                    </Text>
                </div>

            </Flex>
        </Box>
    );
};

export const Services = () => {

    const isDesktop = useBreakpointValue({ base: false, md: true });

    return (
        <Box as='section' bg='gray.50' _dark={{ bg: 'gray.900' }} pb={{ base: '0', md: '2rem' }}>
            <Container py='120px' maxW='1280px'>
                <Box maxW='760px' mx='auto' textAlign='center' mb='56px'>
                    <chakra.h1
                        style={{color: "#00044F"}}
                        maxW='20ch'
                        mx='auto'
                        fontSize={{base: '2.5rem', sm: '3rem', lg: '4rem'}}
                        fontFamily='heading'
                        letterSpacing='tighter'
                        fontWeight='extrabold'
                        mb='16px'
                        lineHeight='1.2'>
                        Op zoek naar <span style={{color: "#801AFB"}}>maatwerk</span> voor jouw project?
                    </chakra.h1>
                    <Text
                        mx='auto'
                        color='gray.500'
                        _dark={{ color: 'gray.400' }}
                        fontSize={{ base: 'lg', lg: 'xl' }}
                        mt='6'
                    >
                        Ontdek onze services en zie hoe wij jouw ideeën tot leven kunnen brengen.
                    </Text>
                </Box>
                <Grid
                    templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
                    gap={3}
                    px={{ md: 6 }}
                >

                    <Feature icon={AiFillThunderbolt} title='Design'>
                        <span style={{color: "#801AFB", fontWeight: "bold"}}>Professioneel webdesign</span> dat perfect aansluit op uw merkidentiteit.
                    </Feature>

                    <Feature icon={SiBmcsoftware} title='Software'>
                                <span style={{color: "#801AFB", fontWeight: "bold"}}>Softwareoplossingen</span> die uw bedrijfsprocessen optimaliseren.
                    </Feature>

                    { isDesktop &&
                        (<Feature icon={GrMoney} title='E-commerce'>
                            Bereik klanten wereldwijd met een naadloos <span style={{color: "#801AFB", fontWeight: "bold"}}>geïntegreerde webshop</span>.
                        </Feature>)
                    }

                    <Feature icon={MdAdsClick} title='Marketing'>
                        <span style={{color: "#801AFB", fontWeight: "bold"}}>Google SEO strategieën</span> om uw bedrijf zichtbaar te maken op het net.
                    </Feature>

                    <Feature icon={FiSmartphone} title='Mobiele Applicaties'>
                        <span style={{color: "#801AFB", fontWeight: "bold"}}>Applicaties op maat </span>voor het vereenvoudigen van uw bedrijfsprocessen.
                    </Feature>

                    { isDesktop &&
                        (<Feature icon={AiFillBulb} title='Technisch Advies'>
                            <span style={{color: "#801AFB", fontWeight: "bold"}}>Deskundig advies </span>voor uw hardware-, software- en marketingbehoeften.
                        </Feature>)
                    }

                    { isDesktop &&
                        (<Feature icon={RiServerFill} title='Hosting'>
                            <span style={{color: "#801AFB", fontWeight: "bold"}}>Betrouwbare hosting </span>met ondersteuning wanneer je het nodig hebt.
                        </Feature>)
                    }

                    { isDesktop &&
                        (<Feature icon={BiBook} title='Training'>
                            <span style={{color: "#801AFB", fontWeight: "bold"}}>Praktische trainingen </span>om uw team te ondersteunen bij het gebruik van nieuwe software.
                        </Feature>)
                    }
                </Grid>
            </Container>
        </Box>
    )
}

