import Link from "next/link";
import { RiSendPlane2Line, RiInstagramFill } from "react-icons/ri";

export default function NavBar({ Active, setActive }: any) {




  return (
    <div className="header">
      <a className="logo">
        <h2 className="title">Byfe</h2>
      </a>

      <div
         className={Active ? "menu-toggle" : "menu-toggle-open" }
        onClick={() => setActive(!Active)}
       
      >
        <RiSendPlane2Line />
      </div>
   

      <Link href="https://www.instagram.com/byfe.ok"> 
      <a className="instagram" >
      <RiInstagramFill/>
      </a>
     </Link>
     
    
      

      <nav className={Active ? "" : "active" }>
        <a>
          {" "}
          <Link href="/">HOME </Link>
        </a>
        <a>
          {" "}
          <Link href="/">ABOUT US </Link>
        </a>
        <a>
          {" "}
          <Link href="/">SERVICES </Link>
        </a>
        <a>
          <Link href="/">CONTACT US </Link>
        </a>
        <div className="animation start"> </div>
      </nav>

      <div className="clearFix"> </div>
    </div>
  );
}
