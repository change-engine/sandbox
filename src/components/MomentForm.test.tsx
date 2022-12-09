import { render, screen } from "@testing-library/react";
import { click } from "@testing-library/user-event/dist/click";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { putMoment } from "../supabaseClient";
import { MomentForm } from "./MomentForm";
jest.mock("../supabaseClient");

test("Renders", async () => {
  render(<MomentForm id="foobar" />);
  expect(screen.getByLabelText("Destination:")).toBeInTheDocument();
  expect(screen.getByLabelText("Date:")).toBeInTheDocument();
  expect(screen.getByText("Save")).toBeInTheDocument();
});

test("Saves", async () => {
  render(<MomentForm id="foobar" />);
  jest.mocked(putMoment).mockResolvedValue({
    error: {
      message: "done",
    },
  } as any);
  screen.getByLabelText("Destination:").click();
  keyboard("support@changeengine.com");
  click(screen.getByLabelText("Subject:"));
  keyboard("FooBar");
  click(screen.getByLabelText("Body:"));
  keyboard("Baz");
  click(screen.getByText("Save"));
  expect(await screen.findByText(/done/)).toBeInTheDocument();
  expect(putMoment).toBeCalledWith({
    id: "foobar",
    body: "Baz",
    date: "",
    subject: "FooBar",
  });
});
