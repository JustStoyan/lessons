const Video = (props) => {
    return <>

        <div>
            <img src={props.url} width="420" height="300" alt="Video play button" />
            <div>{props.title}</div>
        </div>
    </>
}

export default Video;