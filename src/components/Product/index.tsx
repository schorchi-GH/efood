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
}

const Product = ({
    ProductTitle,
    ProductRating,
    ProductDetails,
    ProductPhoto,
    ProductCategories
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
        <Button type="link">Saiba mais</Button>
    </Card>
)

export default Product
