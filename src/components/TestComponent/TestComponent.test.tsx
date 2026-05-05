import { screen } from "@testing-library/react";
import { test, expect } from "vitest";
import TestComponent from "~/components/TestComponent/TestComponent";
import { renderWithProviders } from "~/testUtils";

test("Renders test component", () => {
  renderWithProviders(<TestComponent />);

  expect(screen.getByText("Test Component")).toBeInTheDocument();
});
