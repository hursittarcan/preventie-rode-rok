import {Container, SimpleGrid, VStack,} from '@chakra-ui/react'
import {ShowcaseItem} from "./ShowcaseItem.tsx";
import fadeBarbershopImage from '../../public/cases/fade-barbershop.jpg'
import cocoNoirFashionImage from '../../public/cases/coconoirfashion.jpg'
import douaImage from '../../public/cases/doua.jpg'
import essoMoonenImage from '../../public/cases/bready.jpg'

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
    }
]

const HomeShowcaseSection = () => {
    return (
        <Container py={{ base: '3rem', md: '7.5rem'}} maxW='1280px' as='section' mb={12}>
            <VStack w='full' spacing='7.5rem'>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w='full'>
                    {websites.map(({ name, image, url }) => (
                        <ShowcaseItem key={url} name={name} image={image} url={url} />
                    ))}
                </SimpleGrid>
            </VStack>
        </Container>
    )
}

export default HomeShowcaseSection
