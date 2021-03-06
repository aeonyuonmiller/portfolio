import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from "next/router";
import Link from 'next/link';
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



export default function RHYM() {

  // HELPERS
  useEffect(() => {

    var headlines = gsap.utils.toArray("h2, h3, h5, p, .copy");
    headlines.forEach((elem, i) => {
  
    const tl = gsap.timeline({ 
     scrollTrigger: {
       trigger: elem,
       // elem / viewport
       start: "top 100%",
       end: "center 0%",
       // events: onEnter onLeave onEnterBack onLeaveBack
       // options: play, pause, resume, reset, restart, complete, reverse, none
       toggleActions: "restart reverse restart reverse"
     }
  });

   tl.from(elem, { autoAlpha: 0, y: 30 })
     .to(elem, { autoAlpha: 1, y: 0, duration: 0.2 })
     .to(".arrow", { delay: 1.5 })
     .to(".copy", { delay: 1.5 });
    });

    ScrollTrigger.refresh(true);

  }, [])

 /*// make gsap work smooth
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
}  */


  /*  WORKING JS  */


  useEffect(() => {
  
    const images = gsap.utils.toArray('img');
    images.forEach((img, i) => {
      ease: 'Power3.easeOut',
      ScrollTrigger.create({
        trigger: img,
        toggleClass: 'active',
        start: "top 80%",
      })
    });

    const parallaxTl = gsap.timeline({
      ease: 'Power3.easeOut',
      scrollTrigger: {
        trigger: '.hero2',
        start: "top top",
        scrub: 0.5,
        // events: onEnter onLEave onEnterBack onLeaveBack
        // options: play, pause, resume, reset, restart, complete, reverse, none
        toggleActions: "restart none none reverse"
      }
    });
      
    parallaxTl
      .to('.hero-middle', { duration: 2, y: '50%' })
      .to('.back', {duration: 0.3, autoAlpha: 0, y: '-30%' }, 0);

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

      <div className="hero rhym-hero">
            
        <Link href="/" scroll={false}><a>
          <motion.img 
          whileHover={{ opacity: 1, scale: 1.08, transition: { duration: .1, delay: 0, },}}
          whileTap={{ opacity: 0, }}
          initial={{ opacity: 0, x: '0.5em', y: '0.5em' }}
          animate={{ opacity: 0.8, x: '0em', y: '-5em', transition: { duration: 1, delay: 0, }, }}
          exit={{ x: '-10em', y: '-10em', opacity: 0, transition: { duration: .2, } }}
          src="arrow-back.svg" 
          className="back" />
        </a></Link>

        <Image
         priority="true"
         layout="fill"
         initial={{ y: 10, opacity: 0 }}
         animate={{ y: 0, opacity: 1, }}
         exit={{    y: -10, opacity: 0 }}
         transition={{ duration: .6, delay: 0.1 }}
         className="hero-middle image-full" 
         src="/audiowave-on-the-run.gif" 
         alt="Type animation On the run with soundwave" />
            
		    <motion.div 
			      className="parent panel rhym"
			      animate={{ y: 'calc(-20vh + 1px)', skewY: ['0deg', '-3deg', '0deg'], transition: { duration: .8, delay: .2 }  }}
			      exit={{ y: '300px', skewY: ['0deg', '3deg', '0deg'] }}
          	transition={{ duration: .8, delay: 0 }}>
            <h5 className="reveal">PSP Rhythm</h5>
            <p className="reveal">This project touches on my childhood. The winamp music player had millions of themes to change the design and I wondered: How do you create this?</p>
        </motion.div>

      </div>

      {/* <section className="show rhym"> */}

      <section className="wrapper rhym">

        <span>
          <h5 className="reveal">Mission</h5>
          <p className="reveal">Give perspective on club culture from cultural workers.</p>
        </span>

        <img src="on-the-run-typo.gif" className="full-bleed" alt="desc" />

        <img src="beat-mode.png" className="full-bleed" alt="desc" />

        <img src="audiowave-on-the-run.gif" className="full-bleed" alt="desc" />

        <span>
          <h5>Beat Mode</h5>
          <p className="reveal">Select samples and edit patterns​​​​​​​</p>
        </span>
        <img src="beat-mode.png" className="full-bleed" alt="desc" />

        <img src="beat-mode.png" alt="desc" />
        <span>
          <h5>Song Mode</h5>
          <p className="reveal">Put blocks of patterns in your prefered time of the track​​​​​​​</p>
        </span>

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
    
    </div>
  )
}
