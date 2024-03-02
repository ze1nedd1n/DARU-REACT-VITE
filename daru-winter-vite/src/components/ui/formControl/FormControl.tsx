import { TextField } from "../textField/TextField";
import "./FormControl.scss";

type Props = {
    type:string;
    label: string;
    placeholder?:string;
    value: string;
    onChange: (value:string) => void;
}

export const FormControl: React.FC<Props> = ({
    type,
    label,
    placeholder,
    value,
    onChange
}) => {
    return (
        <div className="FormControl">
            <label className="formControlLabel">{label}</label>
            <TextField 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
             />

        </div>
    );
};