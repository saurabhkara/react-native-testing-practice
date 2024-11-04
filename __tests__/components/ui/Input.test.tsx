import {render, screen} from '@testing-library/react-native';
import Input from '../../../src/components/ui/Input';

describe('Input element', () => {
  test('Input component', () => {
    render(<Input onFocus={() => {}} onBlur={() => {}} />);
    const inputComp = screen.getByTestId('animatedView');
    expect(inputComp).toBeTruthy();
  });

  test('Input component', () => {
    render(<Input error="error" />);
    const inputComp = screen.getByTestId('animatedView');
    expect(inputComp).toBeTruthy();
  });
});
