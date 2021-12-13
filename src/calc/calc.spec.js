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
      const wrapper = component.find('.row');
      console.log(component.debug());
      expect(wrapper.length).toBe(6);

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

    it('concathandeler test',() =>{

    });

  });