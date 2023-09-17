import photos1 from '../photos/keyboard.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import './Test.css';
const Test=  ({image,size}) => {
    return (
        <>
            <div className="product_card">
                <div className="product_content">
                    <div className="product_coi">
                    <div className="card_offer">
                        <p className="offer">-35%</p>
                    </div>
                    <div className="card_icon">
                    <FontAwesomeIcon  className="Heart" icon={faHeart} />
                    <FontAwesomeIcon className="Eye" icon={faEye} />
                    </div>
                    </div>
                     
                    <div className="card_image">
                        <img src={image} alt="" ></img>
                    </div>
                    
                    
                    <div className="add_to_card">
                     <p> Add to Card </p> 
                     <h4>Price $400</h4>
                    </div>

                </div>

            </div>
        
        </>
       

    ) ;
};

export default Test;