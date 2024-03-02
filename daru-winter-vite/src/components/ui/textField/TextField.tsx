import React, { ChangeEvent } from "react";
import "./TextField.scss";

type Props = {
    placeholder?:string;
    type:string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}



export const TextField: React.FC<Props> = ({  ...inputProps }) => {
    return (<div className="TextField">
        <input {...inputProps}   />
    </div>
    )
}