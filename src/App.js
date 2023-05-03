import './App.css';
import React, { useRef } from 'react';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import GalleryFoto from './components/gallery/GalleryFoto';
import Header from './components/header/Header';
import InfoFoto from './components/infoFoto/InfoFoto';
import SecondInfo from './components/secondInfoFoto/SecondInfo';


function App() {

  const ContactsRef = useRef(null);
  const GalleryRef = useRef(null);

  const scrollToGallery = () => {
    if (ContactsRef.current) {
      ContactsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="App">
       <Header scrollToGallery={scrollToGallery}/>
       <InfoFoto/>
       <GalleryFoto ref={GalleryRef}/>
       <SecondInfo/>
       <Contacts ref={ContactsRef}/>
       <Footer/>
    </div>
  );
}

export default App;
