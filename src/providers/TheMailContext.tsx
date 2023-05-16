import { createContext, FC, ReactNode, useState } from "react";

type defaultStates = {
    isMail: string,
    setMail: React.Dispatch<React.SetStateAction<string>>
}
export const TheMailContext = createContext({} as defaultStates);


type defaultTypes = {
    children?: ReactNode;
}
export const TheMailContextFlagment: FC<defaultTypes> = (props) => {
    const [isMail, setMail] = useState<string>('');

    return (
        <TheMailContext.Provider value={
            {
                isMail,
                setMail
            }
        }>
            {props.children}
        </TheMailContext.Provider>
    );
}