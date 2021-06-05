import React from 'react'
import { Flex, Box, VStack, Text } from '@chakra-ui/react'
import { HEX } from '@colorless/core/src/colorless'
import { ColorSquare } from '../atoms'

export interface ColorTagProps {
  color: HEX
  label: string
}

export const ColorTag = ({ label, color }: ColorTagProps) => {
  return (
    <Flex>
      <ColorSquare color={color} />
      <VStack spacing='0' ml='2' alignItems='self-start'>
        <Box>
          <Text as='span' fontWeight='bold'>
            {label}
          </Text>
        </Box>
        <Box>
          <Text as='span'>{color}</Text>
        </Box>
      </VStack>
    </Flex>
  )
}
