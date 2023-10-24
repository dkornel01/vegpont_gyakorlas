class Adatview{
    #lista
    #szuloelem
    constructor(lista,szuloelem){
        this.#szuloelem=szuloelem
        this.#lista=lista
        console.log(this.#lista)
        this.tablazatKiiro()
    //this.#szuloelem.html(this.#lista)
    }

    tablazatKiiro(){
        let kiir=""
        kiir +=`<table class="tablazat">
        `
        let tarto=Object.keys(this.#lista[0])
        for (let index = 0; index < tarto.length; index++) {
                kiir+=`<tbody>`
                kiir+=`<tr>`
                kiir+=`<th>${tarto[index]}</th>`
                kiir+=`</tr>`
                let tarto2=Object.values(this.#lista)
                
                for (let x = 0; x < tarto2.length; x++) {
                kiir+=`<tr>`
                let element=Object.values(tarto2[x])
                    kiir +=`
                    <td>${element[index]}</td>
                    `
                    console.log(element[index])
                    kiir+=`</tr>`
                }
                
                kiir+=`</tbody>`
            }
        kiir +=`
        </table>
        `
        this.#szuloelem.html(kiir)
    }
}
export default Adatview