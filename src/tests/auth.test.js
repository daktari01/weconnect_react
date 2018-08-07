import Enzyme, { shallow, render, mount } from "enzyme";
import React from "react";
import UserRegistration from "../Components/UserRegistration";
import UserSignIn from "../Components/UserSignIn";
import { shallowToJson } from "enzyme-to-json";
import sinon from 'sinon';
import moxios from 'moxios'

describe("UserRegistration renders correctly", () => {
    const wrapper = shallow(<UserRegistration />);
    it("Succeeds", () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it("Handles handleSubmit on submit ", () => {
        let handleSubmit = sinon.spy;
        let wrapper = mount(<UserRegistration onSubmit={handleSubmit} />);
        wrapper.find('form').simulate('submit')
        moxios.wait();
      });

      it("Handles handleChange on submit ", () => {
        let handleChange = sinon.spy;
        let wrapper = mount(<UserRegistration onChange={handleChange} />);
        wrapper.find('#firstNameInput').simulate('change')
      });

  });

  describe("UserSignIn renders correctly", () => {
    const wrapper = shallow(<UserSignIn />);
    it("Succeeds", () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
  });