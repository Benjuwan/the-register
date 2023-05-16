import { useContext } from "react";
import { users } from "../types/user";
import { TheAryContext } from "../providers/TheAryContext";
import { TheNameContext } from "../providers/TheNameContext";
import { TheMailContext } from "../providers/TheMailContext";

export const useAddUser = () => {
    const { isUsers, setUsers } = useContext(TheAryContext);
    const { setName } = useContext(TheNameContext);
    const { setMail } = useContext(TheMailContext)

    const addUser = (
        name: string,
        mail: string,
        displayMode: boolean
    ) => {
        const newAry: Array<users> = [...isUsers];
        const usersObject: users = { name, mail, displayMode };
        newAry.push(usersObject);
        setUsers(newAry);
        setName('');
        setMail('');
    }

    return { addUser }
}