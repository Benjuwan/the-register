import { useContext } from "react";
import { TheAryContext } from "../providers/TheAryContext";

export const useEditUser = () => {
    const { isUsers, setUsers } = useContext(TheAryContext);

    const editUser = (
        indexNumber: number,
        name: string,
        mail: string
    ) => {
        const newAry = isUsers.map((el, i) => {
            /* indexNumber に（配列番号が）一致した要素を返す */
            if (indexNumber === i) {
                return el;
            }
        }).filter(el => {
            /* undefined でない要素を返す */
            if (el !== undefined) {
                return (
                    /* 編集後の内容を（オブジェクトに）反映 */
                    el.name = name,
                    el.mail = mail,
                    /* user.displayMode = false; 編集モードをOFF */
                    el.displayMode = false
                )
            }
        });
        /* 編集後の内容を持った配列を既存のオブジェクト(isUsers：登録リスト)へ上書き */
        const changeObject = Object.assign(isUsers, newAry);
        /* 上書きしたオブジェクトをセットして編集後の内容に差替 */
        setUsers(changeObject);
    }

    return { editUser }
}