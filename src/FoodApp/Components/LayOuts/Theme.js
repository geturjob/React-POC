import classes from './Theme.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Theme = () => {
    const allThemes = useSelector(state => state.ThemeReducer.Themes);
    const handleSelectChnage = (e) => {
        const themeValue = e.target.value;
        const selectedTheme = allThemes.filter(item => item.name == themeValue);
        document.documentElement.style.setProperty("--primaryColorLight", selectedTheme[0].primaryColorLight);
        document.documentElement.style.setProperty("--primaryColorDark", selectedTheme[0].primaryColorDark);
        document.documentElement.style.setProperty("--colorOnHover", selectedTheme[0].colorOnHover);
    }

    return (
        <div>
            <select className={classes.select} onChange={handleSelectChnage}>
                {allThemes.map(item => (
                    <option key={item.name} className={classes.option} value={item.name} id={item.name}>{item.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Theme;