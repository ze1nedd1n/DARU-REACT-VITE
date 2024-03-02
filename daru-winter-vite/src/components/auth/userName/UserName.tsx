import React from "react";
import { FormControl } from "../../ui/formControl/FormControl";

import styles from "./UserName.module.scss";

type Props = {
    currentUsername: string;
    onUsernameChange: (v: string) => void;
    onNextClick: () => void;
}

export const UserName: React.FC<Props> = ({currentUsername,onUsernameChange,onNextClick}) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.subtitle}>Enter username</h2>
            <FormControl 
                type="text"
                label="UserName"
                placeholder="Enter your username"
                value={currentUsername}
                onChange={onUsernameChange}
            />
            <button type="button" onClick={onNextClick}>
                Continue
            </button>
        </div>
    )
}