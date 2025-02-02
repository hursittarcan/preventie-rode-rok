import {Container, SimpleGrid, VStack,} from '@chakra-ui/react'
import {ShowcaseItem} from "./ShowcaseItem.tsx";
import fadeBarbershopImage from '../../public/cases/fade-barbershop.jpg'
import cocoNoirFashionImage from '../../public/cases/coconoirfashion.jpg'
import douaImage from '../../public/cases/doua.jpg'
import essoMoonenImage from '../../public/cases/bready.jpg'
import worstel from '../../public/cases/worstelclub.jpg'
import tia from '../../public/cases/tia.jpg'
import nodejs from '../../public/cases/nodejs.jpg'
import essomoonen from '../../public/cases/essomoonen.jpg'
import houseofhair from '../../public/cases/houseofhair.jpg'
import socleaned from '../../public/cases/socleaned.jpg'
import ethereum from '../../public/cases/ethereum.jpg'
import gamzeyamac from '../../public/cases/bygamze.jpg'
import pxlhealthcare from '../../public/cases/pxlhealthcare.jpg'

const websites = [
    {
        name: "Fade Barbershop.",
        url: "/cases/fadebarbershop",
        image: fadeBarbershopImage
    },
    {
        name: "Coconoir Fashion.",
        url: "/cases/coconoirfashion",
        image: cocoNoirFashionImage
    },
    {
        name: "Doua.",
        url: "/cases/doua",
        image: douaImage
    },
    {
        name: "Bready 2 Go.",
        url: "/cases/bready2go",
        image: essoMoonenImage
    },
    {
        name: "Worstelclub Hasselt.",
        url: "/cases/worstelclubhasselt",
        image: worstel
    },
    {
        name: "Technology Innovation Agency.",
        url: "/cases/tia",
        image: tia,
    },
    {
        name: "Ethereum.",
        url: "/cases/ethereum",
        image: ethereum
    },
    {
        name: "NodeJS.",
        url: "/cases/nodejs",
        image: nodejs
    },
    {
        name: "Esso Moonen.",
        url: "/cases/moonen",
        image: essomoonen
    },
    {
        name: "House Of Hair by Maria.",
        url: "/cases/houseofhair",
        image: houseofhair
    },
    {
        name: "SO Cleaned.",
        url: "/cases/socleaned",
        image: socleaned
    },
    {
        name: "PXL Healthcare.",
        url: "/cases/pxlhealthcare",
        image: pxlhealthcare
    },
    {
        name: "Gamze Yamac. (coming soon)",
        url: "/cases/pxlhealthcare",
        image: gamzeyamac,
        disabled: true
    }
]

const ShowcaseSection = () => {
    return (
        <Container py={{ base: '3rem', md: '7.5rem'}} maxW='1280px' as='section' mb={12}>
            <VStack w='full' spacing='7.5rem'>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w='full'>
                    {websites.map(({ name, image, url, disabled }) => (
                        <ShowcaseItem key={url} name={name} image={image} url={url} disabled={disabled}/>
                    ))}
                </SimpleGrid>
            </VStack>
        </Container>
    )
}

export default ShowcaseSection
