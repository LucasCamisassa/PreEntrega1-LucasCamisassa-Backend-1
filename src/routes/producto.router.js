import { Router } from "express";
const productosRouter = Router();


class ProductManager {
    static ultId = 0;
}

const productos = [];

//Ruta para listado de productos:

productosRouter.get("/api/products/", (req, res) => {
    res.send(productos)
}) //HECHO

productosRouter.get("/api/products/:id", (req, res) => {
    let id = parseInt(req.params.id);
    
    const productoEncontrado = productos.find(productos => productos.id === id);

    if(productoEncontrado){
       return res.send(productoEncontrado) 
    }else{
        return res.send("Che no hay nada")
    }   
}) //HECHO

productosRouter.post("/api/products/", (req, res) => {
    const { title, description, code, price, stock, category } = req.body;

    if (typeof title !== "string" || typeof description !== "string" || typeof code !== "string") {
        return res.status(400).send("Title, description y code deben ser cadenas de texto.");
    }

    if (typeof price !== "number" || price <= 0) {
        return res.status(400).send("Price debe ser un número mayor a 0.");
    }

    if (typeof stock !== "number" || stock < 0) {
        return res.status(400).send("Stock debe ser un número no negativo.");
    }

    if (typeof category !== "string") {
        return res.status(400).send("Category debe ser una cadena de texto.");
    }

    const nuevoProducto = {
        id: ++ProductManager.ultId,
        title,
        description,
        code,
        price,
        status: true,
        stock,
        category
    };

    productos.push(nuevoProducto)
    console.log(productos);
    res.send("Producto Agregado")
}) //HECHO

productosRouter.put("/api/products/:id", (req, res) =>{
    let id = parseInt(req.params.id);
    const { title, description, code, price, status, stock, category } = req.body;

    const productoIndex = productos.findIndex(productos => productos.id === id);

    if(productoIndex !== -1){
        productos[productoIndex].title = title;
        productos[productoIndex].description = description;
        productos[productoIndex].code = code;
        productos[productoIndex].price = price;
        productos[productoIndex].status = status;
        productos[productoIndex].stock = stock;
        productos[productoIndex].category = category;


        console.log(productos);
        res.send({status: "success", mensaje: "Producto actualizado"})

    }else{
        res.status(404).send({status:"error", mensaje: "Producto no encontrado"})
    }
})//HECHO

productosRouter.delete("/api/products/:id", (req, res) => {
    let id = parseInt(req.params.id);

    const productoIndex = productos.findIndex(productos => productos.id === id);

    if(productoIndex !== -1){
     productos.splice(productoIndex, 1);
     console.log(productos)   
    }
})//HECHO

export default productosRouter;