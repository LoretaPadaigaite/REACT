import { screen, render } from "@testing-library/react"
import { Button } from "./Button"

describe ('Button', () => {
    test('should render', () => {
        const {getByTestId} = render(<Button>Test 123</Button>);

        expect (screen.getByTestId('button')).toBeInTheDocument();
    });
});
