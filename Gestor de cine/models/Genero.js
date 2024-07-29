const Filehandler = require("../util/FileHandler");

const path = require("path");

const Datapath = path.join(
  path.dirname(require.main.filename),
  "data",
  "Generos.json"
); 

module.exports = class Genero {
    constructor(Id, Nombre) {
        this.Id = Id;
        this.Nombre = Nombre;
    };

    Save(){
        Filehandler.GetAllDataFromFile(Datapath,(Generos)=>{
    
            if(this.Id){
                // Edit:
                const EditSerieIndex = Generos.findIndex((prod)=> prod.Id === this.Id);
                Generos[EditSerieIndex]= this;
                
                Filehandler.SaveDataInFile(Datapath,Generos);
            }else {
                // Create nueva serie:
    
                this.Id = Math.random().toString();
                Generos.push(this);
                
                Filehandler.SaveDataInFile(Datapath,Generos);
            }
        });
      }
    
      static GetAll(callback){
        Filehandler.GetAllDataFromFile(Datapath,callback);
      }
      static GetById(Id,callback){
    
        Filehandler.GetAllDataFromFile(Datapath,(Generos)=>{
            const serie = Generos.find((s)=> s.Id === Id);
            callback(serie);
        });
      }
    
      static Filter(nombre,callback){
    
        Filehandler.GetAllDataFromFile(Datapath,(Generos)=>{
            const filteredSeries = Generos.filter((s)=> s.Nombre.includes(nombre));
            callback(filteredSeries);
        });
      }
      static DeleteById(Id){
        // Filtrado:
        Filehandler.GetAllDataFromFile(Datapath,(Generos)=>{
          const newGenerosList = Generos.filter((Genero)=>Genero.Id !==Id);
          Filehandler.SaveDataInFile(Datapath,newGenerosList);
        });
      }    
};


