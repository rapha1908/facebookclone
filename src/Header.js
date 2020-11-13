import {FaAlignJustify, FaFacebook, FaSearch} from "react-icons/all";
export default function (){

    return(
    <div className="header">
        <div className="headerLeft">
            <div className="logo-fb">
                <FaFacebook />
            </div>
            <div className="search-fb">
                <FaSearch />
            </div>
            <div className="menu-fb">
                <FaAlignJustify />
            </div>
        </div>
        <div className="headerRight">
            <div className="plus-btn">
                +
            </div>

        </div>


    </div>
    );
}