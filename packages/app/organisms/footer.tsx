import NextLink from 'next/link'
import { Box } from '@chakra-ui/react'

export const Footer = () => (
  <Box as='footer' position='fixed' bottom='0'>
    Creator&nbsp;
    <NextLink href='https://flavien-pensato.vercel.app/'>
      <a target='_blank'>Flavien Pensato</a>
    </NextLink>
  </Box>
)
