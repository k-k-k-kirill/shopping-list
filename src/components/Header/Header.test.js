import React from 'react'
import { render } from 'enzyme'
import Header from './Header'

const wrapper = render( <Header /> )

describe( 'Header', () => {

    it( 'Renders correct header title', () => {
        const heading = wrapper.find( 'h1' )
        const text = heading.text()
    
        expect( text ).toEqual('Shopping List')
    } )
    
    it( 'Renders shop logo', () => {
        const svg = wrapper.find( 'svg' )
    
        expect( svg ).toHaveLength(1)
    })
} )
