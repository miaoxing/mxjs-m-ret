import Ret from '..';
import {render} from '@testing-library/react';
import {Ret as RetObject} from 'miaoxing';

describe('Ret', () => {
  test('basic', () => {
    const result = render(<Ret ret={RetObject.err('error')}/>);
    expect(result.container).toMatchSnapshot();
  });

  test('empty ret show loading', () => {
    const {queryByText} = render(<Ret/>);
    expect(queryByText('加载中...')).not.toBeNull();
  });

  test('empty ret object show loading', () => {
    const {queryByText} = render(<Ret ret={{}}/>);
    expect(queryByText('加载中...')).not.toBeNull();
  });
});
