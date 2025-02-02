import {Box, Container, Flex, SimpleGrid, Text, VStack,} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import WhatsAppButton from "./WhatsappButton.tsx";

const MultiStepForm = () => {

    const navigate = useNavigate();

    const handleProjectHelpClick = () => {
        navigate("/contact/project");
    };

    return (
        <Container maxW="3xl" py={10}>
            <VStack align="stretch" spacing={5}>
                <SimpleGrid columns={1} spacing={4}>
                    <Box
                        bg="white"
                        p={4}
                        borderRadius="md"
                        boxShadow="sm"
                        _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
                        cursor="pointer"
                        transition="all 0.2s"
                        onClick={handleProjectHelpClick}
                    >
                        <Flex justify="space-between" align="center" >
                            <Text fontWeight="semibold" color="#00044F">
                                Hulp nodig met mijn project.
                            </Text>
                            <Box as="span" color="#801AFB" fontSize="2xl">
                                🤝
                            </Box>
                        </Flex>
                    </Box>

                    <Box
                        bg="white"
                        p={4}
                        borderRadius="md"
                        boxShadow="sm"
                        _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
                        cursor="pointer"
                        transition="all 0.2s"
                        onClick={() => navigate("/contact/quote")}
                    >
                        <Flex justify="space-between" align="center">
                            <Text fontWeight="semibold" color="#00044F">
                                Ik wil een offerte aanvragen.
                            </Text>
                            <Box as="span" color="#801AFB" fontSize="2xl">
                                📝
                            </Box>
                        </Flex>
                    </Box>

                    <Box
                        bg="white"
                        p={4}
                        borderRadius="md"
                        boxShadow="sm"
                        _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
                        cursor="pointer"
                        transition="all 0.2s"
                        onClick={() => navigate("/contact/question")}
                    >
                        <Flex justify="space-between" align="center">
                            <Text fontWeight="semibold" color="#00044F">
                                Ik heb een algemene vraag.
                            </Text>
                            <Box as="span" color="#00044F" fontSize="xl">
                                🤔
                            </Box>
                        </Flex>
                    </Box>

                    <Box
                        bg="gray.100"
                        p={4}
                        borderRadius="md"
                        boxShadow="sm"
                        cursor="pointer"
                        _hover={{
                            boxShadow: "sm", // Maintain the same shadow to indicate it's disabled
                            transform: "none", // Remove hover transform effect
                            cursor: "not-allowed", // Change cursor to not-allowed
                        }}
                        opacity={0.6}
                        transition="all 0.2s"
                    >
                        <Flex justify="space-between" align="center">
                            <Text fontWeight="semibold" color="#00044F">
                                Ik wil werken bij Codelab.
                            </Text>
                            <Box as="span" color="#801AFB" fontSize="2xl">
                                ⚙️
                            </Box>
                        </Flex>
                    </Box>

                    <Box
                        bg="white"
                        p={4}
                        borderRadius="md"
                        boxShadow="sm"
                        _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
                        cursor="pointer"
                        transition="all 0.2s"
                        onClick={() => navigate("/contact/partners")}
                    >
                        <Flex justify="space-between" align="center">
                            <Text fontWeight="semibold" color="#00044F">
                                Ik wil partner worden.
                            </Text>
                            <Box as="span" color="#801AFB" fontSize="xl">
                                💪
                            </Box>
                        </Flex>
                    </Box>

                    <Box
                        bg="gray.100"
                        p={4}
                        borderRadius="md"
                        boxShadow="sm"
                        cursor="pointer"
                        transition="all 0.2s"
                        _hover={{
                            boxShadow: "sm", // Maintain the same shadow to indicate it's disabled
                            transform: "none", // Remove hover transform effect
                            cursor: "not-allowed", // Change cursor to not-allowed
                        }}
                        opacity={0.6}
                    >
                        <Flex justify="space-between" align="center">
                            <Text fontWeight="semibold" color="#00044F">
                                Veelgestelde vragen.
                            </Text>
                            <Box as="span" color="#801AFB" fontSize="2xl">
                                💭
                            </Box>
                        </Flex>
                    </Box>
                </SimpleGrid>
            </VStack>
            <WhatsAppButton/>
        </Container>
    );
};

export default MultiStepForm;
