import { Inter } from "next/font/google";
import styles from "@styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import Popup from "@components/popup";
import Switch from "@components/Switch";
import Paw from "@components/Paw";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [color, setColor] = useState("Transparent") //Transparent, black
  const [isVisible, setIsVisible] = useState(false)
  const [changePosition, setChangePosition] = useState(false)
  const childRef = useRef(null);
  const [destroy, setDestroy] = useState(false)
  const [countOn, setCountON] = useState(0)
  const [rotateHand, setRotateHand] = useState("Rotate(-90deg)")
  const [animate, setAnimate] = useState(false)

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const onStart = () => {
    if(countOn <= 2){
      console.log(countOn)
      if(color == "transparent"){
          setColor("Black")
          
      }else{
        setCountON(countOn+1)
        setColor("transparent")
        
        
        if(countOn == 2){
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
    }
  }

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1000);
    
        return () => clearTimeout(timer);
      }, []);


  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: "100vh", 
        width: "100vw",
        backgroundColor:"purple",
        position: 'relative' 
      }}
      onMouseMove={handleMouseMove}
    >
      <Popup text={"Que alguien encienda las luces"} isVisible={isVisible}></Popup>
      <div 
        className={styles.lightEffect}
        style={{
          background: `radial-gradient(circle 200px at ${position.x}px ${position.y}px, transparent, ${color})`
        }}
      />
      <Switch onClick={onStart} isVis={changePosition} animar={animate}/>
      {destroy == false ? (<Paw ref={childRef} height={"80%"} top={"40%"} seconds={1}/>): (<Paw ref={childRef} istranslate={true} rotate={rotateHand} height={"600%"} top={"150%"} seconds={0.8} />)}
      
    </div>
  );
}
