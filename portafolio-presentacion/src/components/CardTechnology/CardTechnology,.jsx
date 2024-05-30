import styles from "@styles/Home.module.css";

const CardTechnology = ({ titulo, technologies }) => {
    return (
      <div className={styles.cardTechnologies}>
        <div style={{ fontSize: "40px", fontWeight: 'bold', marginLeft:"5%" }}>
          {titulo}
        </div>
        <div style={{ height: "20%", width: "90%", display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          {Object.entries(technologies).map(([key, value]) => (
            <div key={key} style={{ width: "20%", height: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: value.top ? value.top: 0, marginLeft:"4%"  }}>
              <div style={{ width: "100%", height: "80%", display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                <img src={value.img.default.src} style={{ width: "100%", height: "100%", objectFit: 'cover' }} alt={key} />
              </div>
              <div style={{ height: "20%", width: "100%", textAlign: 'center', color:'white' }}>
                {key}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default CardTechnology;
  