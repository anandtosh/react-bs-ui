import React from 'react'
import HomeBody from './body/HomeBody'
import HomeFooter from './footer/HomeFooter'
import HomeHeader from './header/HomeHeader'
import './home.css'
export default function Home() {
  return (
    <>
        <HomeHeader/>
        <HomeBody/>
        <HomeFooter/>
    </>
  )
}
