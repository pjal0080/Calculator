import React, { Component } from 'react'
import './calc.css'
class CalcView extends Component {


    render() {

        const {concatHandler,clearScr,backspace,display,result} = this.props

        return (
            <div>
                <input type = "text" value = {display}/>
                <button name = "1" onClick = {concatHandler}>1</button>
                <button name = "2" onClick = {concatHandler}>2</button>
                <button name = "3" onClick = {concatHandler}>3</button>
                <button name = "4" onClick = {concatHandler}>4</button>
                <button name = "5" onClick = {concatHandler}>5</button>
                <button name = "6" onClick = {concatHandler}>6</button>
                <button name = "7" onClick = {concatHandler}>7</button>
                <button name = "8" onClick = {concatHandler}>8</button>
                <button name = "9" onClick = {concatHandler}>9</button>
                <button name = "0" onClick = {concatHandler}>0</button>
                <button name = "+" onClick = {concatHandler}>+</button>
                <button name = "-" onClick = {concatHandler}>-</button>
                <button name = "*" onClick = {concatHandler}>x</button>
                <button name = "/" onClick = {concatHandler}>&divide;</button>
                <button name = "." onClick = {concatHandler}>.</button>
                <button onClick = {result}>=</button>
                <button onClick = {clearScr}>Clear</button>
                <button onClick = {backspace}>C</button>
            
            </div>
        )
    }
}

export default CalcView
