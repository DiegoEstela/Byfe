import * as styles from "./index.style";
import Image from "next/image";
import Link from "next/link";
import style from "../../styles/navBar.module.css"

export default function NavBar() {
  return (

    <div className={style.header}>
      <styles.Logo>
        <Image src="/logoByFe.png" alt="byfe" width={80} height={80} />
      </styles.Logo>
     
     
        <styles.Nav active={true}>
      <styles.Nav_li > <Link href="/">HOME  </Link></styles.Nav_li>
      <styles.Nav_li >ABOUT AS</styles.Nav_li>
      <styles.Nav_li >SERVICES</styles.Nav_li>
      <styles.Nav_li >CONTACT US</styles.Nav_li>

        </styles.Nav>
        <styles.ClearFix> </styles.ClearFix>
      
    </div>
  );
}
