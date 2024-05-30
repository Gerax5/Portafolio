import React, {useState, useEffect} from "react";
import styles from "@styles/Home.module.css";

const Popup = ({text, isVisible, animar}) => {

  const [isV, setIsV] = useState(false)
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setIsV(isVisible)
  },[isVisible])

  useEffect(() => {
    if(animar){
        setTimeout(() => {
            setAnimate(true)
        },250)
    }
  },[animar] )

  
  return (
      <div className={`${styles.popup} ${isV ? styles.visible : ''} `} style={{transform: animate ? "translateX(500000px)" : "none"}}>
        {text}
      </div>
  )
}

export default Popup