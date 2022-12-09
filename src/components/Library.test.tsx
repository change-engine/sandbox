import { render, screen } from "@testing-library/react";
import { Library } from "./Library";
import { getMomentsWithDestinations } from "../supabaseClient";
jest.mock("../supabaseClient");

test("Displays errors", async () => {
  jest.mocked(getMomentsWithDestinations).mockResolvedValue({
    error: {
      message: "nope",
    },
  } as any);
  render(<Library />);
  expect(await screen.findByText(/nope/)).toBeInTheDocument();
});

test("Displays test moment", async () => {
  jest.mocked(getMomentsWithDestinations).mockResolvedValue({
    data: [
      {
        id: "yep",
        subject: "yep",
      },
    ],
  } as any);
  render(<Library />);
  expect(await screen.findByText(/yep/)).toBeInTheDocument();
});
