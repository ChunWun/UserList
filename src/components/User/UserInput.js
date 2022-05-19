import { useState } from "react";
import Card from "../UI/Card";
import styles from "./UserInput.module.css";

const UserInput = (props) => {

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

    const onSummitHandler = (event) => {
        event.preventDefault();
        props.addNewUser({
            name: userData.name,
            age: userData.age
        });
        clearData();
    }

    return (
        <form onSubmit={onSummitHandler}>
            <Card>
                <label>Name</label>
                <input type="text" value={userData.name} onChange={onInputNameHandler}></input>

                <label>Age</label>
                <input type="number" min={0} max={110} value={userData.age} onChange={onInputAgeHandler}></input>
                <div>
                    <button type="summit">Add</button>
                </div>
            </Card>
        </form>
    );
}

export default UserInput;