import {
    chakra,
    Flex,
    HStack,
    HTMLChakraProps,
    IconButton,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useDisclosure,
    useUpdateEffect
} from '@chakra-ui/react'
import {useScroll} from 'framer-motion'
import {useEffect, useRef, useState} from 'react'
import i18n from "i18next";
import {Flag, flags} from "../utils/LanguageFlagsDirectory.tsx";

function HeaderContent() {
    const mobileNavigation = useDisclosure();
    const [selectedLanguage, setSelectedLanguage] = useState<keyof Flag>('nl');
    const mobileNavigationRef = useRef<HTMLButtonElement>();

    const changeLanguage = (language: keyof Flag) => {
        i18n.changeLanguage(language)
            .then(() => setSelectedLanguage(language));
    };

    useUpdateEffect(() => {
        mobileNavigationRef.current?.focus();
        },
        [mobileNavigation.isOpen]
    )

    return (
        <>
            <Flex w='100%' h='100%' px='6' align='center' justify='space-between'>
                <Flex align='center'>
                    <chakra.a display='block' href="/">
                        <Text style={{ width: "200px"}}
                              fontWeight="bold"
                              fontSize={{ base: '1.5rem', lg: '1.5rem' }}
                        >
                            🏡 <span style={{ color: "darkred"}}>Rode </span>Rok
                        </Text>
                    </chakra.a>
                </Flex>

                <Flex justify='flex-end' w='100%' align='center' color='gray.400' maxW='1100px'>
                    <HStack spacing='5'>
                        <Menu>
                            <MenuButton
                                ml={{ base: '0', md: '3' }}
                                as={IconButton}
                                variant="outline"
                                icon={
                                    <Image
                                        src={flags[selectedLanguage]}
                                        boxSize='20px'
                                    />
                                }
                            />
                            <MenuList minWidth='50px'>
                                {Object.keys(flags).map((lng) => (
                                    <MenuItem key={lng} onClick={() => changeLanguage(lng as keyof Flag)}  style={{ display: "flex", alignItems: "center", justifyContent: "center"}} isDisabled={['de', 'fr', 'en'].includes(lng)} >
                                        <Image
                                            src={flags[lng as keyof Flag]}
                                            alt={`${lng} flag`}
                                            boxSize='20px'
                                        />
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </HStack>
                </Flex>
            </Flex>
        </>
    )
}

function Header(props: HTMLChakraProps<'header'>) {
    const { maxW = '8xl', maxWidth = '8xl' } = props
    const ref = useRef<HTMLHeadingElement>()
    const [y, setY] = useState(0)
    const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}

    const { scrollY } = useScroll()
    useEffect(() => {
        return scrollY.onChange(() => setY(scrollY.get()))
    }, [scrollY])

    return (
        <chakra.header ref={ref} shadow={y > height ? 'sm' : undefined} transition='box-shadow 0.2s, background-color 0.2s' pos='sticky' top='0' zIndex='11' bg='white' left='0' right='0' width='full'{...props}>
            <chakra.div height='4.5rem' mx='auto' maxW={maxW} maxWidth={maxWidth}>
                <HeaderContent />
            </chakra.div>
        </chakra.header>
    )
}

export default Header;
