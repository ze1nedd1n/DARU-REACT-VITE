import React from "react";
import { FormControl } from "../../ui/formControl/FormControl";

import styles from "./FirstName.module.scss";

type Props = {
    currentFirstName: string;
    onFirstNameChange: (v: string) => void;
    onNextClick: () => void;
}

export const FirstName: React.FC<Props> = ({currentFirstName,onFirstNameChange,onNextClick}) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.subtitle}>Enter firstname</h2>
            <FormControl 
                type="text"
                label="FirstName"
                placeholder="Enter your FirstName"
                value={currentFirstName}
                onChange={onFirstNameChange}
            />
            <button type="button" onClick={onNextClick}>
                Continue
            </button>
        </div>
    )
}