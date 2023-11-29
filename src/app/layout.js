import './globals.css'
import styles from './styles.module.css'
// import { Quicksand } from 'next/font/google'
import Image from 'next/image';

export const metadata = {
  title: 'Me Weeb',
}

function Logo({x, y}){
  return (
    <p style={{left: x, top: y }} className={styles.logo}>Ready<span className={styles.comercial}>&</span>Go</p>
    <Image></Image>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Logo></Logo>
      </body>
    </html>
  )
}
