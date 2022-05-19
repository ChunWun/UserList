import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
    return (
        <Card>
            {
                props.items.map((item) => {
                    return (
                        <div key={item.name}>
                            <label>{item.name}</label>
                            <label>{item.age}</label>
                        </div>
                    )
                })
            }
        </Card>
    );
}

export default UserList;