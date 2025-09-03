import type inputInterface from "../Types/Types";


const Input=({...inputInterface}:inputInterface)=> {


    return(
        <div>
            <input 
            type={inputInterface.type}
            placeholder={inputInterface.placeholder}
            value={inputInterface.value}
            onChange={inputInterface.onChange}
            className={inputInterface.className}
             />
        </div>
    )
}

export default Input;