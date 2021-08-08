import classes from './customTheme.module.css';
import {useDispatch} from 'react-redux';
import { ChromePicker } from 'react-color';
import { useState } from 'react';
import Input from '../UI/Input';
import { SetTheme } from '../../Actions/ManageTheme';

const CustomTheme = () => {
    const [color, setcolor] = useState('');
    const [themeName, setThemeName] = useState();
    const [themeError, setThemeError] = useState(true);
    const [showBump, setShowBump] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const dispatch = useDispatch();

    const [combineState, setCombineState]=useState({
        primaryColorLight:'',
        primaryColorDark:'',
        colorOnHover:''
    });

    const themeErrorMsg = "Theme name is required";
    const themeHandler = (value) => {
        if (value.length < 1) {
            setThemeError(true);
        } else {
            setThemeError(false);
        }
        setThemeName(value);
    }

    const submitHandler = () => {
        if (!themeError && combineState.primaryColorDark != '' 
        && combineState.primaryColorLight != ''  
        && combineState.colorOnHover != '') {
            var requestObject ={
                name:themeName,
                primaryColorLight:combineState.primaryColorLight,
                primaryColorDark:combineState.primaryColorDark,
                colorOnHover:combineState.colorOnHover
            }
            dispatch(SetTheme(requestObject));
            setShowSuccess(true);
            RestoreInitialStates();
        } else {
            setShowBump(true);
            setTimeout(() => {
                setShowBump(false);
            }, 300);
        }
    }

    const handlePrimary =()=>{
        setCombineState(preState=>{
            return{
                ...preState,
                primaryColorLight:color
            }
        })
    }

    const handleSecondary =()=>{
        setCombineState(preState=>{
            return{
                ...preState,
                primaryColorDark:color
            }
        })
    }

    const handleHover =()=>{
        setCombineState(preState=>{
            return{
                ...preState,
                colorOnHover:color
            }
        })
    }

    const RestoreInitialStates=()=>{
        setThemeName('');
        setCombineState(preState=>{
            return{
                primaryColorDark:'',
                primaryColorLight:'',
                colorOnHover:''
            }
        });

        setTimeout(()=>{
            setShowSuccess(false);
        }, 1000)

    }
    return (
        <div className={classes.customThemeContainer}>
            <span className={classes.headingTitle}>First select color from color picker then set the color as primary, secondary etc.</span>
            <div className={classes.datePickerContainer}>
                <ChromePicker className={classes.datePicker} color={color} onChange={newColor => setcolor(newColor.hex)}></ChromePicker>
                <div className={classes.themeButtons}>
                    <div className={classes.individualButton}>
                        <button className={classes.button} onClick={handlePrimary}>Set As Primary Color</button> 
                        <span className={classes.colorDiv} style={{ backgroundColor: `${combineState.primaryColorLight}`, color: `${combineState.primaryColorLight}` }}>{combineState.primaryColorLight}</span>
                    </div>
                    <div className={classes.individualButton}>
                        <button className={classes.button} onClick={handleSecondary}>Set As Secondary Color</button> 
                        <span className={classes.colorDiv} style={{ backgroundColor: `${combineState.primaryColorDark}`, color: `${combineState.primaryColorDark}` }}>{combineState.primaryColorDark}</span>
                    </div>
                    <div className={classes.individualButton}>
                        <button className={classes.button} onClick={handleHover}>Set As ColorOnHover</button> 
                        <span className={classes.colorDiv} style={{ backgroundColor: `${combineState.colorOnHover}`, color: `${combineState.colorOnHover}` }}>{combineState.colorOnHover}</span>
                    </div>
                </div>
                
            </div>
            <div className={classes.actionFields}>
                <Input label="Theme Name"
                    inputHandler={themeHandler}
                    inValid={themeError}
                    errorMsg={themeErrorMsg}
                    showBump={showBump}
                    input={
                        {
                            type: 'text',
                            id: 'theme',
                            value: themeName
                        }
                    }></Input>
                    <button onClick={submitHandler} className={classes.button}>Add Theme</button>
            </div>
            {showSuccess && <span className={classes.headingTitle}>Task Completed</span>}
        </div>
    )
}

export default CustomTheme;