import React from "react";
import styles from "./Image.module.css";
import background from "./assets/backgroundimage.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <article className={styles.article}>
    <img className={styles.picture} src={background} alt="background" />
    <h1 style={{
      fontSize: 80,
      position: "absolute",
      textalign:"center",
      top:80,
      color:"white",
      left:450,
    }}>Attention Detector</h1>
    <br />
    <ul>
      <li style={{
        fontSize: 30,
        color: "white",
        textalign: "center",
        position: "absolute",
        top: 250,
        bottom: 0,
        left: 700,
        right: 0,
      }}>
        <Link to="/">Read Me</Link>
      </li>
      <li style={{
        fontSize: 30,
        color: "white",
        textalign: "center",
        position: "absolute",
        top: 300,
        bottom: 0,
        left: 700,
        right: 0,
      }}>
        <Link to="/control">Get Started</Link>
      </li>
    </ul>
    </article>
  );
};
  
export default Home;