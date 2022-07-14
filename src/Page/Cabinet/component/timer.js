import React, {useEffect, useState} from "react";
import {Block, Minut } from './style'

function Timer({Sub,dist}) {
    const [ minut, setMinut ] = useState(50);
    const [ second, setSecond ] = useState(0);

    useEffect(()=>{
        if(minut !==0 || second !== 0){
            var a = setTimeout(()=>{
                if(second === 0){
                    setSecond(59)
                    setMinut(minut - 1)
                }
                else {
                    setSecond(second - 1)
                }
            },1)
        }
        else{
            return ()=>{
                clearTimeout(a);
            }
        }
        if (dist) {
            setMinut(0)
            setSecond(0)
        }
    })
    return(
        <div>
            <Block>
                <Minut> {minut}  {" : "} {second}</Minut>
            </Block>
        </div>
    )
}

export default Timer;