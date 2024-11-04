import {render, screen} from '@testing-library/react-native';
import FooterTextTouchable from '../../../src/components/ui/FooterTextTouchable';

describe('FooterTextTouchable', () => {
  test('Footer', () => {
    render(<FooterTextTouchable onPress={() => {}} text="footer" />);
    const footer = screen.getByTestId('footer-view');
    expect(footer).toBeTruthy();
  });
});
