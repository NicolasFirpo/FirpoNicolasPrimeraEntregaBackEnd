class ProductManager{
    constructor(){
        this.products= []
    }

getProducts= ()=> this.products
getProductsById = (id)=>{
    const productDb = this.products.find(product=>product.id===0)
    if (!productDb){
        return `No se encuentra el producto con id ${id}`
    }
}
addProduct= (newItem)=>{
    const productoDb = this.products.find(product => product.code === newItem.code)

    if (productoDb){
        return `Se encuentra el producto en el sistema`
    
    
    } if(typeof newItem.title, newItem.description , newItem.price , newItem.picture , newItem.code , newItem.stock){

        return `No se aceptan titulos vacios`

    }if (this.products.length===0){
        newItem.id = 1
        this.products.push(newItem)
    
    } else {
        this.products = [...this.products, {...newItem, id: this.products[this.products.length - 1].id +1}]
    }
}

}

const producto = new ProductManager()

console.log(producto.addProduct({
    title:'Iphone',
    description:'Mobile Phone',
    price: 1000,
    picture: 'image route',
    code: 1,
    stock: 10
}));
console.log(producto.addProduct({
    title:'Imac',
    description:'Mobile Computer',
    price: 3000,
    picture: 'image route',
    code: 2,
    stock: 5
}));

console.log(producto.getProducts)
console.log(producto.getProductsById(1));
console.log(producto.getProductsById(2));
console.log(producto.getProductsById(3));