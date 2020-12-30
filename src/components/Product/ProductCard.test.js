import React from 'react'
import { shallow } from 'enzyme'
import ProductCard from './ProductCard'
import { useDispatch } from 'react-redux'


const mockDispatch = jest.fn();
jest.mock( 'react-redux', () => ({
    useDispatch: () => mockDispatch
}) )

describe( 'Product Card', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = {
            product: {
                name: 'Test',
                amount: 20,
                id: 'abcd'
            }
        }
        wrapper = shallow( <ProductCard {...props} /> )
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    it( 'Displays correct product name.', () => {
        const input = wrapper.find( 'input.product-name' )
        const text = input.props().value
        
        expect(text).toEqual(props.product.name)
    } )

    it( 'Displays correct product amount.', () => {
        const input = wrapper.find('input.product-amount')
        const text = input.props().value

        expect( text ).toEqual( props.product.amount )
    } )

    it( 'Calls dispatch on button click.', () => {
        const button = wrapper.find( 'button' )
        button.simulate( 'click' )

        expect(mockDispatch).toBeCalled()
    } )
} )