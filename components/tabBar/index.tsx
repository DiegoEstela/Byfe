import React from 'react'
import style from '../../styles/Mobile.module.css'
import Link from 'next/link'
import { RiHome4Fill, RiContactsBook2Fill, RiPagesFill, RiWhatsappFill } from "react-icons/ri";
function TabBar() {
  return (
    <div className={style.tabBar}> 
    
    <a className={style.tabBar_Icon} >
    <Link href="/home"> 
      <RiHome4Fill/>
     </Link>
     </a>
     <a className={style.tabBar_Icon} >
    <Link href="contactUs"> 
      <RiContactsBook2Fill/>
     </Link>
     </a>
     <a className={style.tabBar_Icon} >
    <Link href="aboutUs"> 
      <RiPagesFill/>
     </Link>
     </a>
     <a className={style.tabBar_Icon} >
    <Link href="services"> 
      <RiWhatsappFill/>
     </Link>
     </a>
    
    </div>
  )
}

export default TabBar