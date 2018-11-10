import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import Layout from "./Layout";

describe("NavBar Component", () => {
  const component = mount(
    <MemoryRouter initialEntries={["/"]}>
      <Layout>
        <div>test</div>
        <div>test</div>
      </Layout>
    </MemoryRouter>
  );
  it("renders", () => {
    expect(component.find(".layout").exists()).toEqual(true);
  });
  it("displays children", () => {
    expect(component.find(".layout").children().length).toEqual(2);
  });
});
