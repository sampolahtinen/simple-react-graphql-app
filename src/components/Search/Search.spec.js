import React from "react";
import { MemoryRouter } from "react-router-dom";

import { mount } from "enzyme";

import Search from "./Search";

describe("Search Component", () => {
  const component = mount(
    <MemoryRouter initialEntries={["/"]}>
      <Search updateParent={() => {}} />
    </MemoryRouter>
  );
  it("renders", () => {
    expect(component.find(".search").exists()).toEqual(true);
  });

  it("user text is echoed", async () => {
    const userText = "hello";

    expect(component.find("input").exists()).toEqual(true);
    component.find("input").simulate("change", {
      target: { name: "searchString", value: userText }
    });
    expect(component.find("input").props().value).toEqual(userText);
  });
});
