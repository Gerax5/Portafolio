import Layout from "@components/Layout"
import { motion } from "framer-motion"
import styles from "@styles/Home.module.css";
import { useRouter } from 'next/router';
import CardProjects from "@components/cardProjects/CardProjects";

const MyProjects = () => {
    const router = useRouter();


    const goToTechnologiesPage = () => {
        router.push('/technologies')
    };

    const goToMainPage = () => {
        router.push('/')
    }

    const goToAboutMe = () => {
        router.push('/aboutme')
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
                <div className={styles.textoMenu} onClick={goToAboutMe}>Sobre mi</div>
            </div>
            <div style={{display:'flex', flexDirection:'column', width:"100%", marginTop:"5%", alignItems:'center', justifyContent:'center'}}>
                <div style={{display:'flex', flexDirection:'row', width:"100%", alignItems:'center', justifyContent:'center'}}>
                    <CardProjects img={require("@assets/cssonly.png").default.src} title={"Css Only"} link={"http://uwu-guate.site:3416/"}/>
                    <CardProjects img={require("@assets/htmlHistoria.png").default.src} title={"Html History"} link={"http://uwu-guate.site:3316/"}/>
                    <CardProjects img={require("@assets/chatClase.png").default.src} title={"Chat"} link={"http://uwu-guate.site:3516/"}/>
                </div>
                <div style={{display:'flex', flexDirection:'row', width:"100%", alignItems:'center', justifyContent:'center', marginTop:"1%"}}>
                    <CardProjects img={require("@assets/calculator.png").default.src} title={"Testing project"} link={"https://calculadora-five-nu.vercel.app/"}/>
                    <CardProjects img={require("@assets/BlogZ.png").default.src} title={"Blog Zelda"} link={"http://uwu-guate.site:3601/"}/>
                </div>
            </div>

        </motion.div>
        </Layout>
    )
}

export default MyProjects