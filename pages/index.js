import React, { useEffect } from 'react';
import Header from '../components/Header'

// import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ease = [0.43, 0.13, 0.23, 0.96]

const variants = {
  initial: { autoAlpha: 0 },
  animate: { autoAlpha: 1 },
  exit:    { autoAlpha: 0 },
}


export default function Home() {

  // JAVASCRIPT-SNIPPET
  useEffect(() => {
    const tags = document.querySelectorAll("h2, p, h5, .intro, .arrow, .text, .copy, .glass img")
    const enterTag = document.querySelector("div")
    
    tags.forEach(tag => tag.style.opacity = 0)
    tags.forEach(tag => tag.style.transform = "translateY(20px)")
    
    const fadeIn = function () {
      let delay = 0.15
      
      tags.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top
        const tagBottom = tag.getBoundingClientRect().bottom
    
        if (tagTop < window.innerHeight && tagBottom > 0) {
          tag.style.animation = `fadein .8s ${delay}s both`
          delay = delay + 0.15
        } else {
          tag.style.animation = `fadeout .6s ${delay}s both`
          tag.style.opacity = 0
          tag.style.transform = "translateY(50px)"
        }
      })
    }
    
    fadeIn()
    
    document.addEventListener("scroll", function () {
      fadeIn()
    })

  })


// HEADER
useEffect(() => {

  ScrollTrigger.config({ limitCallbacks: true });

  const parallaxTl = gsap.timeline({
    ease: 'none',
    scrollTrigger: {
      trigger: 'header',
      // elem / viewport
      start: "top top",
      end: "center +=200",
      scrub: true,
      pin: false,
      pinSpacing: false,
      markers: false,
      // events: onEnter onLEave onEnterBack onLeaveBack
      // options: play, pause, resume, reset, restart, complete, reverse, none
      toggleActions: "restart complete none reverse"
    }
  });

  parallaxTl
    .to('.portrait', {duration: 1, autoAlpha: 0, y: '+=120vh'})
    .to('h1', {duration: .25, autoAlpha: 0, y:"-=20"}, 0);
}, [])


// HELPERS
/*     useEffect(() => {
/*    // SNAP to section
    gsap.utils.toArray(".view").forEach((view, i) => {
      ScrollTrigger.create({
        trigger: view,
        start: "top top", 
        pin: true, 
      });
    });
    ScrollTrigger.refresh(true);
    
    ScrollTrigger.create({
      snap: 1 / 4 // snap whole page to the closest section!
}); */

/*
// ELEM animations
    var headlines = gsap.utils.toArray("h2, h3, h5, .arrow, .copy");
    headlines.forEach((elem, i) => {
  
    const tl = gsap.timeline({ 
     scrollTrigger: {
       trigger: elem,
       // elem / viewport
       start: "top 100%",
       end: "top 10%",
       onScrubComplete: true,
       // events: onEnter onLeave onEnterBack onLeaveBack
       // options: play, pause, resume, reset, restart, complete, reverse, none
       toggleActions: "restart reverse restart reverse"
     }
  });

   tl.from(elem, { autoAlpha: 0, y: 30 })
     .to(elem, { autoAlpha: 1, y: 0, duration: 0.4 })
     .to(".arrow", { delay: .5 })
     .to(".copy", { delay: .5 });
    });

    ScrollTrigger.refresh(true);

  }, []) */

// CURSOR
useEffect(() => {
  gsap.set('.follower', {xPercent:-50,yPercent:-50});
  gsap.set('.cursor', {xPercent:-50,yPercent:-50});

  var follow = document.querySelector('.follower');
  var cur = document.querySelector('.cursor');

  window.addEventListener('mousemove', e => {
      gsap.to(cur, 0.2,{ x:e.clientX,y:e.clientY });
      gsap.to(follow, 1,{ x:e.clientX,y:e.clientY });
  })
})


  return (
    <div className="flex">
    <Head>
      <title>aeonyuonmiller</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Description goes here" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head> 

    <div className="cursor"></div>
    <div className="follower"></div>


    <div variants={{variants}} className="hero">

      <motion.h1 
        initial={{ y: '-19vh', opacity: 0 }}
        animate={{ y: ['-17vh', '-20vh'], opacity: 1 }} 
        exit={{ opacity: 0 }}
        transition={{ duration: .85, delay: .5 }}
        // variants={variants}
        className="align-left align-y-bottom">
        <span>aeonyuonmiller</span> is a multidisciplinary digital designer
      </motion.h1>

      <motion.img
        // variants={{variants}} 
        initial={{ y: '4vh', scale: 1, opacity: 0, bottom: '-50px' }}
        animate={{ y: '1.5vh', x: ['5vw' ,'0vw'], scale: 1, opacity: 1, transition: { easing: ease.Power3, duration: 1, delay: 0 } }} 
        src="/me2.png" className="portrait" />

      {/* intro */}
      <motion.section
        initial={{ y: '0vh' }}
        animate={{ y: 'calc(-20vh + 1px)', skewY: ['0deg', '-3deg', '0deg'], transition: { duration: 1, delay: .1 }  }}
        transition={{ duration: 2, delay: 0.01 }} 
        className="parent glass">
          <Image src="/clients.gif" width="100" height="50" alt="Worked for Lufthansa, Jaguar, Suzuki, Land Rover" />
          <h5 className="grey"><span>Worked with</span></h5>
      </motion.section>
    </div>

   {/* <Header title='okey' text='papapapa ap pap pa pas' /> */}

  <div className="container">

        {/* view project */}
        <Link href="/insert-name-here" scroll={false}><a>
      <motion.div 
        className="view inh-hero" 
        id="insert-name-here"
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
      >
      <span className="align-left align-y-bottom">
      <h5 className="reveal">Motion</h5>
      <h2 className="reveal">Insert Name Here</h2>
      </span>

      <div className="align-x-right align-y-bottom arrow">
        <motion.img animate={{ opacity: 1 }} exit={{ opacity: 0 }} src="/arrow-view.svg" alt="View work" />
      </div>

      <div className="parent centered align-x-center align-y-center view-image">
        <img src="/inh-title.gif" alt="View project Insert Name Here" />
      </div>
    </motion.div>
    </a></Link>



    {/* view project */}
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

        <motion.div className="parent centered align-x-center align-y-center image-full">
          <img src="/audiowave-on-the-run.gif" alt="View work" />
        </motion.div>
    </motion.div>
    </a></Link>

  </div>


    <div className="footer">

      <span className="text align-left align-y-bottom">
      <h3>Let's work</h3>
      <a href="#" className="arrow"><img src="/arrow-link.svg" alt="Write e-mail" width="46px" />Mail</a>
      </span>

      <span className="copy align-right align-y-bottom">
      &copy; 2021 All rights reserved.
      <a href="/imprint">Imprint</a> 
      </span>

    </div>  

  </div>
)
}