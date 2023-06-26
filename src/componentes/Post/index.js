import './Post.css'

const Post = (props) =>{
    return(
        <div>
            <h1>Título</h1>
            <img src={props.src} alt={props.alt}></img>
            <p>{props.texto}</p>
        </div>
    )
}

export default Post