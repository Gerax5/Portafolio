import styles from "@styles/Home.module.css";
import { useEffect } from 'react';
import Layout from '@components/Layout';
import { motion } from 'framer-motion';
import CardTechnology from "@components/CardTechnology";
import { useRouter } from 'next/router';

const backend = {
    "python" : {
        "img": require("@assets/python.png")
    },
    "php": {
        "img": require("@assets/php.png"),
        "top": 20
    },
    "java": {
        "img": require("@assets/java.png"),
        "top": -15
    },
    "Node.js": {
        "img": require("@assets/Node.png"),
        "top": -18
    }
}

const frontend = {
    "React": {
        "img": require("@assets/react.png")
    },
    "javaScript": {
        "img": require("@assets/Javascript.png"),
        "top": 10
    },
    "next": {
        "img": require("@assets/Next.png"),
        "top": -5
    },
    "vite": {
        "img": require("@assets/vite.png"),
        "top": -5
    }
}

const api = {
    "Rest": {
        "img":require("@assets/rest.png")
    },
    "GraphQL": {
        "img": require("@assets/Graphql.png")
    }
}

const bd = {
    "PostgresSQL": {
        "img": require("@assets/postgres.png")
    },
    "MariaDB": {
        "img": require("@assets/maria.png"),
        "top": 20
    },
    "phpMyAdmin":{
        "img": require("@assets/phpmyadmin.png")
    },
    "mySQL": {
        "img": require("@assets/mysql.png"),
        "top": 20
    },
    "Oracle": {
        "img": require("@assets/Oracle.png"),
        "top": 30
    }
}

const tecnologias = {
    "Typescript": {
        "img": require("@assets/typescript.png")
    },
    "Git": {
        "img": require("@assets/gitN.png")
    },
    "Github": {
        "img": require("@assets/github.png")
    }
}

const Technologies = () => {
    const router = useRouter();

    const goToAboutPage = () => {
        router.push('/aboutme')
    };

    const goToMainPage = () => {
        router.push('/')
    }

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
                <div className={styles.textoMenu} onClick={goToMainPage}>Inicio</div>
                <div className={styles.textoMenu} onClick={goToAboutPage}>About me</div>
                <div className={styles.textoMenu}>Mis proyectos</div>
            </div>
            <div style={{width:"100%", height:"100%", display:'flex', flexDirection:'column'}}>
                <div style={{display:'flex', flexDirection:'row', height:"100%", width:"100%", alignItems:'center', justifyContent:'center', marginTop:"4%"}}>
                    <CardTechnology titulo={"Backend"} technologies={backend}/>
                    <CardTechnology titulo={"Frontend"} technologies={frontend} />
                </div>
                <div style={{display:'flex', flexDirection:'row', height:"100%", width:"100%", alignItems:'center', justifyContent:'center', marginTop:"1%"}}>
                    <CardTechnology titulo={"Apis"} technologies={api} />
                    <CardTechnology titulo={"Bases de datos"} technologies={bd} />
                </div>
                <div style={{display:'flex', flexDirection:'row', height:"100%", width:"100%", alignItems:'center', justifyContent:'center', marginTop:"1%"}}>
                    <CardTechnology titulo={"Tenologias"} technologies={tecnologias} />
                    
                </div>
            </div>
        </motion.div>
        </Layout>
    )
}

export default Technologies