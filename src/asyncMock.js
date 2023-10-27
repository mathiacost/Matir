// //asyncMock
// import gramajoImg from '../img/Gramajo.jpg';
// import napoImg from '../img/Napolitana.jpg';
// import bifeImg from '../img/Bife.jpg';
// import cocaImg from '../img/Coca.jpg';
// import aguaImg from '../img/Agua.jpg';
// import chedarImg from '../img/chedar.jpg';
// import baconImg from '../img/bacon.jpg';
// import lentejasImg from '../img/lentejas.jpg';
// import feijoadaImg from '../img/Feijoada.jpg';
// import mariscosImg from '../img/Mariscos.jpg';

export const products = [
    { name: 'Gramajo', price: 550, category: 'Minutas', img: '../img/Gramajo.jpg', stock: 50, description: 'Papas, huevo, panceta, ajo, cebolla y morron' },
    { name: 'Bife encebollado', price: 650, category: 'Minutas', img: '../img/Bife.jpg', stock: 50, description: 'Bistec de ternera, cebolla, morron, Salsa de la casa, pure de papas'},
    { name: 'Cocacola', price: 150, category: 'Bebida', img: '../img/Coca.jpg', stock: 50, description: 'colaclola normal, zero o light'},
    { name: 'Agua', price: 100, category: 'Bebida', img: '../img/Agua.jpg', stock: 50, description: 'agua mineral'},
    { name: 'Hamburgesa con chedar', price: 280, category: 'Sanguches', img: '../img/chedar.jpg', stock: 50, description: 'haburgesa con chedar de la casa'},
    { name: 'Hamburguesa 2 Bacon', price: 450, category: 'Sanguches', img: '../img/bacon.jpg', stock: 50, description: 'haburgesa doblecarne con bacon'},
    { name: 'Guiso de lentejas', price: 570, category: 'Olla', img: '../img/lentejas.jpg', stock: 50, description: 'Guiso de lentejas casero con choriso y carne vacuna'},
    { name: 'Feijoada', price: 680, category: 'Olla', img: '../img/Feijoada.jpg', stock: 50, description: 'Porotos negros con caldo cocinado estilo brasilero'},
    { name: 'Sopa de mariscos', price: 750, category: 'Olla', img: '../img/Mariscos.jpg', stock: 50, description: 'Sopa con mejillones, calamares y rabas'},
    
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