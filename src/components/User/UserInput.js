import React, { useState } from "react";
import Button from "../Element/Button.js";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal.js";
import styles from "./UserInput.module.css";

const UserInput = (props) => {

    const [errorData, setErrorData] = useState({
        title: null,
        content: null
    });

    const [userData, setUserData] = useState({
        name: '',
        age: ''
    })

    const onInputNameHandler = (event) => {
        setUserData((prevState) => {
            return (
                {
                    ...prevState,
                    name: event.target.value,
                    age: userData.age
                }
            );

        })
    }

    const onInputAgeHandler = (event) => {
        setUserData((prevState) => {
            return (
                {
                    ...prevState,
                    name: userData.name,
                    age: event.target.value
                }
            );

        })
    }

    const clearData = () => {
        setUserData({
            name: '',
            age: ''
        })
    }

    const checkLegitimacy = () => {
        if (userData.name.trim().length === 0 || userData.age.trim().length === 0) {
            setErrorData({
                title: 'Hey',
                content: 'Please enter name and age.'
            })
            return false;
        }

        if (userData.age < 0) {
            setErrorData({
                title: 'Are you kidding me?',
                content: 'Please enter one correct age number.'
            })
            return false;
        }
        return true;

    }

    const onConfirmErrorHandler = () => {
        setErrorData({
            title: null,
            content: null
        })
    }

    const onSummitHandler = (event) => {
        event.preventDefault();
        if (checkLegitimacy()) {
            props.addNewUser({
                name: userData.name,
                age: userData.age
            });
            clearData();
        };
    }

    return (
        <React.Fragment>
            {errorData.title && <ErrorModal title={errorData.title} content={errorData.content} onConfirm={onConfirmErrorHandler}></ErrorModal>}
            <form onSubmit={onSummitHandler}>
                <Card className={styles.input}>
                    <label>Name</label>
                    <input type="text" value={userData.name} onChange={onInputNameHandler}></input>

                    <label>Age</label>
                    <input type="number" min={0} max={110} value={userData.age} onChange={onInputAgeHandler}></input>
                    <Button type="summit">Add</Button>
                </Card>
            </form>
        </React.Fragment >

    );
}

export default UserInput;