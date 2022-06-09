import Link from "next/link";
import {useState} from "react"
import { RiSendPlane2Line} from "react-icons/ri";

export default function NavBar() {
  const [active, setActive] = useState(false)
  return (

    <div className="header">
      <a className="logo">
        <h2 className="title">Byfe</h2>
      </a>

      <div className={active ? "menu-toggle-open" : "menu-toggle" } 
    
      onClick={()=> setActive(!active)}> 
      <RiSendPlane2Line/> 
     
    
      </div>
     
        <nav className={active ? "active" : ""}>
      <a>  <Link href="/">HOME  </Link></a>
      <a > <Link href="/">ABOUT US  </Link></a>
      <a > <Link href="/">SERVICES  </Link></a>
      <a><Link href="/">CONTACT US  </Link></a>  
      <div className="animation start"> </div>
      </nav>

        <div className="clearFix" > </div>

    </div>
  );
}
