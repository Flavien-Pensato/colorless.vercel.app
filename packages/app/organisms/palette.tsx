import { Flex, Box, SimpleGrid, ScaleFade } from '@chakra-ui/react'
import Colorless from '@colorless/core/src/colorless'
import { useState } from 'react'
import { ColorForm, ColorTag } from '../molecules'
import { ButtonCopyGrid } from '../molecules/ButtonCopyGrid'

export const Palette = (): JSX.Element => {
  const [showGrid, setShowGrid] = useState(false)
  const [grid, setGrid] = useState<Colorless>()
  const handleSubmit = color => {
    if (color !== '') {
      const colorGrid = new Colorless(color)

      setGrid(colorGrid)
      setShowGrid(true)
    } else {
      setShowGrid(false)
    }
  }

  return (
    <Flex justifyContent='center' my='20'>
      <Box maxW='400px' p='30px' padding='5'>
        <ColorForm onSubmit={handleSubmit} />
      </Box>
      <ScaleFade initialScale={0.9} in={showGrid}>
        <Box maxW='400px'>
          {grid && (
            <>
              <SimpleGrid columns={3} spacing={4}>
                {grid?.toArray().map(({ value, label }) => (
                  <ColorTag key={label} label={label} color={value}></ColorTag>
                ))}
              </SimpleGrid>
              <ButtonCopyGrid grid={grid} />
            </>
          )}
        </Box>
      </ScaleFade>
    </Flex>
  )
}
