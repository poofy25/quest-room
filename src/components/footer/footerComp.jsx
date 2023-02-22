
import './footer.css'
import InstagramIcon from "/src/assets/instagramIcon.png"
import EmailIcon from "/src/assets/mailIcon.png"
import FacebookIcon from "/src/assets/facebookIcon.png"

function FooterComponent() {



  return (
  <footer className='footerContainer'>

  <div className="footerMediaContainer">
    <a><img src={InstagramIcon}/></a>
    <a><img src={FacebookIcon}/></a>
    <a><img src={EmailIcon}/></a>
  </div>
  <p>© KeyTime</p>

  </footer>
  )
}

export default FooterComponent
