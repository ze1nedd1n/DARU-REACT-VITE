import React from "react";
import { FormControl } from "../../ui/formControl/FormControl";

import styles from "../userName/UserName.module.scss";

type Props = {
    currentPassword: string;
    onPasswordChange: (v: string) => void;
    onNextClick: () => void;
}

export const Password: React.FC<Props> = ({
    currentPassword,
    onPasswordChange,
    onNextClick
}) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.subtitle}>Enter password</h2>
            <FormControl 
                type="password"
                label="Password"
                placeholder="Enter your password"
                value={currentPassword}
                onChange={onPasswordChange}
            />
            <button type="button" onClick={onNextClick}>
                Continue
            </button>
        </div>)
}