import image from './assets/image.png'
import {Block} from './classes/blocks'

const text = `pure JS site without any frameworks with UI`

export const model =[
    new Block('title', 'pure JS site', {
        tag : 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),

   new Block('image', image,{
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
                },
         imageStyles: {
            width: '500px',
            height: 'auto'
            },
        alt: 'its image'
    }),

   new Block('columns', [
    'pure JS without any frameworks',
    'pure JS Solid OOP',
    'pure JS - any UI with your hands'], 
    {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
                }
    }),
   new Block('text', text, {
        tag: 'p',
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'text-align': 'center',
            'font-weight': 'bold'
                }
    }),
    
]