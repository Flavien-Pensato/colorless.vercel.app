import { useClipboard, Button } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'
import Colorless from '@colorless/core/src/colorless'

export interface ButtonCopyGridProps {
  grid: Colorless
}

export const ButtonCopyGrid = ({ grid }: ButtonCopyGridProps) => {
  const { hasCopied, onCopy } = useClipboard(grid.toString())

  return (
    <Button
      mt='6'
      float='right'
      colorScheme='teal'
      variant='outline'
      disabled={hasCopied}
      onClick={onCopy}
      leftIcon={<CopyIcon />}
    >
      {hasCopied ? 'Copied' : 'Copy'}
    </Button>
  )
}
