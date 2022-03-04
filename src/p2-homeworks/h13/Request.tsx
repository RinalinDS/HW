import React, {ChangeEvent, useState} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {RequestsAPI} from "./RequestsAPI";

export const Request = () => {
    const [value, setValue] = useState<boolean>(true)
    const [response, setResponse] = useState<any>('')
    const setCheckboxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }
    const sendCheckBoxValue = () => {
       RequestsAPI.postCheckboxValue(value as boolean)
           .then(res => {
               setResponse(res.data.errorText)
           })
           .catch(error => {
            console.log({...error});
            console.log(error.response ? error.response.data.errorText : error.message);
               setResponse(error.response ? error.response.data.errorText : error.message)
        })
    }
    return (
        <div>
            <SuperCheckbox onChange={setCheckboxValue} checked={value}/>
            <SuperButton onClick={sendCheckBoxValue} > Send </SuperButton>
            <div>{response}</div>
        </div>
    );
};

