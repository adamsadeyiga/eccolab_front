import React from "react";

const AppButton = ({text, className, style, disabled, onClick}) => {
  return (
    <React.Fragment>
        <button className={`btn ${className}`} style={style} disabled={disabled} onClick={onClick}>
            {text}
        </button>
    </React.Fragment>
  )
}

export default AppButton;
