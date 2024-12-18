import getButtonStyling from "./getButtonStyleType";

function Button({ buttonType, text, styleType, onClickHandler }) {

    return(
        <button
        type={buttonType}
        onClick={onClickHandler}
        className={`px-4 py-2 bg-blue-500 ${getButtonStyling(styleType)} text-white rounded-md transition-all`}>
            {text}
            </button>
    );
}


export default Button;