import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

describe("TransactionCreateStepTwo test", () => {
  test("the pay button is disabled", async () => {
    render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "1" }} />);
    userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
    userEvent.type(screen.getByPlaceholderText(/add a note/i), "Test");
    expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
  });
});
