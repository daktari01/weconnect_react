import Enzyme, { shallow, render, mount } from "enzyme";
import React from "react";
import RegisterBusiness from "../Components/RegisterBusiness";
import MyBusinesses from "../Components/MyBusinesses";
import Businesses from "../Components/Businesses";
import BusinessProfile from "../Components/BusinessProfile";
import UpdateBusinessProfile from "../Components/UpdateBusinessProfile";
import { shallowToJson } from "enzyme-to-json";

describe("RegisterBusiness component", () => {
  const wrapper = shallow(<RegisterBusiness />);
  it("RegisterBusiness coponent renders successfully", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
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
});

describe("MyBusinesses component", () => {
  const prop= {
    queryType: "q",
    fireRedirect: false,
    query: "",
    activeTab: "q",
  };
  const wrapper = shallow(<MyBusinesses searchProps={prop} />);
  it("MyBusinesses component renders successfully", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe("Businesses component", () => {
  const wrapper = shallow(<Businesses />);
  it("Businesses component renders successfully", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe("BusinessProfile component", () => {
  const wrapper = shallow(<BusinessProfile />);
  it("BusinessProfile component renders successfully", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
