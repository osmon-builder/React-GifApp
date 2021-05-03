import React, {useState} from 'react'
import { AddCategory } from './Componentes/AddCategory';
import { GifGrid } from './Componentes/GifGrid';

export const GifExpertApp = ({defaultCategories = []}) => {

    // const categories = ['One Punch', 'Samuray X', 'Dragon Ball'];

    const [ categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () =>{
    //     // setCategories ([...categories, 'Naruto']) 
    //     setCategories( cats => [...cats, 'Naruto'])

    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories}/>
            <hr />

       

            <ol>
                {
                    categories.map( category =>
                         <GifGrid 
                         key={category}
                         category={category}/>
                    )
                }
            </ol>

        </>
    )
}
