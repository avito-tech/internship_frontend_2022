import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import UpdateButton from './index';
import { noop } from '../../utils/noop';

describe('UpdateButton', () => {
    test('should render correctly', () => {
        const tree = render(<UpdateButton onClick={noop} />);

        expect(tree).toMatchSnapshot();
    })

    test('should render correctly with title', () => {
        const tree = render(<UpdateButton title='Title' onClick={noop} />);

        expect(tree).toMatchSnapshot();
    })

    it('should call onClick 1 time when clicked', () => {
        const TEST_ID = 'button';
        const defaultProps = {
            onClick: jest.fn(),
        };
        const { getByTestId } = render(<UpdateButton {...defaultProps} />);

        fireEvent.click(getByTestId(TEST_ID));

        expect(defaultProps.onClick).toBeCalledTimes(1);
    });
});
