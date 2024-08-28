import React from 'react'

import Hero from './Hero'
import Aboutus from './Aboutus'
import Counters from './Counters'
import Services from './Services'
import Contact from './Contact'

const Home = () => {
    return (
        <main>
            <Hero />
            <Aboutus />
            <Counters />
            <Services />
            <Contact />  
        </main>
    )
}

export default Home