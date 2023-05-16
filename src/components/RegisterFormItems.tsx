import { ChangeEvent, FC, memo, useContext } from "react";
import { TheNameContext } from "../providers/TheNameContext";
import { TheMailContext } from "../providers/TheMailContext";
import { TheAryContext } from "../providers/TheAryContext";

type registerItemsType = {
    bool: boolean
}

export const RegisterFormItems: FC<registerItemsType> = memo((props) => {
    /* プロパティ */
    const { bool } = props;

    /* コンテキスト */
    const { isUsers } = useContext(TheAryContext);
    const { isName, setName } = useContext(TheNameContext);
    const { isMail, setMail } = useContext(TheMailContext);

    return (
        <>
            {bool === true ? // true：disabled={isUsers.length >= 5} の制限付き, false：制限なし（編集モード用）
                <>
                    <p>お名前：<input disabled={isUsers.length >= 5} type="text" value={isName} onChange={(e: ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }} /></p>
                    <p>メール：<input disabled={isUsers.length >= 5} type="email" value={isMail} onChange={(e: ChangeEvent<HTMLInputElement>) => { setMail(e.target.value) }} /></p>
                </> :
                <>
                    <p>お名前：<input type="text" value={isName} onChange={(e: ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }} /></p>
                    <p>メール：<input type="email" value={isMail} onChange={(e: ChangeEvent<HTMLInputElement>) => { setMail(e.target.value) }} /></p>
                </>
            }
        </>
    );
});