import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp,faInstagram} from '@fortawesome/free-solid-svg-icons';
import "./Footer.css"


class Footer extends React.Component{



    render(){
        const handleScrollToTop = () => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          };
        return(

            <footer>
                <div onClick={handleScrollToTop}>
                    <FontAwesomeIcon className="up-btn" icon={faArrowUp} bounce />
                </div>
                <p>Все права защищены &copy;</p>
                <div className="social">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
    </footer>
        )
    }
}

export default Footer;
