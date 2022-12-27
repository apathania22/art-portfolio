import './index.scss'
export default function TextField(props){
    return(
        <div>
            <input 
            className="custom-textField"
            type={props.type} 
            required={true}
            placeholder={props.placeholder} 
            name={props.name}
            />
        </div>
    )
}