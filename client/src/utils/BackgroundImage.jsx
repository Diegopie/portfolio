import { useEffect, useState } from "react";
import { useGlobalContext } from './GlobalContext';

const useBackImg = (props) => {
    const [{ darkMode },] = useGlobalContext();

    const { lightImg, darkImg, invisImgLight, invisImgDark } = props

    // Set Item Based On darkMode Value
    const [backImg, setBackImg] = useState(() => {
        return (darkMode ?  darkImg: lightImg)
    })

    // Set Small Img Based on backImg { requires proper file name convention in assets }
    const [smallBackImg, setSmallBackImg] = useState(`App-backImg-Pulse ${backImg}-small`);

    // Set State for Invisible Img State
    const [invisImg, setInvisImg] = useState(() => {
        return (darkMode ?  invisImgLight: invisImgDark)
    })

    // On Dark Mode Change, Change Item To Render
    useEffect(() => {
        if (darkMode) {
            setBackImg(darkImg);
            setInvisImg(invisImgDark);
            setSmallBackImg(`App-backImg-Pulse ${darkImg}-small`)
        } else {
            setBackImg(lightImg);
            setInvisImg(invisImgLight);
            setSmallBackImg(`App-backImg-Pulse ${lightImg}-small`)
        }
    }, [darkMode, lightImg, darkImg, invisImgDark, invisImgLight]);

    return { invisImg, backImg, smallBackImg, setSmallBackImg };
}

export default useBackImg;
