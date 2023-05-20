import { FC, memo, useContext } from "react";
import { TheAryContext } from "../providers/TheAryContext";
import { TheNameContext } from "../providers/TheNameContext";
import { TheMailContext } from "../providers/TheMailContext";
import { RegisterFormItems } from "./RegisterFormItems";
import { useEditUser } from "../hooks/useEditUsers";
import { useRemoveUsers } from "../hooks/useRemoveUsers";

type contentsType = {
    editState: boolean;
    editFunction: (arg: boolean) => void;
}

export const Contents: FC<contentsType> = memo((props) => {
    /* プロパティ */
    const { editState, editFunction } = props;

    /* コンテキスト */
    const { isUsers } = useContext(TheAryContext);
    const { isName, setName } = useContext(TheNameContext);
    const { isMail, setMail } = useContext(TheMailContext);

    /* Hooks */
    const { editUser } = useEditUser();
    const { removeUsers } = useRemoveUsers();

    return (
        <ul>
            {
                isUsers.map((user, i) => (
                    <li key={i}>
                        {/* user.displayMode: boolean の状態で個々の閲覧と編集モードを切替 */}
                        {user.displayMode ?
                            <RegisterFormItems bool={false} /> :
                            <p><span>{user.name}</span>{user.mail}</p>
                        }
                        <div className="btns">
                            {/* 登録内容の編集ボタン：true：編集完了, false：編集モードへ切替 */}
                            {user.displayMode ?
                                <button className="editBtn" type="button"
                                    onClick={() => {
                                        editFunction(!editState);
                                        editUser(i, isName, isMail);
                                        setName('');
                                        setMail('');
                                    }}>save</button> :
                                <button className="editBtn" type="button" onClick={() => {
                                    editFunction(!editState);
                                    /* user.displayMode = true; 編集モードをON */
                                    user.displayMode = true;
                                }}>edit</button>
                            }
                            {/* 登録内容の削除ボタン */}
                            <button className="removeBtn" type="button"
                                onClick={() => {
                                    removeUsers(i);
                                    editFunction(false);
                                }}
                            >remove</button>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
});