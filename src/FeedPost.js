
import feed1 from "./resources/feed1.jpg";

export default function (props){
    return(
        <div className="feedPosts">
            <div className="feedPostSingle">
                <div className="feedPost_profile">
                    <img src={props.photo_profile} />
                    <h3>{props.nome} <br/><span>{props.horario}</span></h3>

                </div>
                <div className="feedPost_content">
                    <p>{props.conteudo}</p>
                    <img src={props.foto} />

                </div>

            </div>
        </div>
    );
}