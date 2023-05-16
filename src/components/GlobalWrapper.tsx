import styled from "styled-components";
import { useContext, useState } from "react";
import { TheAryContext } from "../providers/TheAryContext";
import { RegisterFormItems } from "./RegisterFormItems";
import { BtnComponent } from "./BtnComponent";
import { useAddUser } from "../hooks/useAddUsers";
import { Contents } from "./Contents";

export const GlobalWrapper = () => {
    /* コンテキスト */
    const { isUsers } = useContext(TheAryContext);

    /* ステート */
    const [isEdit, setEdit] = useState<boolean>(false);

    /* Hooks */
    const { addUser } = useAddUser();

    return (
        <GlobalWrapperEl>
            <div className="wrapper">
                {/* isUsers.length <= 5：登録件数の上限は5件 */}
                {isUsers.length <= 5 &&
                    <div className="defaultState">
                        <h2>登録画面</h2>
                        {isEdit ||
                            <form action="">
                                <RegisterFormItems bool={true} />
                                <BtnComponent function={addUser} />
                            </form>
                        }
                        <Contents editState={isEdit} editFunction={setEdit} />
                    </div>
                }
            </div>
        </GlobalWrapperEl>
    );
}

const GlobalWrapperEl = styled.div`
margin: 5em auto;
width: clamp(320px, 95%, 560px);
font-size: 1.4rem;

@media screen and (min-width: 1025px){
    font-size: 16px;
    width: clamp(320px, calc(100vw/2), 560px);
}

& .wrapper{
        padding: 2.5em;
        box-shadow: 0 0 4px rgba(0,0,0,.5) inset;
        border-radius: 8px;

        & h2{
            font-size: 2em;
            margin-bottom: .5em;
        }

        & form {
            & p{
                & input {
                    width: 100%;
                }

                &:not(:last-of-type){
                    margin-bottom: 1em;
                }
            }
        }
    
        & button {
            cursor: pointer;
            appearance: none;
            border: none;
            border-radius: 0;
            width: fit-content;
            padding: 0 5em;
            line-height: 44px;
            text-align: center;
            background-color: #333;
            color: #fff;
            display: block;
            margin: 2em auto;
    
            &:hover{
                background-color: #fff;
                color: #333;
            }
    
            &[disabled]{
                background-color: #dadada;
            }
        }
    
        & ul {
            list-style: none;
            padding: 0;
            border-top: 1px solid #dadada;
            padding-top: 1.5em;
    
            & li{
                & span{
                    font-weight: bold;
                    margin-right: 1em;
                }
    
                & .btns{
                    display: flex;
                    flex-flow: row wrap;
                    gap: 2%;
    
                    & button{
                        width: 48%;
    
                        &.editBtn{
                            background-color: green;
                        }
                        &.removeBtn{
                            background-color: red;
                        }
                    }
                }
            }
        }
    }
`