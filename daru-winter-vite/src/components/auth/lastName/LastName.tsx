import React from "react";
import { FormControl } from "../../ui/formControl/FormControl";

import styles from "./LastName.module.scss";

type Props = {
    currentLastName: string;
    onLastNameChange: (v: string) => void;
    onNextClick: () => void;
}

export const LastName: React.FC<Props> = ({currentLastName,onLastNameChange,onNextClick}) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.subtitle}>Enter firstname</h2>
            <FormControl 
                type="text"
                label="LastName"
                placeholder="Enter your LastName"
                value={currentLastName}
                onChange={onLastNameChange}
            />
            <button type="button" onClick={onNextClick}>
                Continue
            </button>
        </div>
    )
}