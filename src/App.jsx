import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { backgrounds } from './backgrounds';

function App() {
   const [count, setCount] = useState(0);
   const body = document.querySelector('.body');
   const [background, setBackGround] = useState(backgrounds[0]);
   const changeBackGround = () => {
      setBackGround((prevBackground) => {
         const currentIndex = backgrounds.indexOf(prevBackground);
         const nextIndex = (currentIndex + 1) % backgrounds.length;
         console.log(nextIndex);
         return backgrounds[nextIndex];
      });
   };

   useEffect(() => {
      body.style.background = background;
   }, [background]);

   useEffect(() => {
      console.log('монтирование');
      const intervalId = setInterval(changeBackGround, 3000);
      return () => {
         console.log('рамонтирование');
         clearInterval(intervalId);
      };
   }, []);

   return (
      <>
         <div>
            <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
               <img src={viteLogo} className='logo' alt='Vite logo' />
            </a>
            <a href='https://react.dev' target='_blank' rel='noreferrer'>
               <img src={reactLogo} className='logo react' alt='React logo' />
            </a>
         </div>
         <h1>Vite + React</h1>
         <div className='card'>
            <button onClick={() => setCount((count) => count + 1)}>
               count is {count}
            </button>
            <p>
               Edit <code>src/App.jsx</code> and save to test HMR
            </p>
         </div>
         <p className='read-the-docs'>
            Click on the Vite and React logos to learn more
         </p>
      </>
   );
}

export default App;
