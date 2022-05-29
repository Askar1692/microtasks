import React from "react";

export const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100},
]

type NewComponentType={
    students: Array<StudentType>
}

type StudentType={
    id: number
    name: string
    age: number
}
export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((objectFromStudentsArray,index) => {
                return (
                <li key={objectFromStudentsArray.id}>
                    <span>{objectFromStudentsArray.name}</span>
                    <span>{objectFromStudentsArray.age}</span>
                </li>)
                })}
        </ul>
    );
}