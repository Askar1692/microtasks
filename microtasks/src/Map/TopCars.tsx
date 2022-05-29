import React from "react";

export const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
    ]

type TopCarsType = {
    topCars: Array<TopCarsArrayType>
}

type TopCarsArrayType = {
    manufacturer: string
    model: string
}

export const TopCars = (props: TopCarsType) => {
    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            </thead>
            {props.topCars.map((newArrayCars, index) => {
                return (
                    <tbody key={index}>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{newArrayCars.manufacturer}</td>
                        <td>{newArrayCars.model}</td>
                    </tr>
                    </tbody>)
            })}
        </table>
    )
}