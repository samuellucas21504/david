import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { Themes } from "../themes";

interface ThemeSwitchProps {
    className: string | undefined,
}

export const ThemeSwitch = ({ className } : ThemeSwitchProps) => {
    const { theme, setTheme } = useTheme();

    const isLightMode = theme == Themes.light;

    const handleTheme = () => {
        console.log(theme);
        if(theme == Themes.light) {
            setTheme(Themes.dark);
        } else {
            setTheme(Themes.light);
        }
    }

    return (
        <button type="button" className={className} onClick={handleTheme}>
            <FontAwesomeIcon icon={faLightbulb}  size="xl" color={isLightMode ? '#000' : '#fff'}/>
        </button>
    );
}
