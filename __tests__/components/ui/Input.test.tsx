import {fireEvent, render, screen, act} from '@testing-library/react-native';
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
    render(<Input error="error" value="" />);
    const errorTextInpComp = screen.getByTestId('errorText');

    expect(errorTextInpComp).toBeTruthy();
  });

  test('Input component shpuld should focus', () => {
    const {getByTestId} = render(
      <Input value="" onFocus={mockOnFocus} onChangeText={mockOnChangeText} />,
    );

    act(() => {
      fireEvent(getByTestId('textInput'), 'focus', {});
    });

    expect(mockOnFocus).toHaveBeenCalled();
  });
  test('Input component shpuld disabled style', () => {
    const {getByTestId} = render(
      <Input value="" disabled onChangeText={mockOnChangeText} />,
    );

    const inputContainer = getByTestId('inputContainer');
    // expect(inputContainer).toHaveStyle({pointerEvent: 'none'});
  });

  test('default onfocus function has been called', () => {
    const {getByTestId} = render(
      <Input value="" onChangeText={mockOnChangeText} />,
    );

    act(() => {
      fireEvent(getByTestId('textInput'), 'focus', {});
    });
  });

  test('default onBlur function has been called', () => {
    const {getByTestId} = render(
      <Input value="" onChangeText={mockOnChangeText} />,
    );

    act(() => {
      fireEvent(getByTestId('textInput'), 'blur', {});
    });
  });
});
