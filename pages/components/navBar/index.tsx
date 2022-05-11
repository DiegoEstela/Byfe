import * as styles from  './index.style';
import Image from 'next/image';


export default function NavBar() {
    return (
        <styles.NavBar>
            <a href=""><Image src="/logoByFe.png" alt="byfe" width={80} height={80} /></a>
         
                <styles.NavBar_ul >
                    <styles.NavBar_li >
                        <a className="nav-link" href="#">Home </a>
                    </styles.NavBar_li>
                    <styles.NavBar_li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </styles.NavBar_li >
                    <styles.NavBar_li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                        <a className="nav-link disabled" href="#">Contact Us</a>
                    </styles.NavBar_li>
                </styles.NavBar_ul>
        </styles.NavBar>
    );
}
