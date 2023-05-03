import React from 'react';
import { render } from '@testing-library/react';
import { CheckCircleOutlined } from '@ant-design/icons';
import IconText from './index';

describe('IconText', () => {
    test('should render correctly', () => {
      const tree = render(<IconText icon={CheckCircleOutlined} text='test' />);

      expect(tree).toMatchSnapshot();
    });
});
