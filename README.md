# RTL + Vitest Cucumber

This template provides a minimal setup to setup testing using RTL (React Testing Library) with Vitest Cucumber. Vitest Cucumber is a plugin
that uses Gherkin syntax to setup tests

# Installation

Below installs react-testing library, vitest-cucumber, and vitest.

```
npm i @testing-library/react
```

```
npm install -D vitest
```

```
npm i @amiceli/vitest-cucumber
```

# Example

Below shows an example of the “feature.test.tsx” where the test simulates a user uploading files to a dropbox. Afterwards, the table UI component should be populated and be shown to the user.
Also, note how the tests are written in Gherkin syntax (more information can be found here -> https://github.com/amiceli/vitest-cucumber).

```
f.Scenario("User wants to upload KML file", (s) => {
      s.Given("the uploadTab is live", async () => {
          //logic to check if uploadTab is live
      });
      s.When("the user clicks on the UploadButton", async () => {
       //user clicks upload button
        expect(
          screen.getByRole("button", { name: "Upload" }),
        ).toBeInTheDocument();
        await userEvent.click(screen.getByRole("button", { name: "Upload" }));
      });
      s.Then("the user should see a green check mark and table", () => {
          //check green check mark
          expect(screen.queryByText(“check mark”)).toBeInScreen();
         //logic to check table
      });

  });
```

# Running tests

To run the tests in the repo follow the following steps:

1. Clone Repo
2. Download node modules using `npm i`
3. Run test using `npm test src/__tests__/button.test.tsx`

# External Links

React Testing Library: https://github.com/testing-library/react-testing-library

Vitest Cucumber: https://www.npmjs.com/package/@amiceli/vitest-cucumber

Vitest: https://vitest.dev/guide/
