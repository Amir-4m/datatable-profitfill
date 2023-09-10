import {WhiteButton, GreenButton, BlackButton} from './button.styles'

export const BUTTON_TYPE_CLASSES = {
    green: 'green',
    white: 'white',
    black: 'black'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.green) => (
    {
        [BUTTON_TYPE_CLASSES.green]: GreenButton,
        [BUTTON_TYPE_CLASSES.white]: WhiteButton,
        [BUTTON_TYPE_CLASSES.black]: BlackButton,

    }[buttonType]
)
const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton 
        {...otherProps}
        >
            {children}
        </CustomButton>
    )
}

export default Button;