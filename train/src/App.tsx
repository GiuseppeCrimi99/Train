import React from 'react';
import './styles/App.css';
import Header from './Header.tsx';
import Sidebar from './SideBar.tsx';
import MainContent from './MainContent.tsx';
import Footer from './Footer.tsx';


const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
