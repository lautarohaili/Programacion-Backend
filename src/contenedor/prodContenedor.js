const fs = require("fs");

const path = "src/files/prods.json";

class ProdContenedor {
  // Class contenedora, gestiona multiples prods
  getAllProd = async () => {
    try {
      if (fs.existsSync(path)) {
        let fileData = await fs.promises.readFile(path, "utf-8");
        let prods = JSON.parse(fileData);
        return prods;
      } else {
        return [];
      }
    } catch (error) {
      console.log("Hubo un error" + error);
    }
  };

  addProd = async (prod) => {
    try {
      let prods = await this.getAllProd();
      if (prods.length === 0) {
        // There aren't no prods
        prod.id = 1;
        prods.push(prod);
        await fs.promises.writeFile(path, JSON.stringify(prods, null, "\t"));
      } else {
        prod.id = prods[prods.length - 1].id + 1;
        console.log("Añadiendo producto ...");
        prods.push(prod);
        console.log(`Producto añadido correctamente!! Su ID es: ${prod.id}`);
        await fs.promises.writeFile(path, JSON.stringify(prods, null, "\t"));
      }
    } catch (error) {
      console.log("No se pudo escribir: " + error);
    }
  };

  getById = async (id) => {
    try {
      let objetId = await this.getAllProd();
      const filtrar = objetId.find((item) => {
        if (id == item.id) {
          return item;
        } else {
          return null;
        }
      });

      return console.log("GetByID: ", filtrar);
    } catch (error) {
      console.log("No se encontro el id: ", error);
    }
  };

  deleteById = async (id) => {
    try {
      let eliminar = await this.getAllProd();
      const eliminate = eliminar.filter((item) => {
        if (id != item.id) {
          return item;
        } else {
          return null;
        }
      });
      const nuevoArray = fs.promises.writeFile(
        path,
        JSON.stringify(eliminate, null, "\t")
      );
      console.log("deletByID: Producto eliminado correctamente");
      return nuevoArray;
    } catch (error) {
      console.log("No se puedo eliminar: ", error);
    }
  };

  deleteAll = async () => {
    try {
      await fs.promises.writeFile(path, "[]");
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = ProdContenedor;
