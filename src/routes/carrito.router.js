import { Router } from "express";
const carritoRouter = Router();

class CartManager {
         static ultId = 0;
     }

const carrito = [];

carritoRouter.get("/api/carts/", (req, res) => {
    res.send(carrito);
}) //HECHO

carritoRouter.post("/api/carts/", (req, res) => {

    const nuevoProductoCarrito ={
        cid: ++CartManager.ultId,
        products: [],
    }

    carrito.push(nuevoProductoCarrito)
    console.log(carrito);

    if(nuevoProductoCarrito){
        res.send(nuevoProductoCarrito)
    }else{
        res.status(201).send({message: "carrito creado exitosamente", carrito: nuevoProductoCarrito})
    }
    
}) // HECHO

carritoRouter.get("/api/carts/:cid", (req, res) => {
    const {cid} = req.params;
    const nuevoCarrito = carrito.find (c => c.cid === parseInt(cid));
    
    if(!nuevoCarrito){
        return res.status(404).send({message:"No hay carrito"})
    }
    
    res.send(nuevoCarrito)
}) //HECHO

carritoRouter.post("/api/carts/:cid/product/:id", (req, res) => {
    const {cid, id} = req.params;

    const carritoEncontrado = carrito.find(c => c.id === parseInt(cid));
    if(!carrito){
        return res.status(404).send({message: "Carrito no esta"});
    }

    const producto = productos.find(p => p.id === parseInt(id));
    if (!producto) {
        return res.status(404).send({ message: "Producto se fue" });
    }

    const productoEnCarrito = carritoEncontrado.products.find(p => p.product === parseInt(id));


    if(productoEnCarrito){
        productoEnCarrito.quantity += 1;
    }else{
        carritoEncontrado.products.push({producto: parseInt(id), quantity: 1});
    }
    
    res.send({message: "Producto agregado al carrito", carrito})
}) //HECHO

export default carritoRouter;