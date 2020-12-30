import React from 'react'
import { shallow } from 'enzyme'
import AddProduct from './AddProduct'
import { useSelector } from 'react-redux'

const mockDispatch = jest.fn();
jest.mock( 'react-redux', () => ({
    useDispatch: () => mockDispatch,
    useSelector: jest.fn(),
}) )

describe( 'Add Product', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow( <AddProduct /> )
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    it( 'Displays correct initial product name.', () => {
        const input = wrapper.find( 'input.product-name' )
        const text = input.props().value

        expect( text ).toEqual('')
    } )

    it( 'Displays correct initial product amount.', () => {
        const input = wrapper.find( 'input.product-amount' )
        const text = input.props().value

        expect( text ).toEqual(0)
    } )
} )
