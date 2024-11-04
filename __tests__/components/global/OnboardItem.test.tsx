import {render} from '@testing-library/react-native';
import OnboardItem from '../../../src/components/global/OnboardItem';

describe('OnBoardItem Component', () => {
  const mockOnPressFirst = jest.fn(() => {});
  const mockOnPressSecond = jest.fn(() => {});
  const imageSource = {uri: 'imageUrl'};
  const titleText = 'Test title';
  const subTitle = 'Test Subtitle';
  const buttonTitleFirst = 'First Button';
  const buttonTitleSecond = 'Second button';

  test('Onboarditem', () => {
    const {getByTestId, getByText} = render(
      <OnboardItem
        imageSource={imageSource}
        title={titleText}
        subtitle={subTitle}
        onPressFirst={mockOnPressFirst}
        buttonTitleFirst={buttonTitleFirst}
        onPressSecond={mockOnPressSecond}
        buttonTitleSecond={buttonTitleSecond}
      />,
    );
    const parentComp = getByTestId('background-image');
    const titleTe = getByText(titleText);
    expect(parentComp).toBeTruthy();
    expect(titleTe).toBeTruthy();
  });
});
