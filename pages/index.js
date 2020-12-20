import React, { useEffect } from 'react'
// import React, { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/Nav'
import { motion } from "framer-motion";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ease = [0.43, 0.13, 0.23, 0.96]

const variants = {
  initial: { autoAlpha: 0 },
  animate: { autoAlpha: 1 },
  exit:    { autoAlpha: 0 },
}


export default function Home() {

// header
  useEffect(() => {

  ScrollTrigger.refresh();

  const parallaxTl = gsap.timeline({
    ease: 'none',
    scrollTrigger: {
      trigger: 'header',
      start: "top top",
      end: "center +=200",
      scrub: true,
      markers: false,
      // events: onEnter onLEave onEnterBack onLeaveBack
      // options: play, pause, resume, reset, restart, complete, reverse, none
      toggleActions: "restart complete none reverse"
    }
  });

  parallaxTl
    .to('.portrait', {duration: 1, autoAlpha: 0, y: '+=120vh'})
    .to('h1', {duration: .8, autoAlpha: 0, y:"+=5"}, 0);
}, [])


// helpers h2, h3, h5, .arrow
   useEffect(() => {

    ScrollTrigger.refresh();
    var headlines = gsap.utils.toArray("h2, h3, h5, .arrow");
    headlines.forEach((elem, i) => {
  
    const tl = gsap.timeline( { 

     scrollTrigger: {
       trigger: elem,
       /* start: "+=60 40%",
       end: "+=200 20%", */
       start: "top center",
       end: "bottom 10%+=10px",
       scrub: true,
       markers: false,
       clearProps: 'all',
       toggleActions: "play reverse play reverse"
     }
  });

   tl
     .to(elem, { autoAlpha: 1, y: 0, duration: 0.4 })
     .to(elem, { autoAlpha: 0, y: -20, duration: 0.2 }, 0.2 );
    });
  })


  // view-image
   useEffect(() => {

    ScrollTrigger.refresh();
    var viewz = gsap.utils.toArray(".view-image");

      viewz.forEach((elem, i) => {
        const viewzTl = gsap.timeline( { 
          scrollTrigger: {
            trigger: elem,
            start: "top 90%",
            end: "top 20%",
            scrub: true,
            markers: false,
            clearProps: 'all',
            toggleActions: "play reverse play reverse"
          }  
      });

   viewzTl
     .to(elem, { y: 0 })
     .to(elem, { y: -50 });
    });
  })


  return (
    <div className="flex">
    <Head>
      <title>aeonyuonmiller</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Description goes here" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head> 

    <div variants={{variants}} className="hero">

      <motion.h1 
        initial={{ y: '20vh', opacity: 0 }}
        animate={{ y: ['0vh', '-20vh'], opacity: 1 }} 
        exit={{ opacity: 0 }}
        transition={{ duration: 1, }}
        // variants={variants}
        className="align-left align-y-bottom">
        <span>aeonyuonmiller</span> is a multidisciplinary digital designer
      </motion.h1>

      <motion.img
        variants={{variants}} 
        initial={{ y: '2vh', scale: .97,opacity: 0 }}
        animate={{ y: '1.5vh', scale: 1, opacity: 1, transition: { easing: ease, duration: .4, delay: .3 } }} 
        transition={{ duration: 1, }}
        src="/me2.png" className="portrait" />

      {/* intro */}
      <motion.section
        initial={{ y: '0vh', scaleY: .5 }}
        animate={{ y: '-20vh', scaleY: 1 }} 
        transition={{ duration: .9, delay: 0 }} 
        className="parent glass">
          <h5 className="black">Building experiences for e-commerce and websites</h5>

          <h5 className="grey"><span>Clients</span></h5>
          <Image width={300} height={300} src="/cmd1_6.gif" alt="Worked for Lufthansa, Jaguar, Suzuki, Range Rover" />

      </motion.section>
    </div>

    <Nav></Nav>

  <div className="container">

        {/* card */}
        <Link href="/insert-name-here" scroll={false}><a>
      <motion.div 
        className="view inh-hero" 
        id="insert-name-here"
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
      >
      <span className="align-left align-y-bottom">
      <h5 className="">Motion</h5>
      <h2 className="">Insert Name Here</h2>
      </span>

      <div className="align-x-right align-y-bottom arrow">
        <motion.img animate={{ opacity: 1 }} exit={{ opacity: 0 }} src="/arrow-view.svg" alt="View work" />
      </div>

      <div className="parent centered align-x-center align-y-center view-image">
        <img src="/inh.png" alt="View work" />
      </div>
    </motion.div>
    </a></Link>



    {/* card */}
    <Link href="/rhythm" scroll={false}>
      <a>
      <motion.div 
        className="view rhym-hero" 
        id="rhythm"
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
      >
        <span className="align-left align-y-bottom">
        <h5 className="">Software</h5>
        <h2 className="">Rhythm</h2>
        </span>

        <div className="align-x-right align-y-bottom arrow">
          <motion.img initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0, y:'3em', x:'3em', transition: {duration: .5} }} src="/arrow-view.svg" alt="View work" />
        </div>

        <motion.div className="parent centered align-x-center align-y-center view-image">
          <motion.img src="/beat-mode.png" alt="View work" />
        </motion.div>
    </motion.div>
    </a></Link>

  </div>





    <div className="footer">

      <motion.span exit={{opacity:0}} className="text align-left align-y-bottom">
        <motion.h3
          exit={{opacity:0}}
        >Let's work</motion.h3>
        <a href="#" className="arrow">
          <motion.img exit={{opacity:0}} src="/arrow-link.svg" alt="Write e-mail" width="46px" />Mail</a>
      </motion.span>

      <motion.span exit={{opacity:0}} className="copy align-right align-y-bottom">
        &copy; 2020 all rights reserved
        <Link href="/imprint" scroll={false}>
        <a>Imprint</a> 
        </Link>
      </motion.span>

    </div>
  

  </div>
)
}