import {Box, Container, Divider, Flex, Link, Stack, Text} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export const Copyright = () => {
    const navigate = useNavigate();

    return (
        <>
            <Divider/>
            <Box as='section' pb={{ base: '0', md: '1rem' }}>
                <Container maxW='1280px'>
                    <Box maxW='1500px' mx='auto'>
                        <Flex justify="space-between" align="center" pt="1rem">
                            <Text color="#00044F" fontSize="sm">
                                © 2025 <b>Codelab</b> - Alle rechten voorbehouden.
                            </Text>
                            <Stack direction="row" spacing="4">
                                <Link textDecoration="underline" color="#00044F" fontSize="sm" href="#" _hover={{ textDecoration: "underline" }} onClick={() => navigate("/privacybeleid")}>
                                    Privacybeleid
                                </Link>
                                <Link textDecoration="underline" color="#00044F" fontSize="sm" href="#" _hover={{ textDecoration: "underline" }} onClick={() => navigate("/cookiebeleid")}>
                                    Cookiebeleid
                                </Link>
                                <Link textDecoration="underline" color="#00044F" fontSize="sm" href="#" _hover={{ textDecoration: "underline" }} onClick={() => navigate("/algemenevoorwaarden")}>
                                    Algemene voorwaarden
                                </Link>
                            </Stack>
                        </Flex>
                    </Box>
                </Container>
            </Box>
        </>
    )
}