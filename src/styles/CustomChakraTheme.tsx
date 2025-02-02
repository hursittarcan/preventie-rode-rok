import {extendTheme} from "@chakra-ui/react";

export const customChakraTheme = extendTheme({
    components: {
        Tabs: {
            baseStyle: {
                tab: {
                    _selected: {
                        color: '#3902BF',
                        borderColor: '#3902BF',
                    },
                },
            },
        },
        PinInputField: {
            baseStyle: {
                field: {
                    color: '#00044F',
                    borderColor: '#00044F',
                }
            },
        },
        Checkbox: {
            baseStyle: {
                control: {
                    _checked: {
                        bg: '#801AFB',
                        borderColor: '#801AFB',
                        color: 'white', // Ensures checkmark contrast
                    },
                    _hover: {
                        borderColor: '#801AFB',
                    },
                },
            },
        },
    },
});