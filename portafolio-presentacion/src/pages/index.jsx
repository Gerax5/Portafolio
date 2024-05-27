import { Inter } from "next/font/google";
import styles from "@styles/Home.module.css";
import { useState, useEffect } from "react";
import Popup from "@components/popup";
import Switch from "@components/Switch";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [color, setColor] = useState("black")
  const [isVisible, setIsVisible] = useState(false)
  const [handPosition, setHandPosition] = useState('translateY(100%)');

  useEffect(() => {
    // Animate the div to show it moving up to the middle
    setTimeout(() => {
      setHandPosition('translateY(-0.05%)'); // Move to the middle
    }, 1000); // Start the animation after 1 second

    // Animate the div to move down quickly
    setTimeout(() => {
      setHandPosition('translateY(100%)'); // Move down quickly
    }, 2000); // Start the down animation after 2 seconds
  }, []);

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const onStart = () => {
    if(color == "transparent"){
      setColor("Black")
      setIsVisible(true)
    }else{
      setColor("transparent")
      setIsVisible(false)
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
          background: `radial-gradient(circle 100px at ${position.x}px ${position.y}px, transparent, ${color})`
        }}
      />
      <Switch onClick={onStart} />
      <div style={{backgroundColor:'black', height:"100%", width:"10%", alignSelf:'center', bottom:0, position:'absolute', transform:handPosition, transition:'transform 1s ease-in-out', borderRadius: "10%"}}>

      </div>
    </div>
  );
}
