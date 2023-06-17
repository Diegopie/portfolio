import { useEffect, useState } from "react";
import { useGlobalContext } from './GlobalContext';

const useBackImg = (props) => {
    const [{ darkMode },] = useGlobalContext();

    const { lightImg, darkImg } = props

    // Set Item Based On darkMode Value
    const [backImg, setBackImg] = useState(() => {
        return (darkMode ?  darkImg: lightImg)
    })

    // On Dark Mode Change, Change Item To Render
    useEffect(() => {
        darkMode ? setBackImg(darkImg) : setBackImg(lightImg);
    }, [darkMode, lightImg, darkImg]);

    return {backImg};
}

export default useBackImg;
