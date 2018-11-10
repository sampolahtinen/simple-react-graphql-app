import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Person from "./Person";

describe("NavBar Component", () => {
  const mockData = {
    id: "test",
    name: "name"
  };

  const initialState = {
    person: {
      name: "Test name"
    }
  };
  const mockStore = configureStore();
  let container;

  beforeEach(() => {
    container = mount(
      <Provider>
        <MemoryRouter initialEntries={["/"]}>
          <Person
            store={mockStore(initialState)}
            person={mockData}
            className="custom"
          />
        </MemoryRouter>
      </Provider>
    );
  });

  it("renders", () => {
    expect(container.find(".person-name").exists()).toEqual(true);
  });
  it("displays right name", () => {
    expect(container.find(".person-name").text()).toEqual("name");
  });
  it("displays custom class", () => {
    expect(container.find(".custom").exists()).toEqual(true);
  });
});
