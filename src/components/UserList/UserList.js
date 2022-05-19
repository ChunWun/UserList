import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
    return (
        <Card className={styles.users}>
            <ul>
                {
                    props.items.map((item) => {
                        return (
                            <li key={item.name}>{item.name} {item.age} years old</li>
                        )
                    })
                }
            </ul>

        </Card>
    );
}

export default UserList;