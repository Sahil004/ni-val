import React from 'react'
import Hero from './Hero'
import ServiceBlock from './ServiceBlock'
import { Helmet } from 'react-helmet'

const Service = () => {
  return (
    <main>
      <Helmet>
        <title>Our Services - Ni-Val Technologies</title>
        <meta name="description" content="Explore the range of services offered by Ni-Val Technologies, including lead generation strategies, email marketing campaigns, content marketing, and more." />
        <meta name="keywords" content="services, lead generation, email marketing, content marketing, SEO, PPC" />
        <meta property="og:title" content="Our Services - Ni-Val Technologies" />
        <meta property="og:description" content="Discover how Ni-Val Technologies can help boost your business with tailored services like lead generation, email marketing, and more." />
      </Helmet>
      <Hero />
      <ServiceBlock />
    </main>
  )
}

export default Service