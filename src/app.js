import express from "express";
import productosRouter from "./routes/producto.router.js";
import carritoRouter from "./routes/carrito.router.js";

const PUERTO = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/", productosRouter)
app.use("/cart", carritoRouter)

// class ProductManager {
//     static ultId = 0;
// }

// class CartManager {
//     static ultId = 0;
// }

// //Usar 2 routes  /products y /carts

// const productos = [];

// //Ruta para listado de productos:

// app.get("/api/products/", (req, res) => {
//     res.send(productos)
// }) //HECHO

// app.get("/api/products/:id", (req, res) => {
//     let id = parseInt(req.params.id);
    
//     const productoEncontrado = productos.find(productos => productos.id === id);

//     if(productoEncontrado){
//        return res.send(productoEncontrado) 
//     }else{
//         return res.send("Che no hay nada")
//     }   
// }) //HECHO

// app.post("/api/products/", (req, res) => {
//     const { title, description, code, price, stock, category } = req.body;

//     if (typeof title !== "string" || typeof description !== "string" || typeof code !== "string") {
//         return res.status(400).send("Title, description y code deben ser cadenas de texto.");
//     }

//     if (typeof price !== "number" || price <= 0) {
//         return res.status(400).send("Price debe ser un número mayor a 0.");
//     }

//     if (typeof stock !== "number" || stock < 0) {
//         return res.status(400).send("Stock debe ser un número no negativo.");
//     }

//     if (typeof category !== "string") {
//         return res.status(400).send("Category debe ser una cadena de texto.");
//     }

//     const nuevoProducto = {
//         id: ++ProductManager.ultId,
//         title,
//         description,
//         code,
//         price,
//         status: true,
//         stock,
//         category
//     };

//     productos.push(nuevoProducto)
//     console.log(productos);
//     res.send("Producto Agregado")
// }) //HECHO

// app.put("/api/products/:id", (req, res) =>{
//     let id = parseInt(req.params.id);
//     const { title, description, code, price, status, stock, category } = req.body;

//     const productoIndex = productos.findIndex(productos => productos.id === id);

//     if(productoIndex !== -1){
//         productos[productoIndex].title = title;
//         productos[productoIndex].description = description;
//         productos[productoIndex].code = code;
//         productos[productoIndex].price = price;
//         productos[productoIndex].status = status;
//         productos[productoIndex].stock = stock;
//         productos[productoIndex].category = category;


//         console.log(productos);
//         res.send({status: "success", mensaje: "Producto actualizado"})

//     }else{
//         res.status(404).send({status:"error", mensaje: "Producto no encontrado"})
//     }
// })//HECHO

// app.delete("/api/products/:id", (req, res) => {
//     let id = parseInt(req.params.id);

//     const productoIndex = productos.findIndex(productos => productos.id === id);

//     if(productoIndex !== -1){
//      productos.splice(productoIndex, 1);
//      console.log(productos)   
//     }
// })//HECHO



// const carrito = [];

// app.post("/api/carts/", (req, res) => {

//     const nuevoProductoCarrito ={
//         cid: ++CartManager.ultId,
//         products: [],
//     }

//     carrito.push(nuevoProductoCarrito)
//     console.log(carrito);

//     if(nuevoProductoCarrito){
//         res.send(nuevoProductoCarrito)
//     }else{
//         res.status(201).send({message: "carrito creado exitosamente", carrito: nuevoProductoCarrito})
//     }
    
// }) // HECHO

// app.get("/api/carts/:cid", (req, res) => {
//     const {cid} = req.params;
//     const nuevoCarrito = carrito.find (c => c.cid === parseInt(cid));
    
//     if(!nuevoCarrito){
//         return res.status(404).send({message:"No hay carrito"})
//     }
    
//     res.send(nuevoCarrito)
// }) //HECHO

// app.post("/api/carts/:cid/product/:id", (req, res) => {
//     const {cid, id} = req.params;

//     const carritoEncontrado = carrito.find(c => c.id === parseInt(cid));
//     if(!carrito){
//         return res.status(404).send({message: "Carrito no esta"});
//     }

//     const producto = productos.find(p => p.id === parseInt(id));
//     if (!producto) {
//         return res.status(404).send({ message: "Producto se fue" });
//     }

//     const productoEnCarrito = carritoEncontrado.products.find(p => p.product === parseInt(id));


//     if(productoEnCarrito){
//         productoEnCarrito.quantity += 1;
//     }else{
//         carritoEncontrado.products.push({producto: parseInt(id), quantity: 1});
//     }
    
//     res.send({message: "Producto agregado al carrito", carrito})
// }) //HECHO



app.listen(PUERTO, () => {
    console.log(`Escuchando el puerto: ${PUERTO}`)
})
