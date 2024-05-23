import React from 'react'
import Button from '../Button'
import { Card, Title, Description, Rating, Categories } from './styles'
import Star from '../../assets/estrela.png'

type Props = {
    RestaurantTitle: string
    RestaurantRating: number
    RestaurantDetails: string
    RestaurantPhoto: string
    RestaurantCategories: string[]
    RestaurantToLink: string
}

const Restaurant = ({
    RestaurantTitle,
    RestaurantRating,
    RestaurantDetails,
    RestaurantPhoto,
    RestaurantCategories,
    RestaurantToLink
}: Props) => (
    <Card>
        <img src={RestaurantPhoto} alt="Hioki sushi" />
        <Categories>
            {RestaurantCategories.map((info) => (
                <Button key={info}>{info}</Button>
            ))}
        </Categories>
        <div className="ContainerTop">
            <Title>{RestaurantTitle}</Title>
            <Rating>
                <h3>{RestaurantRating}</h3>
                <img src={Star} alt="Estrela amarela" />
            </Rating>
        </div>
        <Description>{RestaurantDetails}</Description>
        <Button type="link" to={RestaurantToLink}>
            Saiba mais
        </Button>
    </Card>
)

export default Restaurant
