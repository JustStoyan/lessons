import Video from './Video';
import styles from './Videos.module.css';

const Videos = () => {

    const videosArray = [
        {
            url: 'https://static.vecteezy.com/system/resources/previews/000/630/674/original/play-button-icon-design-illustration-vector.jpg',
            title: 'JS-Introduction'
        },
        {
            url: 'https://static.vecteezy.com/system/resources/previews/000/630/674/original/play-button-icon-design-illustration-vector.jpg',
            title: 'JS-Introduction'
        },
        {
            url: 'https://static.vecteezy.com/system/resources/previews/000/630/674/original/play-button-icon-design-illustration-vector.jpg',
            title: 'JS-Introduction'
        },
        {
            url: 'https://static.vecteezy.com/system/resources/previews/000/630/674/original/play-button-icon-design-illustration-vector.jpg',
            title: 'JS-Introduction'
        },
        {
            url: 'https://static.vecteezy.com/system/resources/previews/000/630/674/original/play-button-icon-design-illustration-vector.jpg',
            title: 'JS-Introduction'
        },
        {
            url: 'https://static.vecteezy.com/system/resources/previews/000/630/674/original/play-button-icon-design-illustration-vector.jpg',
            title: 'JS-Introduction'
        },

    ]

    return <>

        <div className={styles.videos}>

            {videosArray.map((video) => {
                return <Video url={video.url} title={video.title} />
            })}
        </div>

    </>
}


export default Videos;