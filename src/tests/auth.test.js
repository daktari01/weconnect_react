import Enzyme, { shallow, render, mount } from "enzyme";
import React from "react";
import UserRegistration from "../Components/UserRegistration";
import UserSignIn from "../Components/UserSignIn";
import ResetPassword from "../Components/ResetPassword";
import Reset from "../Components/Reset";
import { shallowToJson } from "enzyme-to-json";
import sinon from "sinon";
import moxios from "moxios";

describe("UserRegistration renders correctly", () => {
  const wrapper = shallow(<UserRegistration />);
  it("Succeeds", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it("Handles handleSubmit on submit ", () => {
    let handleSubmit = sinon.spy;
    let wrapper = mount(<UserRegistration onSubmit={handleSubmit} />);
    wrapper.find("form").simulate("submit");
    moxios.wait();
  });

  it("Handles handleChange on submit ", () => {
    let handleChange = sinon.spy;
    let wrapper = mount(<UserRegistration onChange={handleChange} />);
    wrapper.find("#firstNameInput").simulate("change");
  });
});

describe("UserSignIn renders correctly", () => {
  const test_state = {
    state: "james",
  };
  const wrapper = shallow(<UserSignIn location={test_state} />);
  it("Succeeds", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it("Handles handleSubmit on submit ", () => {
    let handleSubmit = sinon.spy;
    let wrapper = mount(<UserSignIn location={test_state} onSubmit={handleSubmit} />);
    wrapper.find("form").simulate("submit");
    moxios.wait();
  });

  it("Handles handleChange on submit ", () => {
    let handleChange = sinon.spy;
    let wrapper = mount(<UserSignIn location={test_state} onChange={handleChange} />);
    wrapper.find("#loginUsernameInput").simulate("change");
  });
});

describe("ResetPassword renders correctly", () => {
  const wrapper = shallow(<ResetPassword />);
  it("Succeeds", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe("Reset renders correctly", () => {
  const token = {
      params: {
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImphbWVzIiwiZXhwIjoxNTMzNjI5NzExfQ.8mPPduU60z1G8OuXz27AUEPql0ETLQ-_HoTvif3_hbQ"
      }
  };
  const wrapper = shallow(<Reset match={token}/>);
  it("Succeeds", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
