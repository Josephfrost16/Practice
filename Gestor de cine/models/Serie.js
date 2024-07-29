const Filehandler = require("../util/FileHandler");

const path = require("path");

const Datapath = path.join(
  path.dirname(require.main.filename),
  "data",
  "Series.json"
); 

module.exports = class Serie {
  constructor(Id, Nombre, Genero, Descripcion, ImgUrl,VidUrl) {
    this.Id = Id;
    this.Nombre = Nombre;
    this.Genero = Genero;
    this.Descripcion = Descripcion;
    this.ImgUrl = ImgUrl;
    this.VidUrl =VidUrl;
  }

  Save(){
    Filehandler.GetAllDataFromFile(Datapath,(Series)=>{

        if(this.Id){
            // Edit:
            const EditSerieIndex = Series.findIndex((prod)=> prod.Id === this.Id);
            Series[EditSerieIndex]= this;
            
            Filehandler.SaveDataInFile(Datapath,Series);
        }else {
            // Create nueva serie:

            this.Id = Math.random().toString();
            Series.push(this);
            
            Filehandler.SaveDataInFile(Datapath,Series);
        }
    });
  }

  static GetAll(callback){
    Filehandler.GetAllDataFromFile(Datapath,callback);
  }
  static GetById(Id,callback){

    Filehandler.GetAllDataFromFile(Datapath,(Series)=>{
        const serie = Series.find((s)=> s.Id === Id);
        callback(serie);
    });
  }

  static Filter(nombre,callback){

    Filehandler.GetAllDataFromFile(Datapath,(Series)=>{
        const filteredSeries = Series.filter((s)=> s.Nombre.includes(nombre));
        callback(filteredSeries);
    });
  }
  static DeleteById(Id){
    // Filtrado:
    Filehandler.GetAllDataFromFile(Datapath,(Series)=>{
      const newSeriesList = Series.filter((serie)=>serie.Id !==Id);
      Filehandler.SaveDataInFile(Datapath,newSeriesList);
    });
  }
}
