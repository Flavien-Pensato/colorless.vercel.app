import React from 'react'
import { isValideHex } from 'colorless-core/src/colorless'
import { FormControl, FormLabel, FormHelperText, Input } from '@chakra-ui/react'

export interface ColorFormProps {
  onSubmit: Function
}

export const ColorForm = ({ onSubmit }: ColorFormProps) => {
  // TODO: correct type
  const onKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault()

      const color = event.target?.value

      if (isValideHex(color) || color === '') {
        onSubmit(color)
      }
    }
  }

  return (
    <FormControl id='color'>
      <FormLabel>Color</FormLabel>
      <Input onKeyDown={onKeyDown} />
      <FormHelperText>
        Enter your favorite hexa color to create a palette.
      </FormHelperText>
    </FormControl>
  )
}
