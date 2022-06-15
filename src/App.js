import React from 'react'
import Header from './component/header/header';
import Nav from './component/nav/Nav';
import About from './component/about/about';
import Experience from './component/experience/experience';
import Services from './component/services/services';
import Project from './component/project/project';
import Testimonials from './component/testimonials/testimonials';
import Contact from './component/contact/Contact'
import Footer from './component/footer/footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Project/>
      {/* <Testimonials /> */}
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

