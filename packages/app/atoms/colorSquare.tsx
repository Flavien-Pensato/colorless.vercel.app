import React from 'react'
import { Box } from '@chakra-ui/react'
import { HEX } from 'colorless-core/src/colorless'

export interface ColorSquareProps {
  color: HEX
  size?: string
}

export const ColorSquare = ({ color, size = '42px' }: ColorSquareProps) => {
  return <Box borderRadius='md' height={size} width={size} bg={color} />
}
