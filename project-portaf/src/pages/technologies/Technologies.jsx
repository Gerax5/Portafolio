import styles from "@styles/Home.module.css";
import Layout from '@components/Layout';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Technologies = () => {
    const router = useRouter();

    const goToAboutPage = () => {
        router.push('/aboutme')
    };

    const goToMainPage = () => {
        router.push('/')
    }

    const goToMyProject = () => {
        router.push('/myProjects')
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
                <div className={styles.textoMenu} onClick={goToAboutPage}>About me</div>
                <div className={styles.textoMenu} onClick={goToMyProject}>Mis proyectos</div>
            </div>
            <div style={{width:"100%", height:"100%", display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', }}>
                <div style={{height:"90%", width:"100%", display:'flex', flexDirection:'row', marginTop:"43%", position:'absolute', alignItems:'center', justifyContent:'space-evenly'}}>
                    <div className={styles.flipContainer}>
                    <div className={styles.flipper}>
                            <div className={styles.front}>
                                <p style={{color:'white', fontFamily:'Impact', fontSize:"30px"}}>BACKEND</p>
                            </div>
                            <div className={styles.back}>
                                <div className={styles.backContent} style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', padding:"20px"}}>
                                    <div style={{width:"100%", height:"50%", display:'flex', flexDirection:'row', marginTop:"-5%"}}>
                                        <div style={{height:"100%", width:"50%"}}>
                                            <img src={require("@assets/python.png").default.src} style={{height:"100%", width:"100%", objectFit:'contain'}} /> 
                                        </div>
                                        <div style={{height:"100%", width:"50%"}}>
                                            <img src={require("@assets/php.png").default.src} style={{height:"100%", width:"100%", objectFit:'contain'}} /> 
                                        </div>
                                    </div>
                                    <div style={{width:"100%", height:"50%", display:'flex', flexDirection:'row', marginTop:"10%"}}>
                                        <div style={{height:"100%", width:"50%"}}>
                                            <img src={require("@assets/Next.png").default.src} style={{height:"100%", width:"100%", objectFit:'contain'}} /> 
                                        </div>
                                        <div style={{height:"100%", width:"50%"}}>
                                            <img src={require("@assets/Node.png").default.src} style={{height:"100%", width:"100%", objectFit:'contain'}} /> 
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className={styles.flipContainer}>
                        <div className={styles.flipper}>
                            <div className={styles.front}>
                                <p style={{color:'white', fontFamily:'Impact', fontSize:"30px"}}>Frontend</p>
                            </div>
                            <div className={styles.back}>
                                <div className={styles.backContent} style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', padding:"20px"}}>
                                    <div style={{width:"100%", height:"50%", display:'flex', flexDirection:'row', marginTop:"-5%"}}>
                                        <div style={{height:"100%", width:"50%"}}>
                                            <img src={require("@assets/react.png").default.src} style={{height:"100%", width:"100%", objectFit:'contain'}} /> 
                                        </div>
                                        <div style={{height:"100%", width:"50%"}}>
                                            <img src={require("@assets/Javascript.png").default.src} style={{height:"100%", width:"100%", objectFit:'contain'}} /> 
                                        </div>
                                    </div>
                                    <div style={{width:"100%", height:"50%", display:'flex', flexDirection:'row', marginTop:"10%"}}>
                                        <div style={{height:"100%", width:"50%"}}>
                                            <img src={require("@assets/rest.png").default.src} style={{height:"100%", width:"100%", objectFit:'contain'}} /> 
                                        </div>
                                        <div style={{height:"100%", width:"50%"}}>
                                            <img src={require("@assets/Graphql.png").default.src} style={{height:"100%", width:"100%", objectFit:'contain'}} /> 
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className={styles.flipContainer}>
                        <div className={styles.flipper}>
                            <div className={styles.front}>
                                <p style={{color:'white', fontFamily:'Impact', fontSize:"30px"}}>API</p>
                            </div>
                            <div className={styles.back}>
                                <div className={styles.backContent} style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', padding:"20px", alignItems:'center'}}>
                                    <div style={{width:"100%", height:"50%", display:'flex', flexDirection:'row', marginTop:"-5%"}}>
                                        <div style={{height:"100%", width:"50%"}}>
                                            <img src={require("@assets/rest.png").default.src} style={{height:"100%", width:"100%", objectFit:'contain'}} /> 
                                        </div>
                                        <div style={{height:"100%", width:"50%"}}>
                                            <img src={require("@assets/Graphql.png").default.src} style={{height:"100%", width:"100%", objectFit:'contain'}} /> 
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className={styles.flipContainer}>
                        <div className={styles.flipper}>
                            <div className={styles.front}>
                                <p style={{color:'white', fontFamily:'Impact', fontSize:"30px"}}>Bases de datos</p>
                            </div>
                            <div className={styles.back}>
                                <div className={styles.backContent} style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', padding:"20px", alignItems:'center'}}>
                                    <div style={{width:"100%", height:"50%", display:'flex', flexDirection:'row', marginTop:"-20%"}}>
                                        <div style={{height:"100%", width:"50%"}}>
                                            <img src={require("@assets/postgres.png").default.src} style={{height:"100%", width:"100%", objectFit:'contain'}} /> 
                                        </div>
                                        <div style={{height:"100%", width:"50%"}}>
                                            <img src={require("@assets/maria.png").default.src} style={{height:"100%", width:"100%", objectFit:'contain'}} /> 
                                        </div>
                                    </div>
                                    <div style={{width:"100%", height:"50%", display:'flex', flexDirection:'row', marginTop:"10%"}}>
                                        <div style={{height:"100%", width:"50%"}}>
                                            <img src={require("@assets/phpmyadmin.png").default.src} style={{height:"100%", width:"100%", objectFit:'contain'}} /> 
                                        </div>
                                        <div style={{height:"100%", width:"50%"}}>
                                            <img src={require("@assets/mysql.png").default.src} style={{height:"100%", width:"100%", objectFit:'contain'}} /> 
                                        </div>
                                    </div>
                                    <div style={{width:"100%", height:"50%", display:'flex', flexDirection:'row', marginTop:"10%", justifyContent:'center'}}>
                                        <div style={{height:"100%", width:"50%"}}>
                                            <img src={require("@assets/Oracle.png").default.src} style={{height:"100%", width:"100%", objectFit:'contain'}} /> 
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className={styles.flipContainer}>
                        <div className={styles.flipper}>
                            <div className={styles.front}>
                                <p style={{color:'white', fontFamily:'Impact', fontSize:"30px"}}>Technologies</p>
                            </div>
                            <div className={styles.back}>
                                <div className={styles.backContent} style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', padding:"20px", alignItems:'center'}}>
                                    <div style={{width:"100%", height:"50%", display:'flex', flexDirection:'row', marginTop:"-5%"}}>
                                        <div style={{height:"100%", width:"50%"}}>
                                            <img src={require("@assets/typescript.png").default.src} style={{height:"100%", width:"100%", objectFit:'contain'}} /> 
                                        </div>
                                        <div style={{height:"100%", width:"50%"}}>
                                            <img src={require("@assets/gitN.png").default.src} style={{height:"100%", width:"100%", objectFit:'contain'}} /> 
                                        </div>
                                    </div>
                                    <div style={{width:"100%", height:"50%", display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center',marginTop:"-5%"}}>
                                        <div style={{height:"100%", width:"50%"}}>
                                            <img src={require("@assets/github.png").default.src} style={{height:"100%", width:"100%", objectFit:'contain'}} /> 
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                     
                </div>
                        
            </div>
        </motion.div>
        </Layout>
    )

}
export default Technologies