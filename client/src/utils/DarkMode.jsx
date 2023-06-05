import { useEffect, useState } from "react";
import { useGlobalContext } from './GlobalContext';

const useDarkMode = (props) => {
    const [{ darkMode },] = useGlobalContext();

    const { lightItem, darkItem } = props

    // Set Item Based On darkMode Value
    const [themedItem, setThemedItem] = useState(() => {
        return (darkMode ?  darkItem: lightItem)
    })

    // On Dark Mode Change, Change Item To Render
    useEffect(() => {

        darkMode ? setThemedItem(darkItem) : setThemedItem(lightItem);

    }, [darkMode, lightItem, darkItem]);

    return themedItem;
}

export default useDarkMode;
