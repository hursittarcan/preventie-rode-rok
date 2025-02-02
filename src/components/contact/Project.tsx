import {
    Box,
    Button,
    chakra,
    ChakraProvider,
    Checkbox,
    CheckboxGroup,
    Container,
    FormControl,
    FormLabel,
    Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner,
    Stack,
    Text,
    Textarea, useDisclosure,
    VStack
} from '@chakra-ui/react';
import Header from "../../components/Header.tsx";
import {customChakraTheme} from "../../styles/CustomChakraTheme.tsx";
import {FaCheck} from "react-icons/fa";
import {Footer} from "../Footer.tsx";
import {Copyright} from "../Copyright.tsx";
import WhatsAppButton from "../WhatsappButton.tsx";
import {useState} from "react";
import successAnimation from "../success-animation.json";
import Lottie from "react-lottie";

function Project() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        question: '',
        contactMethod: []
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (value: any) => {
        setFormData({ ...formData, contactMethod: value });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsLoading(true); // Set loading to true

        try {
            const response = await fetch('https://codelab-mail-server.vercel.app/api/submissions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    contactMethod: JSON.stringify(formData.contactMethod)
                }),
            });

            if (response.ok) {
                onOpen(); // Open the modal
                setFormData({ name: '', email: '', phone: '', question: '', contactMethod: [] });
            } else {
                alert("Error");
                console.error('Submission error');
            }
        } catch (error) {
            alert("Error");
            console.error('Network error:', error);
        } finally {
            setIsLoading(false); // Set loading to false
        }
    };

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: successAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <ChakraProvider theme={customChakraTheme}>
            <>
                <Header style={{ boxShadow: "var(--chakra-shadows-sm)" }} />

                <Box as='section' pb={{ base: '0', md: '5rem' }} background="gray.50">
                    <Container py={{ base: '60px', lg: '120px'}} maxW='1280px'>
                        <Box maxW='760px' mx='auto' textAlign='center' mb='56px' position='relative'>
                            {/* Heading */}
                            <chakra.h1
                                style={{ color: "#00044F" }}
                                maxW='20ch'
                                mx='auto'
                                fontSize={{ base: '2.5rem', sm: '3rem', lg: '4rem' }}
                                fontFamily='heading'
                                letterSpacing='tighter'
                                fontWeight='extrabold'
                                mb='16px'
                                lineHeight='1.2'
                            >
                                <span style={{color: "#801AFB"}}>Hulp</span> nodig met je project?
                            </chakra.h1>

                            <Text
                                mx='auto'
                                color='gray.500'
                                _dark={{ color: 'gray.400' }}
                                fontSize={{ base: 'lg', lg: 'xl' }}
                                mt='6'
                            >
                                Wij nemen binnen de 24 uur contact met je op.
                            </Text>

                            {/* Form */}
                            <VStack spacing={4} mt={10} as="form" onSubmit={handleSubmit}>
                                <FormControl isRequired>
                                    <FormLabel fontWeight="semibold">Naam</FormLabel>
                                    <Input size={{ base: 'md', lg: 'lg'}} placeholder="codelab" _focus={{ borderColor: '#801AFB', boxShadow: '0 0 0 1px #00044F' }} value={formData.name} onChange={handleChange} name="name" />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel fontWeight="semibold">Email</FormLabel>
                                    <Input size={{ base: 'md', lg: 'lg'}} type="email" placeholder="hello@codelabgroup.com" _focus={{ borderColor: '#801AFB', boxShadow: '0 0 0 1px #00044F' }} value={formData.email} onChange={handleChange} name="email" />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel fontWeight="semibold">Telefoonnummer</FormLabel>
                                    <Input size={{ base: 'md', lg: 'lg'}} type="tel" placeholder="+32 456 69 09 10" _focus={{ borderColor: '#801AFB', boxShadow: '0 0 0 1px #00044F' }} value={formData.phone} onChange={handleChange} name="phone" />
                                </FormControl>
                                <FormControl mb={2} isRequired>
                                    <FormLabel fontWeight="semibold">Project omschrijving</FormLabel>
                                    <Textarea size={{ base: 'md', lg: 'lg'}} placeholder="omschrijf uw project zo duidelijk mogelijk" _focus={{ borderColor: '#801AFB', boxShadow: '0 0 0 1px #00044F' }} value={formData.question} onChange={handleChange} name="question" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel fontWeight="semibold">Hoe wil je dat we contact met je opnemen?</FormLabel>
                                    <CheckboxGroup
                                        colorScheme="green"
                                        value={formData.contactMethod}
                                        onChange={handleCheckboxChange}
                                    >
                                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                                            <Checkbox value="Bel mij op.">Bel mij op.</Checkbox>
                                            <Checkbox value="Stuur mij een mail.">Stuur mij een mail.</Checkbox>
                                            <Checkbox value="Stuur mij via WhatsApp.">Stuur mij via WhatsApp.</Checkbox>
                                        </Stack>
                                    </CheckboxGroup>
                                </FormControl>
                                <br/><br/>
                                <Button
                                    h={{ base: '3.5rem', lg: '4rem' }}
                                    px='40px'
                                    minW="150px"
                                    fontSize='1.2rem'
                                    size='lg'
                                    type="submit"
                                    style={{ background: "#00044F", color: "white" }}
                                    // @ts-ignore
                                    rightIcon={!isLoading && <FaCheck fontSize='0.8em' />}
                                    _hover={{ opacity: 0.7 }}
                                    isDisabled={isLoading} // Disable the button when loading
                                >
                                    {isLoading ? (
                                        <Spinner
                                            thickness='4px'
                                            speed='0.65s'
                                            emptyColor='gray.200'
                                            color='#801AFB'
                                            size='md'
                                        />
                                    ) : (
                                        'Verstuur'
                                    )}
                                </Button>
                            </VStack>

                            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                                <ModalOverlay />
                                <ModalContent
                                    mx={{ base: '20px', md: 'auto' }}
                                    p={2}
                                    borderRadius="lg"
                                    w={{ md: '500px' }}
                                    h={{ md: '500px' }}
                                >
                                    <ModalCloseButton />
                                    <ModalHeader>
                                        <Text fontSize="3xl" textAlign="center" color="#00044F" fontWeight="bold">
                                            Bedankt
                                            <span style={{ color: '#801AFB' }}>!</span>
                                        </Text>
                                    </ModalHeader>
                                    <ModalBody>
                                        <Box textAlign="center">
                                            <Lottie options={defaultOptions} height={300} width={300}/>
                                            <Text mt={4} fontWeight="semibold" color="#00044F">
                                                We hebben je vraag goed ontvangen
                                                <span style={{color: '#801AFB'}}>.</span>
                                            </Text>
                                        </Box>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                        </Box>
                    </Container>
                </Box>
                <Footer />
                <Box display={{ base: 'none', md: 'block' }}>
                    <Copyright />
                </Box>
                <WhatsAppButton/>
            </>
        </ChakraProvider>
    );
}

export default Project;
