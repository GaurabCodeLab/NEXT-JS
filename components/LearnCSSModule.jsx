import styles from '../styles/mycss.module.css';

const LearnCSSModule = ()=>{
    console.log(styles);
    return (
        <>
        <h1 className={styles.dolly}>learn css module</h1>
        <h1 id={styles.raja}>learn css module second</h1>
        </>
    )
};

export default LearnCSSModule;