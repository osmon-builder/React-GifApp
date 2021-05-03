import React from 'react';
import { shallow } from 'enzyme';
import {GifExpertApp}  from '../GifExpertApp';

describe('GifExpertApp', () => {

    test('match con el snapshat', () => {
        const wrapper = shallow(<GifExpertApp/>)

        expect(wrapper).toMatchSnapshot();
        
    })
    
    test('Debe de mostrar una lista de categorias', () => {

        const categories = ['One punch', ' Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>)

        expect(wrapper.find('GifGrid').length).toBe(categories.length);
        
    })
    
})
