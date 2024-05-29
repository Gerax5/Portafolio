import React, { useImperativeHandle, useState } from 'react';
import Claws from './claws';

const Paw = React.forwardRef(({istranslate, rotate, height, left, top, seconds}, ref) => {

    const [handPosition, setHandPosition] = useState('translateY(130%)');
  
    useImperativeHandle(ref, () => ({
      moveHand: () => {
        setTimeout(() => {
            setHandPosition('translateY(-0.05%)'); 
          }, 1000);
      
          setTimeout(() => {
            setHandPosition('translateY(120%)'); 
          }, 2000); 
        }
    }));
  
    return (
        <div style={{backgroundColor:'black', display:'flex', flexDirection:'column', height: height ? height: "80%", width:"10%", alignSelf:'center', bottom:0, position:'absolute', transform: istranslate ? rotate: handPosition, transition:`transform ${seconds}s ease-in-out`, borderRadius: "25% 25% 0 0", marginLeft:left ? left : 0, top:top ? top : 0, zIndex:1}}>
            <div style={{background:'black', display:'flex', flexDirection:'column', width:"100%", alignSelf:'center', height:"40%", borderRadius:"100%", marginTop:"-30%",transform: "rotate(90deg)" }}>
            <Claws lef={"15%"} top={"-5%"}/>
            <Claws lef={"-10%"} top={"1%"} />
            <Claws lef={"-16%"} top={"6%"} />
            <Claws lef={"-14%"} top={"7%"} />
            <Claws lef={"10%"} top={"8%"} />
            </div>
        </div>
    );
  });


  export default Paw