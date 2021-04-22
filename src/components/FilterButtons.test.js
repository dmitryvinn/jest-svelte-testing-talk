import { getByTestId, render } from "@testing-library/svelte";
import FilterButtons from "./FilterButtons";

describe("Filter Buttons", () => {
  it("should include text for All, Active and Completed buttons", () => {
    const { container } = render(FilterButtons);
    
    expect(container).toHaveTextContent("All");
    expect(container).toHaveTextContent("Active");
    expect(container).toHaveTextContent("Completed");
    
  });

  it("should have three buttons visible", () => {
    const { container } = render(FilterButtons);
    
    expect(getByTestId(container, 'button-all')).toBeVisible();
    expect(getByTestId(container, 'button-completed')).toBeVisible();
    expect(getByTestId(container, 'button-active')).toBeVisible();
  });
});