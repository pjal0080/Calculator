import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App.js";
import CalcController from './calcController'
import CalcView from "./calcView.js";

const setUpView = (props = {}) =>{
  const component = shallow(<CalcView {...props} />);
  return component;

}

const setUpController = (props = {}) =>{
  const component = mount(<CalcController {...props}/>)
  return component;
}


  describe('Calculator View test cases',() =>{

    let component;

    beforeEach(() => {
      component = setUpView();
    });
    

    it('renders calculator view without crashing',() => {
      const wrapper = component.find('.app');
      // console.log(component.debug());
      expect(wrapper.length).toBe(1);

    });


    it('counts total no of buttons', () =>{
        const wrapper = component.find('button');
        expect(wrapper.length).toBe(18);

      });


  });

  describe('tests for Calculator Controller',() => {

    let component;

    beforeEach(() =>{
      component = setUpController();
    });


    it('initial input value is empty',()=>{
      const display = component.find('input');
      expect(display.props().value).toEqual('');


    });

    it('concatenates the value to the string',() =>{
        const button = component.find({name : '1'});
        button.simulate('click')
        console.log(component.debug());
        const display = component.find('input')
        expect(display.props().value).toBe('1')

    });


    it('clears the screen',() =>{
        const button = component.find('#clear');
        button.simulate('click')
        const display = component.find('input')
        expect(display.props().value).toEqual('')
    });


    it('calculates the value of string expression',() =>{
      const button = component.find('#result');
      const add = component.find({name : '+'})
      const val1 = component.find({name : '4'})
      const val2 = component.find({name : '5'})
      val1.simulate('click');
      add.simulate('click');
      val2.simulate('click');
      button.simulate('click');
      const display = component.find('input')
      expect(display.props().value).toEqual('9')


    });

    it('checks the backspace button',()=>{
      const val = component.find({name : '1'})
      val.simulate('click');
      const button = component.find('#backspace');
      button.simulate('click');
      const display = component.find('input');
      expect(display.props().value).toEqual('')

    });


  });