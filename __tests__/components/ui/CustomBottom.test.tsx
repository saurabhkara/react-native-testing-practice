import {render} from '@testing-library/react-native';
import CustomButton from '../../../src/components/ui/CustomButton';

describe('CustomButton', () => {
  test('Custom button loading false', () => {
    const {getByTestId} = render(<CustomButton />);
    const button = getByTestId('custom-button');
    expect(button).toBeTruthy();
  });
  test('Custom button loading false', () => {
    const {getByTestId} = render(<CustomButton loading={true} />);
    const button = getByTestId('custom-button');
    expect(button).toBeTruthy();
  });
});
