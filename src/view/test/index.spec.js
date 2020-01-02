import { mount } from '../../../test';
import View from '..';

test('loading size', () => {
  const wrapper = mount(View, {
    propsData: {
      loading: true,
      loadingSize: '10px'
    },
    attrs: {
      viewType: 'van-button'
    }
  });
  expect(wrapper).toMatchSnapshot();
});
