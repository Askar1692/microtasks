import React from 'react';
import {buttonType} from "../App";

type moneyType = {
    filtredValue: Array<objectType>
    onClickHandler:(name: buttonType)=>void
}

type objectType = {
    banknots: string
    value: number
    number: string
}
export const Filter = (props: moneyType) => {
    return (
        <>
            {props.filtredValue.map((el,index)=> {
                return (
                    <div key={index}>
                        <span> {el.banknots}</span>
                        <span> {el.value}</span>
                        <span> {el.number}</span>
                    </div>
                )
            })}
                <button onClick={()=>props.onClickHandler('All')}>All</button>
                <button onClick={()=>props.onClickHandler('Dollars')}>Dollars</button>
                <button onClick={()=>props.onClickHandler('RUBLS')}>Rubles</button>
        </>
    );
};

