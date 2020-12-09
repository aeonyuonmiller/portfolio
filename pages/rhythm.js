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
    right: -20,
    opacity: 0,
    transition: { ease, duration: 0.8 },
  },
  animate: {
    right: 0,
    opacity: 1,
    transition: { ease, duration: 1, delay: 0.8 },
  },
  exit: {
    right: -20,
    opacity: 0,
    transition: { ease, duration: 1.8 },
  },
}
const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { ease, duration: 1 },
}

export default function Project() {



  const { scrollYProgress } = useViewportScroll()
  const x = useTransform(scrollYProgress, [0, 1], [1, 2])
  const scaleAnim = useTransform(scrollYProgress, [0, 0.2, .4], [1, .8, 1.1])
  const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, -400, -500])

  return (
    <div className="flex scroll" exit={{ opacity: 0, y: '-100%' }} style={{ backgroundColor: '#AECCC0' }}>
      <Head>
        <title>/ project</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500&display=swap" rel="stylesheet"></link>
        <meta name="description" content="Description goes here" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> 


      <div className="hero2 rhym-hero" layout>
            
        <Link href="/" scroll={false}><a>
          <motion.img 
          whileHover={{ opacity: 1, scale: 1.05, transition: { duration: .1, delay: 0, },}}
          whileTap={{ opacity: 0, }}
          initial={{ opacity: 0, x: '2em', y: '2em' }}
          animate={{ opacity: 0.8, x: '0em', y: '0em', transition: { duration: .4, delay: 0, }, }}
          exit={{ opacity: 0, x: '-2em', y: '-2em', transition: { duration: .8 } }}
          src="arrow-back.svg" 
          className="back" />
        </a></Link>

        <motion.img
         initial={{ y: 10, opacity: 1 }}
         animate={{ y: 0, opacity: 1 }}
         exit={{    y: -10, opacity: 0 }}
         transition={{ duration: .6, delay: 0.1 }}
        style={{ scale: scaleAnim, y: yPosAnim,  }} 
        className="hero-middle" 
        src="/beat-mode.png" 
        alt="hero img" />
            
		    <motion.div 
			      className="parent panel rhym"
			      animate={{ y: 'calc(-20vh + 1px)' }}
			      exit={{ y: '100%' }}
          	transition={{ duration: .8, delay: 0 }}>
            <h5>Rhythm for PSP</h5>
            <p>Music brought me to design.</p>
            <p>The winamp audio application with it's millions of skins made me wonder as a child – How do you create this?</p>
        </motion.div>

      </div>



      <section className="show rhym">

        <span>
          <h5>Onboarding</h5>
          <p>These angels came to protect me from evil spirits.</p>
          <h5>Security</h5>
          <p>These angels be protecting.</p>
        </span>

        <img src="transcard.gif" style={{ width: '50%' }} alt="desc" />

        <img src="memo.jpg" alt="desc" className="shadow" />

        <img src="transcard.gif" alt="desc" />

        <span>
          <h5>Onboarding</h5>
          <p>These angels came to protect me from evil spirits.</p>
          <h5>Security</h5>
          <p>These angels be protecting.</p>
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
