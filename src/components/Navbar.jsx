import logo  from '../assets/imgs/favicon-32x32.png'
import '../css/Navbar.module.css'

export default function Navbar(){
  return(
    <nav>
      <a href="https://ryuudev-12.github.io/Portfolio-v1.3">
       <img src={logo} alt=""/>
      </a>
    </nav>
  )
}