import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { GifGrid } from '../../Componentes/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('GrifGridu', () => {

    const category = 'Goku';
    

    test('Mostrar el componente correctamente ', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category = {category}/>)
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'http://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
            {id: '123',
            url: 'http://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
            }   
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
       
        const wrapper = shallow(<GifGrid category = {category}/>)

        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe( gifs.length );
        
    })
    
    
   

   
  
    
})
