import React from 'react';
import renderer from 'react-test-renderer';
import Component from './component';

describe('test component', () => {
    it('render', () => {
        const tree = renderer.create(<Component />);
        expect(tree.toJSON()).toMatchSnapshot();
    }),
    it('render async', async () => {
        const tree = renderer.create(<Component />);
        await Promise.resolve();
        expect(tree.toJSON()).toMatchSnapshot();
    })
})
