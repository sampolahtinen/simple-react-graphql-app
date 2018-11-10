import React from "react";
import { MemoryRouter } from "react-router-dom";

import { shallow, mount } from "enzyme";

import NavBar from "./NavBar";

describe("NavBar Component", () => {
  const component = mount(
    <MemoryRouter initialEntries={["/"]}>
      <NavBar />
    </MemoryRouter>
  );
  it("renders", () => {
    expect(component.find(".navbar").exists()).toEqual(true);
  });
  it("displays two nav items", () => {
    expect(component.find(".nav-item-search").exists()).toEqual(true);
    expect(component.find(".nav-item-history").exists()).toEqual(true);
  });
  it("loads icons", () => {
    expect(component.find(".material-icons").length).toEqual(2);
  });
});
