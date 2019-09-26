import React from "react"
import Title from "../Title"
import styles from "../../css/services.module.css"
import services from "../../constants/services"
const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services" />
      <div className={styles.center}>
        {services.map((item, index) => {
          return (
            <atricle key={index} className={styles.service}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </atricle>
          )
        })}
      </div>
    </section>
  )
}

export default Services
