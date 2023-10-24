class HibaView{
    #szuloelem
    #error
    constructor(error,szuloelem){
    this.#szuloelem=szuloelem
    this.#error=error
    this.#szuloelem.html(this.#error.message)
    }
}
export default HibaView