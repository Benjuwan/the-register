import { createContext, FC, ReactNode, useState } from "react";
import { users } from "../types/user";

type defaultStates = {
    isUsers: Array<users>,
    setUsers: React.Dispatch<React.SetStateAction<users[]>>
}
export const TheAryContext = createContext({} as defaultStates);


type defaultTypes = {
    children?: ReactNode;
}
export const TheAryContextFlagment: FC<defaultTypes> = (props) => {
    const [isUsers, setUsers] = useState<Array<users>>([]);

    return (
        <TheAryContext.Provider value={
            {
                isUsers,
                setUsers
            }
        }>
            {props.children}
        </TheAryContext.Provider>
    );
}