import styles from './Video.module.css';

const Video = (props) => {
    return <>

        <div className={styles.card}>
            <img className={styles.image} src={props.url} alt="Video play button" />
            <div>{props.title}</div>
        </div>
    </>
}

export default Video;