import './Button.css';

function Button({ children, variant = 'primary', onClick, type = 'button', disabled = false, className = '' }) {
    return (
        <button
            className={`btn btn--${variant}${className ? ` ${className}` : ''}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
