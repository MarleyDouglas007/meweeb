import './globals.css'
import styles from './styles.module.css'
// import { Quicksand } from 'next/font/google'
import Image from 'next/image';

export const metadata = {
  title: 'Me Weeb',
}

function Logo({x, y}){
  return (
    <p style={{left: x, top: y }} className={styles.logo}>Me<></>Weeb<span></span></p>
    
  );
}

function ItemMenu({nome}){
  return(
   
    <p className={styles.itemMenu}>{nome}</p>
  )
}

function Premium(){
  return(
    <div>
      <Image></Image>
      <p>Premium</p>
    </div>
  )
} 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Logo></Logo>
        <ItemMenu nome="Genre"/>
        <ItemMenu nome="Movies"/>
        <ItemMenu nome="ONAs"/>
        <ItemMenu nome="News"/>
        <Premium></Premium>
        <Image></Image>

        {/* <Filme imagem={titans} numero="01" nome="Attack on Titan"/> */}
      </body>
    </html>
  )
}
