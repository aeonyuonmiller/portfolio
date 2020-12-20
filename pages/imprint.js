import Head from 'next/head'
import Link from 'next/link'
import * as React from "react";
import { motion, AnimatePresence, AnimateSharedLayout, useViewportScroll, useTransform } from "framer-motion";

const ease = [0.43, 0.13, 0.23, 0.96]

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function Home() {

  return (
    <div className="flex">
      <Head>
        <title>/ imprint</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500&display=swap" rel="stylesheet"></link>
        <meta name="description" content="Description goes here" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> 

      <div className="bg-head"></div>

      <motion.a 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }} 
          exit={{ scale: 0 }}
          transition={{ duration: .3, delay: .6 }}
      className="back-btn" href="/">Back</motion.a>

      <div variants={{variants}} className="hero-short">

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ y: ['5vh', '0vh'], opacity: 1 }} 
          exit={{ opacity: 0 }}
          transition={{ duration: .55, }}
          // variants={variants}
          className="align-left align-y-bottom">
          imprint <span>&copy; 2020</span>
        </motion.h1>

      </div>

      <motion.div className="texto" initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} transition={{ duration:.6, delay:.25 }}>

        <h5>Privacy policy</h5>
        <p><span>Published in November 2020</span></p>
        
        <p>  
          This website is operated by <span>aeonyuonmiller</span> (“me” or “I”). I respect the privacy of visitors of my website and recognise that when you choose to provide me with information about yourself, you trust me to act in a responsible manner with that information.</p>

          <h5>You're right</h5>
        <p>
        <span>You have the right to see the personal information you’ve provided to me,</span> and to request me to delete it from the database within a reasonable time.
        </p>

        <h5>Cookies</h5>
        <p>They're useful in guaranteeing your experience on the world-wide webz, memorizing information on your side.</p>

        <h5>Owner</h5>
        <p>Andreas Y. Müller<br/>
          Karl-Marx-Strasse 169<br/>
          Neukölln, Berlin</p>
          
          <h5>Business Inquiries</h5>
          <p>work@aeonyuonmiller.com</p>

          <h5>E-Mail</h5>
          <p>aym1@mail.com</p>

      </motion.div>

    </div>
  )
}
