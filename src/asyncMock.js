// //asyncMock
// import gramajoImg from './public/img/Gramajo.jpg';
// import napoImg from './public/img/Napolitana.jpg';
// import bifeImg from './public/img/Bife.jpg';
// import cocaImg from './public/img/Coca.jpg';
// import aguaImg from './public/img/Agua.jpg';
// import chedarImg from './public/img/chedar.jpg';
// import baconImg from './public/img/bacon.jpg';
// import lentejasImg from './public/img/lentejas.jpg';
// import feijoadaImg from './public/img/Feijoada.jpg';
// import mariscosImg from './public/img/Mariscos.jpg';

const products = [
    {
        id: '1',
        name: 'Milanesa Napolitana',
        price: 850,
        category: 'Minutas',
        img: '',
        stock: 50,
        description: 'Milanesa de carne con Jamon y queso bañado en salsa de tomate con Papas fritas de guarnicion'
    },
    { id: '2', name: 'Gramajo', price: 550, category: 'Minutas', img: '', stock: 50, description: 'Papas, huevo, panceta, ajo, cebolla y morron' },
    { id: '3', name: 'Bife encebollado', price: 650, category: 'Minutas', img: '', stock: 50, description: 'Bistec de ternera, cebolla, morron, Salsa de la casa, pure de papas'},
    { id: '4', name: 'Cocacola', price: 150, category: 'Bebida', img: '', stock: 50, description: 'colaclola normal, zero o light'},
    { id: '5', name: 'Agua', price: 100, category: 'Bebida', img: '', stock: 50, description: 'agua mineral'},
    { id: '6', name: 'Hamburgesa con chedar', price: 280, category: 'Sanguches', img: '', stock: 50, description: 'haburgesa con chedar de la casa'},
    { id: '7', name: 'Hamburguesa 2 Bacon', price: 450, category: 'Sanguches', img: '', stock: 50, description: 'haburgesa doblecarne con bacon'},
    { id: '8', name: 'Guiso de lentejas', price: 570, category: 'Olla', img: '', stock: 50, description: 'Guiso de lentejas casero con choriso y carne vacuna'},
    { id: '9', name: 'Feijoada', price: 680, category: 'Olla', img: '', stock: 50, description: 'Porotos negros con caldo cocinado estilo brasilero'},
    { id: '10', name: 'Sopa de mariscos', price: 750, category: 'Olla', img: '', stock: 50, description: 'Sopa con mejillones, calamares y rabas'},
    
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