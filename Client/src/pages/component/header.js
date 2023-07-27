import Image from 'next/image'
import logo from '../../images/LogoMakr-6vQaOg.png'
export default function Header() {
  return (
   <header>
    <div className="container">
       <nav>
        <div className="logo">
           <a href='/'><Image src={logo} alt="wonderer's Diary"/></a>
        </div>
        <ul className="nav-menus">
            <li><a href="/Login">Login</a></li>
            <li><a className="active" href="/register">Signup</a></li>
        </ul>
       </nav>
    </div>
        
    </header>
    
  )
}