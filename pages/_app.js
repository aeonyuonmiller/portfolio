import React, { useRouter } from 'react'
import App, { Container } from 'next/app'
import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
// import { useRouter } from 'next/dist/client/router'


class MyApp extends App {
  /**
   * Handle scrolling gracefully, since next/router scrolls to top
   * before exit animation is complete.
   *
   * Note that next/link components should also be using `scroll={false}`
   **/
  handleExitComplete () {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 })
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
          <AnimatePresence 
            exitBeforeEnter 
            onExitComplete={this.handleExitComplete}>  
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
      </>
      );
  }
}

export default MyApp;

