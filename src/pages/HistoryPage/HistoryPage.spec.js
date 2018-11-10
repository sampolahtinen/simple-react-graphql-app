import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import HistoryPage from "./HistoryPage";

describe("HistoryPage Component", () => {
  /*const initialState = {
    visitedPersons: [
      {
        person: {
          name: "Sampo",
          id: "1"
        }
      }
    ]
  };*/
  const initialState = [
    {
      person: {
        name: "test",
        id: "1"
      }
    },
    {
      person: {
        name: "test2",
        id: "2"
      }
    }
  ];
  const mockStore = configureStore();
  let container;
  const store = mockStore(initialState);

  beforeEach(() => {
    container = mount(
      <Provider>
        <MemoryRouter initialEntries={["/"]}>
          <HistoryPage store={store} />
        </MemoryRouter>
      </Provider>
    );
  });

  it("renders", () => {
    expect(container.find(".history-page").exists()).toEqual(true);
  });
});
