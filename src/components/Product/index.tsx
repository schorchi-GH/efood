import React from 'react'
import Button from '../Button'
import { Card, Title, Description, Rating, Categories } from './styles'
import Star from '../../assets/estrela.png'

type Props = {
    ProductTitle: string
    ProductRating: number
    ProductDetails: string
    ProductPhoto: string
    ProductCategories: string[]
    ProductToLink: string
}

const Product = ({
    ProductTitle,
    ProductRating,
    ProductDetails,
    ProductPhoto,
    ProductCategories,
    ProductToLink
}: Props) => (
    <Card>
        <img src={ProductPhoto} alt="Hioki sushi" />
        <Categories>
            {ProductCategories.map((info) => (
                <Button key={info}>{info}</Button>
            ))}
        </Categories>
        <div className="ContainerTop">
            <Title>{ProductTitle}</Title>
            <Rating>
                <h3>{ProductRating}</h3>
                <img src={Star} alt="Estrela amarela" />
            </Rating>
        </div>
        <Description>{ProductDetails}</Description>
        <Button type="link" to={ProductToLink}>
            Saiba mais
        </Button>
    </Card>
)

export default Product
