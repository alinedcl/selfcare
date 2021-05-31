import React from 'react' 
import '../styles/Button.css'

const STYLES = [
    'btn--green'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    return (
        <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type}>
        {children}
        </button>
    )
}