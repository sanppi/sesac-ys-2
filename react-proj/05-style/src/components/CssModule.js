import styles from "../styles/origin.module.css";

function CssModule() {
  //  ['a', 'b'].join(' ') => 결과: 'a b' > 띄어쓰기
  return (
    <>
      <div className={styles.origin}>
        <div className={`${styles.box} ${styles.red}`}></div>
        <div className={[styles.box, styles.orange].join(" ")}></div>
        <div className={`${styles.box} ${styles.yellow}`}></div>
        <div className={`${styles.box} ${styles.green}`}></div>
        <div className={`${styles.box} ${styles.blue}`}></div>
        <div className={`${styles.box} ${styles.purple}`}></div>
      </div>
    </>
  );
}

export default CssModule;
