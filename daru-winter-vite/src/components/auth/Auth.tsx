import { useState } from 'react';
import './Auth.css';
import { UserName } from './userName/UserName';
import { UserData } from '../../types';
import { Password } from './password/Password';
import { FirstName } from './firstName/FirstName';
import { LastName } from './lastName/LastName';

const UserDataDefaults: UserData = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
}

export const Auth = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [userData, setUserData] = useState<UserData>(UserDataDefaults);

    const handleUserDataChange = (FieldName: string, NewValue: string) => {
        setUserData((prevUserData) => ({
            ...prevUserData,
            [FieldName]: NewValue,
        }));
    };


    console.log(userData);

    const handleNextClick = () => {
        setCurrentStep(v => v+1);

    }
    return (
        <div className='Auth'>
            <h1 className='Auth__pageTitle'>Registration</h1>
            {currentStep == 0 &&(
                <UserName 
                    currentUsername={userData.username} 
                    onUsernameChange={(v) => 
                        handleUserDataChange('username', v)
                    }
                    onNextClick={handleNextClick}
                />
            )}
            {currentStep == 1 &&(
                <Password 
                    currentPassword={userData.password} 
                    onPasswordChange={(v) => 
                        handleUserDataChange('password', v)
                    }
                    onNextClick={handleNextClick}
                />
            )}
            {currentStep == 2 &&(
                <FirstName 
                    currentFirstName={userData.firstname} 
                    onFirstNameChange={(v) => 
                        handleUserDataChange('firstname', v)
                    }
                    onNextClick={handleNextClick}
                />
            )}
            {currentStep == 3 &&(
                <LastName 
                    currentLastName={userData.lastname} 
                    onLastNameChange={(v) => 
                        handleUserDataChange('lastname', v)
                    }
                    onNextClick={handleNextClick}
                />
            )}

        </div>
    );
};