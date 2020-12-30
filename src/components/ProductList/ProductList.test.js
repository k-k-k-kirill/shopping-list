import React from 'react'
import { shallow } from 'enzyme'
import ProductList from './ProductList'
import ProductCard from '../Product/ProductCard'
import { useSelector } from 'react-redux'

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
}));

describe( 'Product List', () => {
    let wrapper;

    beforeEach(() => {
        useSelector.mockImplementation(() => ([
            {
                name: 'Test',
                amount: 20,
                id: 'abcd'
            }
        ]))
        wrapper = shallow( <ProductList /> )
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    it( 'Displays right amount of products in the list.', () => {
        const list = wrapper.find( ProductCard )

        expect( list ).toHaveLength(1)
    } )
} )