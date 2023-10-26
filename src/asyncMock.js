//asyncMock
import gramajoImg from './img/Gramajo.jpg';
import napoImg from './img/Napolitana.jpg';
import bifeImg from './img/Bife.jpg';
import cocaImg from './img/Coca.jpg';
import aguaImg from './img/Agua.jpg';
import chedarImg from './img/chedar.jpg';
import baconImg from './img/bacon.jpg';
import lentejasImg from './img/lentejas.jpg';
import feijoadaImg from './img/Feijoada.jpg';
import mariscosImg from './img/Mariscos.jpg';

const products = [
    {
        id: '1',
        name: 'Milanesa Napolitana',
        price: 850,
        category: 'Minutas',
        img: napoImg,
        stock: 50,
        description: 'Milanesa de carne con Jamon y queso bañado en salsa de tomate con Papas fritas de guarnicion'
    },
    { id: '2', name: 'Gramajo', price: 550, category: 'Minutas', img: gramajoImg, stock: 50, description: 'Papas, huevo, panceta, ajo, cebolla y morron' },
    { id: '3', name: 'Bife encebollado', price: 650, category: 'Minutas', img: bifeImg, stock: 50, description: 'Bistec de ternera, cebolla, morron, Salsa de la casa, pure de papas'},
    { id: '4', name: 'Cocacola', price: 150, category: 'Bebida', img: cocaImg, stock: 50, description: 'colaclola normal, zero o light'},
    { id: '5', name: 'Agua', price: 100, category: 'Bebida', img: aguaImg, stock: 50, description: 'agua mineral'},
    { id: '6', name: 'Hamburgesa con chedar', price: 280, category: 'Sanguches', img: chedarImg, stock: 50, description: 'haburgesa con chedar de la casa'},
    { id: '7', name: 'Hamburguesa 2 Bacon', price: 450, category: 'Sanguches', img: baconImg, stock: 50, description: 'haburgesa doblecarne con bacon'},
    { id: '8', name: 'Guiso de lentejas', price: 570, category: 'Olla', img: lentejasImg, stock: 50, description: 'Guiso de lentejas casero con choriso y carne vacuna'},
    { id: '9', name: 'Feijoada', price: 680, category: 'Olla', img: feijoadaImg, stock: 50, description: 'Porotos negros con caldo cocinado estilo brasilero'},
    { id: '10', name: 'Sopa de mariscos', price: 750, category: 'Olla', img: mariscosImg, stock: 50, description: 'Sopa con mejillones, calamares y rabas'},
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        const filteredProducts = products.filter((product) => product.category === category);
        resolve(filteredProducts);
        }, 500);
    });
};