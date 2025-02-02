import {Box, BoxProps, Icon} from '@chakra-ui/react'
import {FaGlobe} from 'react-icons/fa'

export const SponsorButton = ({ onClick, ...props }: BoxProps & { onClick?: () => void }) => {
    return (
        <Box display={{ base: 'none', lg: 'flex' }} alignItems='center' as='button' onClick={onClick} borderWidth='1px' borderColor='gray.200' px='1em' minH='36px' borderRadius='md' fontSize='sm' color='gray.800' outline='0' transition='all 0.3s' _hover={{ bg: 'gray.100', borderColor: 'gray.300' }} _active={{ borderColor: 'gray.200' }} _focus={{ borderColor: "#3902BF" }} {...props}>
            <Icon
                as={FaGlobe}
                w='4'
                h='4'
                color='#00044F'
                mr='2'
            />
            <Box as='strong' lineHeight='inherit' fontWeight='semibold' color='#00044F'>
                Portaal
            </Box>
        </Box>
    )
}