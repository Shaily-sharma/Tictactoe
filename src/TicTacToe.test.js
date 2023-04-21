import { render, fireEvent, screen } from "@testing-library/react";
import TicTacToe from "./TicTacToe";

describe("<TicTacToe/>", () => {

    test("Should render", () => {
     const { container } = render(<TicTacToe />);
     expect(container).toBeInTheDocument();
   });

   
});
