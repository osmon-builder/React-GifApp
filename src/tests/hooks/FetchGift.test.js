import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hook use FetchGifs', () => {

    test('debe de retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate }  = renderHook( () => useFetchGifs( 'Goku' ) );
       
        const {data, loading} = result.current;
        await waitForNextUpdate();
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    test('debe de retornar un arreglo de imgs y el loadin en flase', async() => {
        
        const { result, waitForNextUpdate }  = renderHook( () => useFetchGifs( 'Goku' ) );
        await waitForNextUpdate();
        const {data, loading} = result.current;
        
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
    
    
})
