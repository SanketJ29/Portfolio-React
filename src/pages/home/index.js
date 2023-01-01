import React from 'react'
import { Helmet } from 'react-helmet'
import Contacts from '../../components/container/contacts'
import Landing from '../../components/container/landing'
import Navbar from '../../components/container/navbar'
import Projects from '../../components/container/projects'
import About from '../../components/core-ui/about/about'
import Certificate from '../../components/core-ui/certificate/certificate'
import Education from '../../components/core-ui/education/education'
import Skills from '../../components/core-ui/skills/skills'
import { headerData } from '../../data/headerData'

function HomePage() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>
            <Navbar />
            <Landing />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Certificate />
            <Contacts />
        </div>
    )
}

export default HomePage
