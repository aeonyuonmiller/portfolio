import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from "next/router";
import Link from 'next/link';
import { motion, AnimatePresence, AnimateSharedLayout, useViewportScroll, useTransform } from "framer-motion";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import dynamic from "next/dynamic";

const Scroll = dynamic(
  () => {
    return import("../components/Scroll");
  },
  { ssr: false }
);

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

export default function INH() {

// make gsap work smooth
const handleScroll = () => {}
useEffect(() => {
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
});


// Resize Hook
function useWindowSize() {

const [windowSize, setWindowSize] = useState({
  width: undefined,
  height: undefined,
});

useEffect(() => {
  // only execute all the code below in client side
  if (typeof window !== 'undefined') {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  
    // Add event listener
    window.addEventListener("resize", handleResize);
   
    // Call handler right away so state gets updated with initial window size
    handleResize();
  
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }
}, []); // Empty array ensures effect is only run on mount
return windowSize;
}


// JAVASCRIPT-SNIPPET
  useEffect(() => {
    const tags = document.querySelectorAll("h2, p, h5, .intro, img, .text, .arrow, .copy")
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
          tag.style.animation = `fadeout .3s ${delay}s both`
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


  /*  WORKING JS  */

  useEffect(() => {
/*
    const reveal = gsap.utils.toArray('.reveal');
    reveal.forEach((text, i) => {
      ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        clearProps: 'all',
        start: "top 90%",
        // end: "top 5%"
      })
    })

    const images = gsap.utils.toArray('img');
    images.forEach((img, i) => {
      ease: 'Power3.easeOut',
      ScrollTrigger.create({
        trigger: img,
        toggleClass: 'active',
        start: "top 90%",
        // end: "bottom 5%"
      }),150
    })
    */

    const parallaxTl = gsap.timeline({
      ease: 'Power3.easeOut',
      scrollTrigger: {
        trigger: '.hero2',
        start: "top top",
        // end: "bottom +=200",
        scrub: 0.5,
        // events: onEnter onLEave onEnterBack onLeaveBack
        // options: play, pause, resume, reset, restart, complete, reverse, none
        toggleActions: "restart none none reverse"
      }
    })
      
    parallaxTl
      .to('.hero-middle', { duration: 2, autoAlpha: 0.2, y: '+=100' })
      .to('.back', {duration: 0.3, autoAlpha: 0, y: '-=30' }, 0);

      ScrollTrigger.refresh();

  }, [])

  return (
    <div className="flex" exit={{ opacity: 0, y: '-100%' }}>
      <Head>
        <title>/ insert-name-here</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500&display=swap" rel="stylesheet"></link>
        <meta name="description" content="Description goes here" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> 

      <div className="cursor"></div>
      <div className="follower"></div>


      <div className="hero2 inh-hero" layout>
            
        <Link href="/" scroll={false}><a>
          <motion.img 
          whileHover={{ opacity: 1, scale: 1.05, transition: { duration: .1, delay: 0, },}}
          whileTap={{ opacity: 0, }}
          initial={{ opacity: 0, x: '0.5em', y: '0.5em' }}
          animate={{ opacity: 0.8, x: '0em', y: '0em', transition: { duration: 1, delay: 0, }, }}
          exit={{ x: '-10em', y: '-10em', opacity: 0, transition: { duration: .2, } }}
          src="arrow-back.svg" 
          className="back" />
        </a></Link>

        <Image
        priority
        layout="fill"
         initial={{ y: 10, opacity: 0 }}
         animate={{ y: 0, opacity: 1, }}
         exit={{    y: -10, opacity: 0 }}
         transition={{ duration: .6, delay: 0.1 }}
        className="hero-middle" 
        src="/inh-title.gif" 
        alt="hero img" />
            
		    <motion.div 
			      className="parent panel inh"
			      animate={{ y: 'calc(-20vh + 1px)', skewY: ['0deg', '-3deg', '0deg'], transition: { duration: .8, delay: .2 }  }}
			      exit={{ y: '300px', skewY: ['0deg', '3deg', '0deg'] }}
          	transition={{ duration: .8, delay: 0 }}>
            <h5>Insert Name Here</h5>
            <p className="reveal">Highlighting people with different backgrounds who express their vision on culture – we discuss on YouTube about inclusive and empathic spaces.</p>
        </motion.div>

      </div>



  <section className="inh">
  <div className="wrapper-view">
  
    <span>
      <h5>heyo</h5>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempora aliquid quidem modi optio minus.
      </p>
    </span>

    <div className="ganz">
      <img src='/colors-inh.png' alt='' />
    </div> 
   
    <span>
      <h5>Lorem ipsum dolor sit amet</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab assumenda illum provident fugiat?</p>
    </span>  
   
    <div className="zweier">
      <img src='/videocall.gif' alt='' />
    </div> 
   
    <div className="zweier rechts">
     <img src='/transCard.gif' alt='interview split-screen' />
    </div>
 </div>
 
 <div className="wrapper-view mt">
   
    <span>
      <h5>heyo</h5>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempora aliquid quidem modi optio minus, dolorum aspernatur tenetur voluptatibus! Rem a quasi voluptates aliquid velit!
      </p>
    </span>
   
    <span>
      <h5>Amett amet</h5>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus hic blanditiis quae quos?
      </p>
   </span>  
   
 <div className="zweier">
    <img src='/beat-mode.png' alt='' />
   </div>
   
   <div>
      <h5>Client</h5>
     <p>
      Insert Name Here
     </p>
   </div>
        
    <div>
      <h5>Position</h5>
      <p>Art Director</p>
    </div>
        
    <div>
      <h5>Year</h5>
      <p>2020</p>
    </div>
        
    <div className="zweier rechts">
      <img src='/inh.png' alt='' />
      </div>
    </div>

  </section>

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

      <Scroll />
    
    </div>
  )
}
