import AdatModell from "../Model/Adatmodel.js";
import Adatview from "../View/Adatview.js";
import DataService from "../Model/Dataservice.js";
import HibaView from "../View/Hibaview.js";
import TableView from "../View/Tableview.js";
class AdatController{
    constructor(){
        console.log("Constr")
        this.dataservice=new DataService()
        this.dataservice.getData("../adat.json", this.adatokMegj, this.hibaMegj)
        //this.ADATMODELL=new AdatModell(lista)
    }
    adatokMegj(lista){
        new Adatview(lista,$(".lista"))
    }
    hibaMegj(error){
        new HibaView(error,$(".lista"))
    }
    /*Tableview(){

    }*/ 
}
export default AdatController