import React, { useEffect, useState } from "react";
import styles from "@styles/Home.module.css";

const Switch = ({onClick, isVis, animar}) => {

    const [isPressed, setIsPressed] = useState(false)
    const [contTouch, setContTouch] = useState(0)
    const [animate, setAnimate] = useState(false);

    const onHandlerClick = () => {  
        if(contTouch  >= 2){
            setIsPressed(true)
            onClick()
            return
        }
        setIsPressed(!isPressed)

        if(isPressed){
            setContTouch(contTouch+1)
            console.log(contTouch)
        }
        
        onClick()
    }

    useEffect(() => {
        if(animar){
            setTimeout(() => {
                setAnimate(true)
            },400)
        }
    },[animar] )

    useEffect(() => {
        if(isVis == false && contTouch == 0){
            setContTouch(1)
            return 
        }
        onHandlerClick()
    },[isVis])

    return (
        <div className={`${styles.containerSwitch}`} style={{transform: animate ? "translateX(1000px)" : "none", transition:'transform 0.1s ease-in-out'}}>
            <div className={styles.principalSwitch}>
                <div className={styles.swtitch} 
                    style={{
                        alignItems:"center",
                        justifyContent: "flex-start",
                    }}>
                    <div className={styles.presionado} onClick={onHandlerClick} 
                    style={{
                        transform: `translateY(${isPressed ? "130%" : "0"})`,
                        transition: "transform 0.3s ease-in-out"
                    }}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Switch