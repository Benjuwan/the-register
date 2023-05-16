import { useContext } from "react";
import { TheAryContext } from "../providers/TheAryContext";

export const useRemoveUsers = () => {
    const { isUsers, setUsers } = useContext(TheAryContext);

    const removeUsers = (
        indexNumber: number
    ) => {
        const newAry = [...isUsers];
        newAry.splice(indexNumber, 1);
        setUsers(newAry);
    }

    return { removeUsers }
}