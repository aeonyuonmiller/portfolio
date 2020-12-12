import React, { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from "next/router";
import Link from 'next/link'
import { motion, AnimatePresence, AnimateSharedLayout, useViewportScroll, useTransform } from "framer-motion";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ease = [0.43, 0.13, 0.23, 0.96]

const projectVariant = {
  initial: {
    y: '50%',
    opacity: 0,
    transition: { ease, duration: 0.8, delay: 0.8 },
  },
  animate: {
    y: '0%',
    opacity: 1,
    transition: { ease, duration: 0.8 },
  },
  exit: {
    y: '50%',
    opacity: 0,
    transition: { ease, duration: 0.8, delay: 0.8 },
  },
}
const backVariants = {
  initial: {
    right: -100,
    opacity: 0,
    transition: { ease, duration: 0.8 },
  },
  animate: {
    right: 0,
    opacity: 1,
    transition: { ease, duration: 1, delay: 0.8 },
  },
  exit: {
    right: -100,
    opacity: 0,
    transition: { ease, duration: 0.8 },
  },
}
const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { ease, duration: 1 },
}

export default function Project() {

  useEffect(() => {

    ScrollTrigger.refresh();
  
    const parallaxTl = gsap.timeline({
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero2',
        start: "top top",
        end: "center +=200",
        scrub: true,
        markers: false,
        // events: onEnter onLEave onEnterBack onLeaveBack
        // options: play, pause, resume, reset, restart, complete, reverse, none
        toggleActions: "restart none none reverse"
      }
    });
  
    parallaxTl
      .to('.hero-middle', { autoAlpha: 0.2, y: '+=100' })
      .to('.back', {duration: .2, autoAlpha: 1, y: '-=150' }, 0);
  }, [])

  return (
    <div className="flex scroll" exit={{ opacity: 0, y: '-100%' }}>
      <Head>
        <title>/ project</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500&display=swap" rel="stylesheet"></link>
        <meta name="description" content="Description goes here" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> 


      <div className="hero2 inh-hero" layout>
            
        <Link href="/" scroll={false}><a>
          <motion.img 
          whileHover={{ opacity: 1, scale: 1.05, transition: { duration: .1, delay: 0, },}}
          whileTap={{ opacity: 0, }}
          initial={{ opacity: 0, x: '2em', y: '2em' }}
          animate={{ opacity: 0.8, x: '0em', y: '0em', transition: { duration: .4, delay: .9, }, }}
          exit={{ x: '-10em', y: '-10em', opacity: 0, transition: { duration: .2, } }}
          src="arrow-back.svg" 
          className="back" />
        </a></Link>

        <motion.img
        layout
         initial={{ y: 10, opacity: 0 }}
         animate={{ y: 0, opacity: 1, }}
         exit={{    y: -10, opacity: 0 }}
         transition={{ duration: .6, delay: 0.1 }}
        className="hero-middle" 
        src="/inh.png" 
        alt="hero img" />
            
		    <motion.div 
			      className="parent panel inh"
			      animate={{ y: 'calc(-20vh + 1px)', skewY: ['0deg', '-4deg', '0deg'], transition: { duration: .7, delay: .4 }  }}
			      exit={{ y: '100', skewY: ['0deg', '-4deg', '2deg', '0deg'] }}
          	transition={{ duration: .8, delay: 0 }}>
            <h5>Insert Name Here</h5>
            <p>Highlighting people with different backgrounds who express their vision on culture. We discuss on YouTube about inclusive and empathic spaces.</p>
        </motion.div>

      </div>



      <section className="show inh light">

        <span>
          <h5>Mission</h5>
          <p>Give perspective on club culture from cultural workers.</p>
        </span>

        <img src="transCard.gif" style={{ width: '50%' }} alt="desc" />

        <img src="memo.jpg" alt="desc" className="shadow" />

        <img src="transCard.gif" alt="desc" />

        <span>
          <h5>How</h5>
          <p>We talk about individual experiences to connect insight and emotions with ideas for possible change.​​​​​​​</p>
        </span>

        <img src="beat-mode.png" alt="desc" className="shadow" />

        <img src="memo.jpg" alt="desc" className="shadow" />

        <img src="beat-mode.png" alt="desc" />


      </section>



      <div className="footer">

        <span className="text align-left align-y-bottom">
          <h3>Let's work.</h3>
          <a href="#" className="arrow"><img src="/arrow-link.svg" alt="Write e-mail" width="46px" />Mail</a>
        </span>

        <span className="copy align-right align-y-bottom">
          &copy; 2020 all rights reserved
          <a href="/imprint">Imprint</a> 
        </span>

      </div>
    
    </div>
  )
}
