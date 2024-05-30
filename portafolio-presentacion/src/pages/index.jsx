import styles from "@styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import Popup from "@components/popup";
import Switch from "@components/Switch";
import Paw from "@components/Paw";
import { useRouter } from 'next/router';
import Layout from "@components/Layout";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [color, setColor] = useState("black") //Transparent, black
  const [isVisible, setIsVisible] = useState(true)
  const [changePosition, setChangePosition] = useState(false)
  const childRef = useRef(null);
  const [destroy, setDestroy] = useState(false)
  const [countOn, setCountON] = useState(0)
  const [rotateHand, setRotateHand] = useState("Rotate(-90deg)")
  const [animate, setAnimate] = useState(false)
  const [objectVisible, setObjectVisible] = useState(true)

  const router = useRouter();

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const onStart = () => {
    if(countOn <= 1){
      console.log(countOn)
      if(color == "transparent"){
          setColor("Black")
          setIsVisible(true)
      }else{
        setCountON(countOn+1)
        setColor("transparent")
        setIsVisible(false)
        
        
        if(countOn == 1){
          setDestroy(true)
        }


        if(!destroy){
          childRef.current && childRef.current.moveHand()

          setTimeout(() => {
            if(changePosition){
              setChangePosition(false)
            }else{
              setChangePosition(true)
            }
          }, 2000)
        }

        
        
      }
    }else{
      setRotateHand("Rotate(90deg)")
      setAnimate(true)
      setTimeout(() => {
        setObjectVisible(false)
      },1000)
    }
  }

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1000);
    
        return () => clearTimeout(timer);
      }, []);

      const goToAboutPage = () => {
        router.push('/aboutme');
      };


  return (
    <Layout>
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: "100vh", 
        width: "100vw",
        backgroundColor:"purple",
        position: 'relative', 
        overflowX: 'hidden',
        overflowY: objectVisible ? 'hidden': 'auto'
      }}
      onMouseMove={handleMouseMove}
    >
      {objectVisible && (<Popup text={"Que alguien encienda las luces"} isVisible={isVisible} animar={animate}></Popup>)}
      {objectVisible && (<div 
        className={styles.lightEffect}
        style={{
          background: `radial-gradient(circle 200px at ${position.x}px ${position.y}px, transparent, ${color})`
        }}
      />)}
      {objectVisible && (
        <Switch onClick={onStart} isVis={changePosition} animar={animate}/>
      )}
      {objectVisible == true ? destroy == false ? (<Paw ref={childRef} height={"80%"} top={"40%"} seconds={1}/>): (<Paw ref={childRef} istranslate={true} rotate={rotateHand} height={"600%"} top={"150%"} seconds={0.8} />):(<div></div>)}
      {objectVisible == false ? (
      <div className={`${styles.expandirMenu} ${styles.menu}`}>
          <div onClick={goToAboutPage} className={styles.textoMenu}>Sobre mi</div>
          <div className={styles.textoMenu}>Tecnologias</div>
          <div className={styles.textoMenu}>Mis proyectos</div>
      </div>):(
        <div></div>
      )}
      <div className={`${styles.aparecerTexto} ${animate ? styles.aparecer : ''}`}>
        <div className={styles.textoNombre}>Gerardo Pineda</div>
        <div className={styles.textoNombre} style={{fontSize:"50px"}}>Full stack developer</div>
      </div>
    </div>
    </Layout>
  );
}
