import React, { useState } from 'react';
import './App.css';
import FunctionalComponent from './FunctionalComponent';


export const ThemeContext = React.createContext()
//1.Создаем контекст

function App() {

  const [darkTheme, setDarkTheme] = useState("true")
//2.Создаем состояние "включена ли темная тема?"


  function toggleTheme(){
    setDarkTheme(prevDarkTheme =>!prevDarkTheme)
    //функция которая тогглит туда обратно темную тему
  }
  return (
    <div className = "App">
    <ThemeContext.Provider value ={darkTheme}>
    {/*!!!!3!!!! Обязательно нужно оборачивать в контекст провайдер весь код, которому нужен
    доступ к контексту! Доступ к контексту получают не только обернутые компоненты,
    но и их дети. У контекст провайдера есть единстенный проп - валью, который обозна
    чает значение самого котекста */}
        <button onClick = {toggleTheme}>Переключить тему</button>
      <FunctionalComponent/>
    </ThemeContext.Provider>
    </div>
  );
}

export default App;
