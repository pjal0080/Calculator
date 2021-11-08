import React,{Component} from "react";
import CalcView from "./calcView";

class CaclController extends Component{

    constructor(props) {
        super(props)
        
        this.concatHandler = this.concatHandler.bind(this)
        this.clearScr = this.clearScr.bind(this)
        this.backspace = this.backspace.bind(this)
        this.calculateResult = this.calculateResult.bind(this)

        this.state = {
            result : ''
        }
    }
    
    concatHandler(e){
        this.setState({
            result : this.state.result.concat(e.target.name)})
    }

    clearScr(){
        this.setState({result : ''})
    }

    backspace(){
        this.setState({
            result : this.state.result.slice(0,-1)
        })
    }

    calculateResult(){
        try{
            this.setState({
                result : eval(this.state.result).toString()
            })
        }
        catch(err){
            this.setState({result : 'Error'})
        }
       
    }


    render(){

        const {result} = this.state
        return(
            <CalcView concatHandler = {this.concatHandler} clearScr = {this.clearScr} backspace = {this.backspace} display = {result} result = {this.calculateResult} />
        );

    }
    
}

export default CaclController;