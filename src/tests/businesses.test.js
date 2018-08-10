import { shallow, mount } from "enzyme";
import React from "react";
import RegisterBusiness from "../Components/RegisterBusiness";
import MyBusinesses from "../Components/MyBusinesses";
import Businesses from "../Components/Businesses";
import BusinessProfile from "../Components/BusinessProfile";
import UpdateBusinessProfile from "../Components/UpdateBusinessProfile";
import { shallowToJson } from "enzyme-to-json";
import sinon from "sinon";
import moxios from "moxios";

describe("RegisterBusiness component", () => {
  const wrapper = shallow(<RegisterBusiness />);
  it("RegisterBusiness coponent renders successfully", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("Handles handleSubmit on submit ", () => {
    let handleSubmit = sinon.spy;
    let wrapper = mount(<RegisterBusiness onSubmit={handleSubmit} />);
    wrapper.find("form").simulate("submit");
    moxios.wait();
  });

  it("Handles handleChange on submit ", () => {
    let handleChange = sinon.spy;
    let wrapper = mount(<RegisterBusiness onChange={handleChange} />);
    wrapper.find("#businessNameInput").simulate("change");
  });
});

describe("UpdateBusinessProfile component", () => {
  const bid={
    params: {
      id: 1
    }
  };
  const wrapper = shallow(
    <UpdateBusinessProfile match={bid} />
  );
  it("UpdateBusinessProfile renders successfully", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("Handles handleSubmit on submit ", () => {
    let handleSubmit = sinon.spy;
    let wrapper = mount(<UpdateBusinessProfile match={bid} onSubmit={handleSubmit} />);
    wrapper.find("form").simulate("submit");
    moxios.wait();
  });

  it("Handles handleChange on submit ", () => {
    let handleChange = sinon.spy;
    let wrapper = mount(<UpdateBusinessProfile match={bid} onChange={handleChange} />);
    wrapper.find("#businessLocationInput").simulate("change");
  });
});

describe("MyBusinesses component", () => {
  
  const wrapper = shallow(<MyBusinesses />);
  it("MyBusinesses component renders successfully", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("Handles handleSearch on submit ", () => {
    let handleSearch = sinon.spy;
    let wrapper = mount(<MyBusinesses onSubmit={handleSearch} />);
    wrapper.find("form").simulate("submit");
    moxios.wait();
  });
});

describe("Businesses component", () => {
  const prop= {searchProps:{
    queryType: "q",
    query: "",
  }};
  
  const wrapper = shallow(<Businesses location={prop} />);
  it("Businesses component renders successfully", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it("Handles handleSearch on submit ", () => {
    let handleSearch = sinon.spy;
    let wrapper = mount(<MyBusinesses onSubmit={handleSearch} />);
    wrapper.find("form").simulate("submit");
    moxios.wait();
  });
});

describe("BusinessProfile component", () => {
  const bid={
    params: {
      id: 1
    }
  };
  const wrapper = shallow(<BusinessProfile match={bid} />);
  it("BusinessProfile component renders successfully", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
