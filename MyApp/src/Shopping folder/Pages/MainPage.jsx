
import { useState } from 'react'

import Banner from './Components/Banner.jsx'
import Collections from './Components/Collections.jsx'
import Footer from './Components/Footer.jsx'
import Header from './Components/Header.jsx'

import { Gents , Ladies} from './data.js'
import WomenCollection from './Components/WomenCollection.jsx'

const MainPage = () => {

  const[gentsFashion , setGentsFashion] = useState(Gents)
  const[ladiesFashion , setLadiesFashion] = useState(Ladies)
  console.log(Gents)

  return (
    <div>
        <Header />
        <Banner />
        <Collections gentsFashion={gentsFashion} />
        <WomenCollection ladiesFashion={ladiesFashion} />
        <Footer />

    </div>
  )
}

export default MainPage