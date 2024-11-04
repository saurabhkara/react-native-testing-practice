import {render} from '@testing-library/react-native';
import CustomSafeAreaScrollView from '../../../src/components/global/CustomSafeAreaViewScroll';
import {View} from 'react-native';

describe('CustomSafeAreaViewScroll', () => {
  test('Safe area view component', () => {
    const {getByTestId} = render(
      <CustomSafeAreaScrollView>
        <View />
      </CustomSafeAreaScrollView>,
    );
    const scrollView = getByTestId('safe-area-view');
    expect(scrollView).toBeTruthy();
  });
});
