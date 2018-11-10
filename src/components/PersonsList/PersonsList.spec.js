import React from "react";
import { MemoryRouter } from "react-router-dom";

import { shallow } from "enzyme";

import { MockedProvider } from "react-apollo/test-utils";

import { GET_PERSONS } from "../../api/queries";

import PersonsList from "./PersonsList";

const mocks = [
  {
    request: {
      query: GET_PERSONS
    },
    result: {
      data: {
        allPersons: [
          {
            id: "1",
            name: "Luke",
            species: [{ id: "23", classification: "mammal" }]
          }
        ]
      }
    }
  }
];

it("Renders without problems", () => {
  shallow(
    <MemoryRouter initialEntries={["/"]}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <PersonsList variables={{}} />
      </MockedProvider>
    </MemoryRouter>
  );
});

/*describe("PersonsList Component", () => {
  const component = mount(
    <MemoryRouter initialEntries={["/"]}>
      <MockedProvider mocks={mocks} removeTypenames>
        <PersonsList
          variables={{
            filter: {
              name_contains: "luke",
              species_every: {
                classification: "mammal"
              }
            }
          }}
        />
      </MockedProvider>
    </MemoryRouter>
  );

  it("displays data", async () => {
    await new Promise(resolve => setTimeout(resolve));
    component.update();
    expect(component.find(".persons-list-container").exists()).toEqual(true);
  });
});
*/
