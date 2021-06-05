import { Flex, Box, SimpleGrid } from '@chakra-ui/react'
import { toGrid } from '@colorless/core/src/colorless'
import { useState } from 'react'
import { ColorForm, ColorTag, ColorTagProps } from '../molecules'

export const Palette = (): JSX.Element => {
  const [grid, setGrid] = useState<Array<ColorTagProps>>([])

  const handleSubmit = color => {
    console.log(color)
    if (color !== '') {
      const colorGrid = toGrid(color)

      const newGrid = Object.keys(colorGrid).map(label => ({
        label,
        color: colorGrid[label]
      }))

      setGrid(newGrid)
    } else {
      setGrid([])
    }
  }

  return (
    <Flex justifyContent='center' my='20'>
      <Box maxW='400px' p='30px'>
        <ColorForm onSubmit={handleSubmit} />
      </Box>
      <Box
        maxW='400px'
        transition='width 1s ease'
        width={grid.length === 0 ? '0%' : '100%'}
      >
        <SimpleGrid columns={3} spacing={4}>
          {grid.map(({ color, label }) => (
            <ColorTag key={label} label={label} color={color}></ColorTag>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  )
}
