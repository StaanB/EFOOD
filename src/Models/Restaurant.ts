class RestaurantClass {
    destaque?: boolean
    categoria: string 
    imagem: string
    nome: string
    nota: string
    info: string
    id: number
    link: string

    constructor(
        destaque: boolean,
        categoria: string,
        imagem: string,
        nome: string,
        nota: string,
        info: string,
        id: number,
        link: string
    ){
        this.destaque = destaque
        this.categoria = categoria
        this.imagem = imagem
        this.nome = nome
        this.nota = nota
        this.info = info
        this.id = id
        this.link = link
    }
}

export default RestaurantClass