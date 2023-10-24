class DataService{
    constructor(){

    }
    getData(apivegpont,callback,hibacallback){
    axios.get(apivegpont)
        .then(function (response) {
          // handle success
          /*console.log("valasz objektum",response);
          console.log("adatok",response.data.nevek)
          console.log("státusz",response.status);
          console.log("Státusz szöveg",response.statusText)
          console.log("Válasz fejléc",response.headers);
          console.log("Válasz config",response.config)*/
          callback(response.data.nevek)
        })
        .catch(function (error) {
          // handle error
          hibacallback(error)
        })
        .finally(function () {
          // always executed
        });
    }


}
export default DataService