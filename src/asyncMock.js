import gramajoImg from './img/Gramajo.jpg';
import napoImg from './img/Napolitana.jpg';
import bifeImg from './img/Bife.jpg';
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