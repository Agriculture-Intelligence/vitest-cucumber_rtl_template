import { describeFeature, loadFeature } from "@amiceli/vitest-cucumber";
import { screen, waitFor, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { expect } from "vitest";
import { Button } from "../Button";
const feature = await loadFeature("__tests__/button.feature");

describeFeature(feature, (f) => {
  //below is specfic scenario or user action
  f.Scenario("User wants to press count button", (s) => {
    //check for some given state
    s.Given("the button count is set to 0", async () => {
      //render and wait for some state to appear
      render(<Button />);
      await waitFor(() => {
        expect(screen.queryAllByText("count is 0").length).toEqual(1);
      });
    });
    //apply user action
    s.When("the user clicks on the button", async () => {
      await userEvent.click(screen.getByRole("button"));
    });
    //check state of app
    s.Then("the button count should be set to 1", async () => {
      await waitFor(() => {
        expect(screen.queryAllByText("count is 1").length).toEqual(1);
      });
    });
  });
});
