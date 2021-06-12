import React from 'react'
import Head from 'next/head'
import ReactGA from 'react-ga'
import { LandingTemplate } from '../templates'

export default function Home() {
  ReactGA.pageview('/')

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
