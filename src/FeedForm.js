import foto from "./resources/foto.jpg";
import {AiTwotoneVideoCamera} from "react-icons/ai";
import {BiImages} from "react-icons/bi";
import {FaMapMarkerAlt} from "react-icons/fa";

export default function (){
    return(
        <div className="feed">
            <div className="feedForm">
                <img src={foto} />
                <input type="text" className="feedInput" placeholder="No que você esta pensando?"/>
            </div>
            <div className="feedIcons">
                <div className="iconSingle">
                    <AiTwotoneVideoCamera />
                    <span>Live</span>
                </div>
                <div className="iconSingle img">
                    <BiImages />
                    <span>Photo</span>
                </div>
                <div className="iconSingle map">
                    <FaMapMarkerAlt />
                    <span>Video ao vivo</span>
                </div>
            </div>
        </div>
    );
}