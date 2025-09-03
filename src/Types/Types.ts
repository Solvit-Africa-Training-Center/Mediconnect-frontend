
export default interface inputInterface {
    name:string;
    type:string;    
    placeholder:string;
    value:string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className:string;
    required:boolean; 
}