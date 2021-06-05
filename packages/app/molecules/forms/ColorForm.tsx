import React from 'react'
import { isValideHex } from '@colorless/core/src/colorless'
import { FormControl, FormLabel, FormHelperText, Input } from '@chakra-ui/react'

export interface ColorFormProps {
  onSubmit: Function
}

export const ColorForm = ({ onSubmit }: ColorFormProps) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault()

      const color = event.target?.value

      console.log(isValideHex(color))
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
        Enter your favorite color to create a palette.
      </FormHelperText>
    </FormControl>
  )
}
