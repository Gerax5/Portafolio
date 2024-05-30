import Layout from "@components/Layout";
import { motion } from 'framer-motion';
import styles from "@styles/Home.module.css";
import { useRouter } from 'next/router';

const Aboutme = () => {
    const imagePath = require('@assets/imagen 2.jpg');
    const router = useRouter();

    console.log(imagePath.default.src)

    const goToTechnologiesPage = () => {
        router.push('/technologies')
    };

    const goToMainPage = () => {
        router.push('/')
    }

    const goToGithub = () => {
        window.open("https://github.com/Gerax5","_blank")
    }

    const goToLin = () => {
        window.open("https://www.linkedin.com/in/gerardo-pineda-143456292/","_blank")
    }

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
                <div className={styles.textoMenu} onClick={goToMainPage}>Inicio</div>
                <div className={styles.textoMenu} onClick={goToTechnologiesPage}>Tecnologias</div>
                <div className={styles.textoMenu}>Mis proyectos</div>
            </div>
            <div style={{width:"100%", height:"100%", display:'flex', flexDirection:'row', marginTop:"5%", justifyContent:'space-evenly'}}>
                <div style={{height:"100%", width:"30%", display:'flex', flexDirection:'column'}}>
                    <h1 style={{ color: 'white', zIndex:2 }}>About me</h1>
                    <div style={{height:"50%", width:"20%", backgroundColor:'purple', position:'absolute', marginLeft:"4%",marginTop:"3%",transform: 'rotate(30deg) scaleX(2)', borderRadius:"100%", zIndex:1}}>
                        
                    </div>
                    <p style={{ color: 'white', wordWrap:'break-word', zIndex:2, fontSize:"25px" }}>Hey, my name is Gerardo Pineda. I am a third-year student in the Computer Science and Information Technology program at UVG. I really enjoy running in the mornings and sleeping. I've always been very interested in technology, so I always try to stay up to date with it. I like to be organized and responsible. This is my portfolio, I hope you find it interesting and entertaining.</p>
                    <div style={{display:'flex', flexDirection:'row', width:"100%", height:"20%"}}>
                        <div style={{height:"10%", width:"10%", zIndex:100}} className={styles.puntero} onClick={goToGithub}>
                            <img src={require("@assets/github.png").default.src} style={{objectFit:'contain', backgroundColor:'white', height:"100%", width:"100%"}}/>
                        </div>
                        <div style={{height:"20%", width:"17.7%", zIndex:100}} className={styles.puntero} onClick={goToLin}>
                            <img src={require("@assets/Lin.png").default.src} style={{objectFit:'contain', height:"100%", width:"100%"}}/>
                        </div>
                        
                    </div>
                </div>
                <div style={{width:"20%", height:"20%",  padding:"20px", backgroundColor:'#EDCD4F', borderRadius:"25px", boxShadow: "inset 0 0 10px rgba(0, 0, 128, 0.5)"}}>
                    <img src={imagePath.default.src} style={{width:"100%", height:"100%", objectFit:'cover'}}/>
                </div>
            </div>
        </motion.div>
        </Layout>
    );
}

export default Aboutme;