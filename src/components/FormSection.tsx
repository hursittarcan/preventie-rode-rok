import {
    Box,
    Button,
    chakra,
    Container,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    Textarea,
    useDisclosure,
    VStack,
    Spinner,
} from '@chakra-ui/react';
import { FaCheck } from "react-icons/fa";
import { useState } from 'react';
import Lottie from 'react-lottie';
import successAnimation from './success-animation.json'; // Provide the path to your animation JSON file

const FormSection = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        question: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                onOpen(); // Open the modal
                setFormData({ name: '', email: '', phone: '', question: '' });
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
        <Box as='section' pb={{ base: '0', md: '5rem' }} bg='gray.50'>
            <Container py='120px' maxW='1280px'>
                <Box maxW='760px' mx='auto' textAlign='center' mb='56px' position='relative'>
                    <chakra.h1
                        style={{ color: "#00044F" }}
                        maxW='20ch'
                        mx='auto'
                        fontSize={{ base: '2.25rem', sm: '3rem', lg: '4rem' }}
                        fontFamily='heading'
                        letterSpacing='tighter'
                        fontWeight='extrabold'
                        mb='16px'
                        lineHeight='1.2'
                    >
                        Klaar om de <span style={{ color: "#801AFB" }}>volgende stap</span> te zetten?
                    </chakra.h1>

                    <Text
                        mx='auto'
                        color='gray.500'
                        _dark={{ color: 'gray.400' }}
                        fontSize={{ base: 'lg', lg: 'xl' }}
                        mt='6'
                    >
                        Neem contact met ons op en ontdek wat we voor jouw kunnen betekenen.
                    </Text>

                    <VStack spacing={4} mt={10} as="form" onSubmit={handleSubmit}>
                        <FormControl isRequired>
                            <FormLabel fontWeight="semibold">Naam</FormLabel>
                            <Input
                                name="name"
                                size={{ base: 'md', lg: 'lg' }}
                                placeholder="codelab"
                                value={formData.name}
                                onChange={handleChange}
                                _focus={{ borderColor: '#801AFB', boxShadow: '0 0 0 1px #00044F' }}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel fontWeight="semibold">Email</FormLabel>
                            <Input
                                name="email"
                                size={{ base: 'md', lg: 'lg' }}
                                type="email"
                                placeholder="hello@codelabgroup.com"
                                value={formData.email}
                                onChange={handleChange}
                                _focus={{ borderColor: '#801AFB', boxShadow: '0 0 0 1px #00044F' }}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel fontWeight="semibold">Telefoonnummer</FormLabel>
                            <Input
                                name="phone"
                                size={{ base: 'md', lg: 'lg' }}
                                type="tel"
                                placeholder="+32 456 69 09 10"
                                value={formData.phone}
                                onChange={handleChange}
                                _focus={{ borderColor: '#801AFB', boxShadow: '0 0 0 1px #00044F' }}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel fontWeight="semibold">Vraag</FormLabel>
                            <Textarea
                                name="question"
                                size={{ base: 'md', lg: 'lg' }}
                                placeholder="formuleer hier uw vraag zo duidelijk mogelijk."
                                value={formData.question}
                                onChange={handleChange}
                                _focus={{ borderColor: '#801AFB', boxShadow: '0 0 0 1px #00044F' }}
                            />
                        </FormControl>
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

                    {/* Success Modal */}
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
    );
};

export default FormSection;
