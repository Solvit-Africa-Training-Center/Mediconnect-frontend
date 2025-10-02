import type{ InputInterface } from "../Types/common/base.types";

const Input = ({ type, placeholder, value, onChange, className, name, required}:InputInterface) => {
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