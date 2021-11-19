import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Bruno Ferreira</Text>
                    <Text color="gray.300" fontSize="small">
                        brunolfsports@hotmail.com
                    </Text>
                </Box>
            )}
            <Avatar size="md" name="Bruno Ferreira" src="https://github.com/Bruno-Goudric.png" />
        </Flex>
    )
}