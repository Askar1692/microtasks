import React from 'react';

export const Button1Foo =(subscriber:string)=>{
    console.log(subscriber)
}
export const Button2Foo =(subscriber:string)=>{
    console.log(subscriber)
}

export const Button3Foo =()=>{
    console.log('Iam stupid button')
}

type ButtonType = {
    name: string
    callBack: ()=> void
}

export const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>

    );
}