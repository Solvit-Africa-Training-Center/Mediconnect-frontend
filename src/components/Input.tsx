import inputInterface from "../Types/Types";

const Input = ({ type, placeholder, value, onChange, className, name, required}:inputInterface) => {
    return (
        <input 
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={className}
            required={required}
        />
    )
}

export default Input;