class Food {
    id: number
    ProductTitle: string
    ProductRating: number
    ProductDetails: string
    ProductPhoto: string
    ProductCategories: string[]
    ProductToLink: string

    constructor(
        id: number,
        ProductTitle: string,
        ProductRating: number,
        ProductDetails: string,
        ProductPhoto: string,
        ProductCategories: string[],
        ProductToLink: string
    ) {
        this.id = id
        this.ProductTitle = ProductTitle
        this.ProductRating = ProductRating
        this.ProductDetails = ProductDetails
        this.ProductPhoto = ProductPhoto
        this.ProductCategories = ProductCategories
        this.ProductToLink = ProductToLink
    }
}

export default Food
