import * as styles from "./index.style";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <styles.NavBar>
      <a >
        <Image src="/logoByFe.png" alt="byfe" width={80} height={80} />
      </a>

      <styles.NavBar_ul>
        <styles.NavBar_li>
          <Link href="/">
            <a>Home </a>
          </Link>
        </styles.NavBar_li>
        <styles.NavBar_li>
          <Link href="/">
            <a>About As </a>
          </Link>
        </styles.NavBar_li>
        <styles.NavBar_li className="nav-item dropdown">
        
          <a >
            Services
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {/*  <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a> */}
          </div>
        </styles.NavBar_li>
        <styles.NavBar_li className="nav-item">
        <Link href="/">
          <a >
            Contact Us
          </a>
          </Link>
        </styles.NavBar_li>
      </styles.NavBar_ul>
    </styles.NavBar>
  );
}
