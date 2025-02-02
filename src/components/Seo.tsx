import {Box, ChakraProvider} from '@chakra-ui/react';
import Header from "./Header.tsx";
import {customChakraTheme} from "../styles/CustomChakraTheme.tsx";
import FormSection from "./FormSection.tsx";
import {Hero} from "./Hero.tsx";
import {Services} from "./Services.tsx";
import {Projects} from "./Projects.tsx";
import {Footer} from "./Footer.tsx";
import {Copyright} from "./Copyright.tsx";


function Seo() {

    return (
        <ChakraProvider theme={customChakraTheme}>
            <>
                <Header style={{ boxShadow: "var(--chakra-shadows-sm)", zIndex: "9999999999" }} />

                <Hero />

                <Services />

                <Projects />

                <FormSection/>

                <Footer/>

                <Box display={{ base: 'none', md: 'block' }}>
                    <Copyright />
                </Box>
            </>
        </ChakraProvider>
    );
}

export default Seo;
