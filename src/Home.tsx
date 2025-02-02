import {Box, ChakraProvider} from '@chakra-ui/react';
import Header from "./components/Header.tsx";
import './i18n';
import {customChakraTheme} from "./styles/CustomChakraTheme.tsx";
import FormSection from "./components/FormSection.tsx";
import {Hero} from "./components/Hero.tsx";
import {Services} from "./components/Services.tsx";
import {Projects} from "./components/Projects.tsx";
import {Footer} from "./components/Footer.tsx";
import {Copyright} from "./components/Copyright.tsx";


function Home() {

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

export default Home;
