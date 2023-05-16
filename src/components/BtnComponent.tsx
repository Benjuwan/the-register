import { FC, memo, useContext } from "react";
import { TheNameContext } from "../providers/TheNameContext";
import { TheMailContext } from "../providers/TheMailContext";

type btnProps = {
    function: (
        targetEl001: string,
        targetEl002: string,
        targetBool: boolean
    ) => void;
}

export const BtnComponent: FC<btnProps> = memo((props) => {
    const { isName } = useContext(TheNameContext);
    const { isMail } = useContext(TheMailContext);

    return (
        <button type="button"
            disabled={(isName.length && isMail.length) <= 0}
            onClick={() => {
                props.function(isName, isMail, false);
            }}>add
        </button>
    );
});