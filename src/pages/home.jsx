import { useState } from 'react'

import HeaderComponent from '../components/header/headerComp'
import FooterComponent from '../components/footer/footerComp'
import Introduction from '../components/homePageComponents/introduction/IntroductionComp'

function HomePage() {

  return (
    <>
    <HeaderComponent/>
    <div className="WebsiteContent">
      <Introduction/>
    </div>
    <FooterComponent/>
    </>
  )
}

export default HomePage