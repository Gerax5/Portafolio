import Layout from "@components/Layout";
import { motion } from 'framer-motion';
import styles from "@styles/Home.module.css";

const Aboutme = () => {
    const imagePath = require('@assets/imagen 2.jpg');
    const imagePath2 = require('@assets/imagen1.jpg');
    console.log(imagePath.default.src)
    return (
        <Layout>
        <motion.div
            initial={{ backgroundColor: 'purple' }}
            animate={{ backgroundColor: 'black' }}
            transition={{ duration: 5 }}
            style={{ padding: '20px', 
            minHeight: '100vh', 
            minWidth: '100vw',
            display:'flex',
            flexDirection:'column' }}
        >
            <div className={`${styles.expandirMenu} ${styles.menu}`}>
                <div className={styles.textoMenu}>Juego</div>
                <div className={styles.textoMenu}>Tecnologias</div>
                <div className={styles.textoMenu}>Mis proyectos</div>
            </div>
            <div style={{width:"100%", height:"100%", display:'flex', flexDirection:'row', marginTop:"5%", justifyContent:'space-evenly'}}>
                <div style={{height:"100%", width:"30%", display:'flex', flexDirection:'column'}}>
                    <h1 style={{ color: 'white', zIndex:2 }}>About me</h1>
                    <div style={{height:"50%", width:"20%", backgroundColor:'purple', position:'absolute', marginLeft:"4%",marginTop:"3%",transform: 'rotate(30deg) scaleX(2)', borderRadius:"100%", zIndex:1}}>
                        
                    </div>
                    <p style={{ color: 'white', wordWrap:'break-word', zIndex:2, fontSize:"25px" }}>Hey, my name is Gerardo Pineda. I am a third-year student in the Computer Science and Information Technology program at UVG. I really enjoy running in the mornings and sleeping. I've always been very interested in technology, so I always try to stay up to date with it. I like to be organized and responsible. This is my portfolio, I hope you find it interesting and entertaining.</p>
                </div>
                <div style={{width:"20%", height:"20%",  padding:"20px", backgroundColor:'#F1E9D2', borderRadius:"25px", boxShadow: "inset 0 0 10px rgba(0, 0, 128, 0.5)"}}>
                    <img src={imagePath.default.src} style={{width:"100%", height:"100%", objectFit:'cover'}}/>
                </div>
            </div>
        </motion.div>
        </Layout>
    );
}

export default Aboutme;