import React from 'react'
import style from '../../styles/Mobile.module.css'
import Link from 'next/link'
import { RiHome4Fill, RiContactsBook2Fill, RiPagesFill, RiWhatsappFill } from "react-icons/ri";
function TabBar() {
  return (
    <div className={style.tabBar}> 
    
    <a className={style.tabBar_Icon} >
    <Link href="components/homeMobile/index.tsx"> 
      <RiHome4Fill/>
     </Link>
     </a>
     <a className={style.tabBar_Icon} >
    <Link href="https://www.instagram.com/byfe.ok"> 
      <RiContactsBook2Fill/>
     </Link>
     </a>
     <a className={style.tabBar_Icon} >
    <Link href="https://www.instagram.com/byfe.ok"> 
      <RiPagesFill/>
     </Link>
     </a>
     <a className={style.tabBar_Icon} >
    <Link href="https://www.instagram.com/byfe.ok"> 
      <RiWhatsappFill/>
     </Link>
     </a>
    
    </div>
  )
}

export default TabBar