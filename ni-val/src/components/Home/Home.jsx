import React from 'react'

import Hero from './Hero'
import Aboutus from './Aboutus'
import Counters from './Counters'
import Services from './Services'
import Contact from './Contact'
import HelmetWrapper from '../HelmetWrapper'

const Home = () => {
    return (
        <main>
            <HelmetWrapper
                title="Ni-Val | Innovative B2B Lead Generation Solutions"
                description="Ni-Val specializes in helping businesses grow through targeted B2B lead generation strategies."
            />
            <Hero />
            <Aboutus />
            <Counters />
            <Services />
            <Contact />
        </main>
    )
}

export default Home