import { render, fireEvent, screen,getByTestId } from "@testing-library/react";
import GameEnd from "./GameEnd"

describe("<GameEnd/>", () => {

    test("Should render ", () => {
     const { container } = render(<GameEnd />);
     expect(container).toBeInTheDocument();
   });

   test('newgamebtn', () => {
    render(<GameEnd />);
 
    const newGameBtn = screen.getByTestId("newGame");
    fireEvent.click(newGameBtn);
 
   
  });

});
