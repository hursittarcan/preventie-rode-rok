import {
    AspectRatio,
    Button,
    HStack,
    Image,
    LinkBox,
    LinkOverlay,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    PinInput,
    PinInputField,
    Text,
    useDisclosure,
    VStack
} from '@chakra-ui/react';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import React from "react";

export const ShowcaseItem = ({
                                 name,
                                 image,
                                 url,
                                 disabled = false,
                                 pincode
                             }: {
    name: string;
    image: string;
    url: string;
    disabled?: boolean;
    pincode?: string;
}) => {
    const isExternal = /^(https?:|www\.)/.test(url);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [enteredPincode, setEnteredPincode] = React.useState('');
    const [error, setError] = React.useState('');
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent) => {
        if (disabled) {
            e.preventDefault();
            onOpen();
        }
    };

    const handlePincodeSubmit = () => {
        if (enteredPincode === pincode) {
            navigate(url); // Navigate to the correct URL
            onClose(); // Close the modal after successful pincode entry
        } else {
            setError('Onjuiste pincode. Probeer opnieuw.');
        }
    };

    return (
        <>
            <VStack alignItems='flex-start' spacing={3}>
                <LinkBox
                    w='full'
                    borderWidth='1px'
                    transform='auto'
                    _dark={{ bg: 'whiteAlpha.50' }}
                    _hover={{ boxShadow: 'md', translateY: '-2px' }}
                    rounded='md'
                    overflow='hidden'
                    transition='all 0.1s ease-out'
                    opacity={disabled ? 0.5 : 1}
                    cursor={disabled ? 'not-allowed' : 'pointer'}
                >
                    <AspectRatio ratio={16 / 9} w='full'>
                        <Image
                            alt={name}
                            fit='cover'
                            src={
                                image && /^(https?|\/)/.test(image)
                                    ? image
                                    : '/og-image.png'
                            }
                        />
                    </AspectRatio>
                    {isExternal ? (
                        <LinkOverlay href={url} isExternal onClick={handleClick}>
                            <Text
                                px={4}
                                py={3}
                                fontWeight="semibold"
                                textAlign="start"
                                fontSize={{ base: 'sm', md: 'md' }}
                            >
                                {name}
                            </Text>
                        </LinkOverlay>
                    ) : (
                        <LinkOverlay as={RouterLink} to={url} onClick={handleClick}>
                            <Text
                                px={4}
                                py={3}
                                fontWeight="semibold"
                                textAlign="start"
                                fontSize={{ base: 'sm', md: 'md' }}
                            >
                                {name}
                            </Text>
                        </LinkOverlay>
                    )}
                </LinkBox>
            </VStack>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent mx="4">
                    <ModalHeader color="#00044F">
                        <b>Onder klantreview</b>
                        <span style={{color: "#801AFB"}}>.</span>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text mb={4} color="#00044F">
                            Dit <b>klantverhaal</b> is momenteel <b>niet publiek beschikbaar</b>.
                        </Text>
                        <Text mb={2}>Gelieve de <b>pin</b> in te geven om verder te gaan:</Text>
                        <HStack justifyContent="center" mt={5}>
                            <PinInput
                                onChange={setEnteredPincode}
                                value={enteredPincode}
                            >
                                <PinInputField _focus={{ borderColor: '#801AFB', boxShadow: '0 0 0 1px #00044F' }} />
                                <PinInputField _focus={{ borderColor: '#801AFB', boxShadow: '0 0 0 1px #00044F' }} />
                                <PinInputField _focus={{ borderColor: '#801AFB', boxShadow: '0 0 0 1px #00044F' }} />
                                <PinInputField _focus={{ borderColor: '#801AFB', boxShadow: '0 0 0 1px #00044F' }} />
                            </PinInput>
                        </HStack>
                        {error && <Text color="red.500" mt={3}>{error}</Text>}
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{ background: "#00044F", color: "white" }} onClick={handlePincodeSubmit} mr={3}>
                            Bevestigen
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Annuleren
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
