import Enzyme, { shallow, render, mount } from "enzyme";
import React from "react";
import RegisterBusiness from "../Components/RegisterBusiness";
import UpdateBusinessProfile from "../Components/UpdateBusinessProfile";
import { shallowToJson } from "enzyme-to-json";

describe("RegisterBusiness component", () => {
  const wrapper = shallow(<RegisterBusiness />);
  it("renders footer successfully", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe("UpdateBusinessProfile component", () => {
  const bid = {
    match: {
      params: {
        id: "1"
      }
    }
  };

  const wrapper = shallow(<UpdateBusinessProfile params={{ bid }} />);
  it("renders footer successfully", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
