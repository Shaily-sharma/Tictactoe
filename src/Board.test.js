import { render, fireEvent, screen } from "@testing-library/react";
import Board from "./Board"


describe("Initialize Board", () => {
    
    test('handleClick updates grid state correctly', () => {
            const clickedArray = ['','', '', '', '', ''];
            const handleClick = jest.fn()
            const { container} = render(<Board clickedArray={clickedArray} handleClick={handleClick}  />)
            expect(container).toBeInTheDocument()
            });
            
            const mockData=["","","","","","","","",""]

            test("List renders successfully", () => {
                const { boardData } = render(<Board data={mockData} />)
                expect(screen.getByTestId("board")).toBeInTheDocument();
            });  
            })
            


   

