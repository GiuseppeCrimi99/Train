import React from 'react';
import './styles/MainContent.css'

function MainContentComponent() {
  return (
    <main className="main-content">
      <div className='hero-content'>
        {/* QUA FACCIAMO IL RENDER DELL'HERO COMPLETO DI TUTTO, BUTTON ETC... */}
        <div className='cntr-main'>
          <div className='cntr-hero'>
            <div className='cntr-hero-text'>
              <h1>Lorem Ipsum</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='cntr-hero-btn'>
              <button>Lorem Ipsum</button>
            </div>
          </div>
        </div>
        <p>qua ci vanno le card</p>
      </div>
    </main>
  );
}

export default MainContentComponent;
