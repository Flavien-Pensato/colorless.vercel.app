import React from 'react'
import Head from 'next/head'
import { LandingTemplate } from '../templates'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Colorless</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <LandingTemplate />
    </div>
  )
}
