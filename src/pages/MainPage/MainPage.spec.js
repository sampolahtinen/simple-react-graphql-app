import React from "react";
import { MemoryRouter } from "react-router-dom";

import Enzyme, { mount, shallow } from "enzyme";

import MainPage from "./MainPage";

// Importing for testing which didnt work out
//import PersonsList from "../../components/PersonsList";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("MainPage Component", () => {
  const component = mount(
    <MemoryRouter initialEntries={["/"]}>
      <MainPage />
    </MemoryRouter>
  );
  it("renders", () => {
    expect(component.find(".main-page").exists()).toEqual(true);
  });

  /**  Didnt get conditional check to work **** /
  component.setState({ searchString: "test" });
  component.update();
  it("displays persons list", () => {
    expect(component.find(PersonsList).exists()).toEqual(true);
  });*/
});
