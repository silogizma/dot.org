import React from 'react';
import Icon from './index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
    .create(<Icon type='type' />)
    .toJSON();

    expect(tree).toMatchSnapshot();
});