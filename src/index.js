const ProdContenedor = require("./contenedor/prodContenedor.js");

const prodService = new ProdContenedor();

const enviroment = async () => {
  console.log("Opteniendo productos ...");
  let prods = await prodService.getAllProd();
  console.log(prods);

  // console.log("Añadiendo un producto");

  let prod = {
    title: "Lapicera",
    price: 250,
    thumbnail: "https://img.icons8.com/emoji/344/fountain-pen-emoji.png",
  };

  let id = 2;

  let deleteById = 1;

  await prodService.addProd(prod);
  // await prodService.getById(id);
  // await prodService.deleteById(deleteById);

  // await prodService.deleteAll();
};

enviroment();
