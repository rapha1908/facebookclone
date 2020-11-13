
import imagem1 from "./resources/stories 1.jpg";
import imagem2 from "./resources/stories2.jpg";
import imagem3 from "./resources/stories3.jpg";
import imagem4 from "./resources/logo.jpg";

import foto from "./resources/foto.jpg"
export default function (){
    return(

        <div className="stories">
            <div className="storiesCard" style={{backgroundImage: "url(" + imagem1 + ")"}}>
                <img src={foto} className="photo_profile_stories"/>
                <p>Artfem</p>
            </div>
            <div className="storiesCard" style={{backgroundImage: "url(" + imagem2 + ")"}}>
                <img src={foto} className="photo_profile_stories"/>
                <p>Dev web</p>
            </div>
            <div className="storiesCard" style={{backgroundImage: "url(" + imagem3 + ")"}}>
                <img src={foto} className="photo_profile_stories"/>
                <p>Dev web</p>
            </div>
            <div className="storiesCard" style={{backgroundImage: "url(" + imagem4 + ")"}}>
                <img src={foto} className="photo_profile_stories"/>
                <p>Dev web</p>
            </div>
            <div className="storiesCard" style={{backgroundImage: "url(" + imagem2 + ")"}}>
                <img src={foto} className="photo_profile_stories"/>
                <p>Dev web</p>
            </div>



        </div>
    );

}
