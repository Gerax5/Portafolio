import styles from "@styles/Home.module.css";
import { useEffect } from 'react';
import Layout from '@components/Layout';
import { motion } from 'framer-motion';

const Technologies = () => {

    return (
        <Layout>
        <motion.div
            initial={{ backgroundColor: 'purple' }}
            animate={{ backgroundColor: '#808080' }}
            transition={{ duration: 5 }}
            style={{ padding: '20px', 
            minHeight: '100vh', 
            minWidth: '100vw',
            display:'flex',
            flexDirection:'column' }}
        >
            <div className={`${styles.expandirMenu} ${styles.menu}`}>
                <div className={styles.textoMenu}>Juego</div>
                <div className={styles.textoMenu}>About me</div>
                <div className={styles.textoMenu}>Mis proyectos</div>
            </div>
            <div style={{width:"100%", height:"100%", display:'flex', flexDirection:'column'}}>
                <div style={{display:'flex', flexDirection:'row', height:"100%", width:"100%", alignItems:'center', justifyContent:'space-evenly'}}>
                    <div style={{display:'flex', flexDirection:'column', height:"40%", width:"20%", backgroundColor:'red'}}>
                        <div style={{fontSize:"40px", fontWeight:'bold'}}>
                            Backend
                        </div>
                        <div>
                            Cosas Cosas COsas
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        a
                    </div>
                </div>
            </div>
        </motion.div>
        </Layout>
    )
}

export default Technologies