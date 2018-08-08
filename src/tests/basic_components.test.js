import Enzyme, { shallow, render, mount } from "enzyme";
import React from "react";
import Footer from "../Components/Footer";
import Page404 from "../Components/Page404";
import NavBar from "../Components/NavBar";
import Home from "../Components/Home";
import { shallowToJson } from "enzyme-to-json";

describe("Footer component", () => {
  const wrapper = shallow(<Footer />);
  it("renders footer successfully", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe("Page404 renders correctly", () => {
  const wrapper = shallow(<Page404 />);
  it("Succeeds", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe("Home renders correctly", () => {
  const wrapper = shallow(<Home />);
  it("Succeeds", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe("NavBar renders correctly", () => {
  const wrapper = shallow(<NavBar />);
  it("Succeeds", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
