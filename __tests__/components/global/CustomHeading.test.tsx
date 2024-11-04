/* eslint-disable prettier/prettier */
import {fireEvent, render} from '@testing-library/react-native';
import CustomHeading from '../../../src/components/global/CustomHeading';
import {goBack} from '../../../src/utils/NavigationUtil';

//Mock the goBack method
jest.mock('../../../src/utils/NavigationUtil', () => ({
  goBack: jest.fn(),
}));

describe('Custom header', () => {
  test('Header ', () => {
    let title = 'header';
    const {getByText} = render(<CustomHeading title={title} />);
    expect(getByText(title)).toBeTruthy();
  });

  test('goBack button will be called', () => {
    const {getByTestId} = render(<CustomHeading title="Heading" />);
    const backButton = getByTestId('back-button');
    fireEvent.press(backButton);
    expect(goBack).toHaveBeenCalled();
  });
});
