import styles from "@styles/Home.module.css";

const CardProjects = ({img, title, link}) => {

    const goToLink = () => {
        window.open(link,"_blank")
    }

    return (
        <div className={styles.outerDiv} style={{marginLeft:"1%"}} onClick={goToLink}>
            <div className={styles.imageProject}>
                <img src={img} style={{height:"100%", width:"100%", objectFit:'contain'}}/>
            </div>
            <div style={{height:"20%", width:"100%", textAlign:'center', fontSize:"40px", color:'white'}}>
                {title}
            </div>
        </div>
    )
}

export default CardProjects