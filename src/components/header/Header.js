import React from 'react';
import './header.css';
import Logo from '../../images/logo-img.jpg'; 


export default function Header ({ scrollToGallery }){
    

          
    return(
            <>
                <header className="header">
                <img src={Logo} className="logo" alt="Логотип" />
                <h2>Автоматизация Заправочных Станций</h2>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item"><a  className="custom-btn btn-15">Главная</a></li>
                        <li className="nav-item"><a  className="custom-btn btn-15" onClick={scrollToGallery}>Подключаемые Колонки</a></li>
                        <li className="nav-item"><a  className="custom-btn btn-15">Прайс</a></li>
                        <li className="nav-item"><a  className="custom-btn btn-15"onClick={scrollToGallery}>Контакты</a></li>
                    </ul>
                </nav>
                </header>
            </>

        )
 }



