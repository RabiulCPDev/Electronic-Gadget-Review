import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import './product.css';


const Product  = (props) => {
    return (
        <>
            <div className="product_card">
                <div className="product_content">
                     <div className="card_offer">
                        <p className="offer">{props.discount}</p>
                    </div>
                    <div className="card_icon">
                    <FontAwesomeIcon  className="Heart" icon={faHeart} />
                    <FontAwesomeIcon className="Eye" icon={faEye} />
                    </div>
                    <div className="card_image" >
                        <img src={props.path} alt="Not Found"></img>
                    </div>
                    
                    <div className="add_to_card">
                     <p> Add to Card </p> 
                     <h4>Price {props.price}</h4>
                    </div>

                </div>

               
                    
             

            </div>
        
        </>
       

    ) ;
};

export default Product;