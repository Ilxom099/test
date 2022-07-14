import React from 'react'
import { useHistory } from "react-router-dom";
import { Block, Img, Form, Submit,Docs } from './style'
import Ibs from '../atsess/ibs.jpg'
import {toast} from "react-toastify";

function Login({name, surname, names,surnames}) {
    let history = useHistory();
    function Log() {
        if ( name && surname) {
            history.push('/test')
            console.log('malumot bor')
        }else {
            toast.warning("fill in the entire line")
            console.log('malumot false')
        }
    }
    return(
        <div>
            {/*<Docs>*/}
            {/*    <button > Info</button>*/}
            {/*</Docs>*/}
            <Block>
                <Img src={Ibs} />
                <Form>
                    <input type="text" onChange={(e) => names(e.target.value)} placeholder={'Name'} />
                    <input type="text" onChange={(e) => surnames(e.target.value)} placeholder={'Surname'} />
                    <Submit onClick={ Log } > Submit </Submit>
                </Form>
            </Block>
        </div>
    )
}

export default Login;