import { Box, Icon } from '@chakra-ui/react';
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
    return (
        <Box
            as="a"
            href="https://wa.me/32456690910"
            target="_blank"
            position="fixed"
            bottom="20px"
            right="20px"
            fontSize="40px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="60px"
            height="60px"
            bg="#25d366"
            color="white"
            borderRadius="50%"
            zIndex="9999"
            textDecoration="none"
            boxShadow="0 0 0 0 rgba(37, 211, 102, 0.5)"
            animation="pulse 1.5s ease-out infinite"
            _before={{
                content: '""',
                position: 'absolute',
                borderRadius: '50%',
                padding: '25px',
                border: '5px solid #25d366',
                opacity: 0.75,
                animation: 'pulse-border 1.5s ease-out infinite',
            }}
            _hover={{ bg: "#22bb5b" }}
            css={{
                "@keyframes pulse": {
                    "0%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.5)" },
                    "80%": { boxShadow: "0 0 0 14px rgba(37, 211, 102, 0)" },
                },
                "@keyframes pulse-border": {
                    "0%": { padding: "25px", opacity: 0.75 },
                    "75%": { padding: "50px", opacity: 0 },
                    "100%": { opacity: 0 },
                },
            }}
        >
            <Icon as={FaWhatsapp} boxSize="32px" />
        </Box>
    );
}

export default WhatsAppButton;
