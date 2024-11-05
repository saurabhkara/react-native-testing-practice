import {fireEvent, render, screen} from '@testing-library/react-native';
import Input from '../../../src/components/ui/Input';

describe('Input element', () => {
  const mockOnChangeText = () => jest.fn();
  const mockOnFocus = jest.fn();
  const mockOnnBlur = jest.fn();

  test('Input component should render correctly', () => {
    render(
      <Input
        onChangeText={mockOnChangeText}
        value="hajaj"
        testID="inputComponent"
      />,
    );
    const inputComp = screen.getByTestId('inputComponent');
    expect(inputComp).toBeTruthy();
  });

  test('Input component shpuld focus and blur event', () => {
    render(<Input error="error" onFocus={mockOnFocus} onBlur={mockOnnBlur} />);
    const textInpComp = screen.getByTestId('textInput');
    fireEvent(textInpComp, 'focus', {});
    fireEvent(textInpComp, 'blur', {});
    fireEvent(textInpComp, 'focus', {});
    fireEvent(textInpComp, 'blur', {});
    expect(mockOnFocus).toHaveBeenCalledTimes(2);
    expect(mockOnnBlur).toHaveBeenCalledTimes(2);
  });
  test('Input component shpuld rener error', () => {
    render(<Input error="error" error="error occurred" value="" />);
    const errorTextInpComp = screen.getByTestId('errorText');

    expect(errorTextInpComp).toBeTruthy();
  });
});
