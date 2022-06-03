import React, {useState} from 'react';
import './App.css';
import {Button, Button1Foo, Button2Foo, Button3Foo} from "./Button/Button";
import {topCars, TopCars} from "./Map/TopCars";
import {NewComponent, students} from "./Map/NewComponent";

function App() {

    let [a, setA]=useState(1)

    const onClickHandler =()=>{
        setA(++a)
        console.log(a)
    }

    const onClickHandler2 =()=>{
        let x = setA(0/a)
        console.log(x)
    }
    return (
        <div>
            {/*<NewComponent  students={students}/>*/}

            {/*<TopCars topCars={topCars}/>*/}

            {/*<Button name={'MyYoutubeChanel1'} callBack={() => Button1Foo('I am Vasya')}/>
            <Button name={'MyYoutubeChanel2'} callBack={() => Button2Foo('I am Ivan')}/>
            <Button name={'StupidButton'} callBack={() => Button3Foo()}/>*/}
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler2}>0</button>
        </div>
    );
}

export default App;