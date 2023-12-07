import './globals.css'
import styles from './styles.module.css'
// import { Quicksand } from 'next/font/google'
import Image from 'next/image';

export const metadata = {
  title: 'Me Weeb',
}

function Logo({}){
  return (
    <p className={styles.logo}><span className={styles.m}>M</span>e <br/> <span className={styles.w}>W</span>eeb</p>
    
  );
}

function ItemMenu({nome}){
  return(
    <p className={styles.itemMenu}>{nome}</p>
  );
}

function Menu({children}){
  return(
    <ul className={styles.menu}>
      {children.map((itemMenu) => (
        <li key={itemMenu.nome}>{itemMenu}</li>
      ))}
    </ul>
  );
}

function Premium(){
  return(
    <>
      <Image></Image>
      <p className={styles.premium}>Premium</p>
    </>
  )
} 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.corpo}>
        <header>
          <div className={styles.container_header}>
            
            <div className={styles.container_nav}>

              <div className={styles.Logo}>
              <Logo x={70} y={58}/>
              </div>

              <div className={styles.menu}>
              <ItemMenu nome="Genre"/>
              <ItemMenu nome="Movies"/>
              <ItemMenu nome="ONAs"/>
              <ItemMenu nome="News"/>
              </div>
               <Premium/>
              <div className={styles.premium}>

              </div>
            </div>

          </div>
        </header>
        
       
        <Image></Image>

        {/* <Filme imagem={titans} numero="01" nome="Attack on Titan"/> */}
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
