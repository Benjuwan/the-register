import { createContext, FC, ReactNode, useState } from "react";

type defaultStates = {
    isName: string,
    setName: React.Dispatch<React.SetStateAction<string>>
}
export const TheNameContext = createContext({} as defaultStates);


type defaultTypes = {
    children?: ReactNode;
}
export const TheNameContextFlagment: FC<defaultTypes> = (props) => {
    const [isName, setName] = useState<string>('');

    return (
        <TheNameContext.Provider value={
            {
                isName,
                setName
            }
        }>
            {props.children}
        </TheNameContext.Provider>
    );
}