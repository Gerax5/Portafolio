import React, { useState } from "react";
import styles from "@styles/Home.module.css";

const Switch = ({onClick}) => {

    const [isPressed, setIsPressed] = useState(false)

    const onHandlerClick = () => {
        setIsPressed(!isPressed)

        onClick()
    }

    return (
        <div className={styles.containerSwitch}>
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