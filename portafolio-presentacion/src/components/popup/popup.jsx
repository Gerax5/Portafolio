import React, {useState, useEffect} from "react";
import styles from "@styles/Home.module.css";

const Popup = ({text, isVisible}) => {

  const [isV, setIsV] = useState(false)

  useEffect(() => {
    setIsV(isVisible)
  },[isVisible])

  
    return (
        <div className={`${styles.popup} ${isV ? styles.visible : ''}`}>
          {text}
        </div>
    )
}

export default Popup