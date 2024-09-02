import { InputFieldProps } from "../../types"


const InputField: React.FC <InputFieldProps> = ({ data, value, onChange }) => {
  return (
    <div className="form-group">
         <label htmlFor={data?.name}>{data?.label}</label>
            <input 
                type={data?.type || "text"} 
                name={data?.name} 
                id={data?.id} 
                placeholder={data?.placeholder || 'Enter value here'} 
                value={value}
                onChange={onChange}
            />
    </div>
  )
}

export default InputField