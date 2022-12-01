import React, {useContext} from 'react';
import { ThemeContext } from './App';
//чтобы использовать контекст внутри функционального компонента - нужно 
//импортировать хук useContext!!!
const FunctionalComponent = () => {
    //используем контекст внутри функционального компонента
    const darkTheme = useContext(ThemeContext)

    const themeStyles = {
        backgroundColor: darkTheme? `#333` : `#CCC`,
        color: darkTheme? `#CCC` : `#333`,
        padding: "15px",
        margin: "15px"
    }
    return <div style={themeStyles}>Функциональный компонент</div>;
}

export default FunctionalComponent;