import React from 'react'
import styled from 'styled-components'
import 'remixicon/fonts/remixicon.css'
import Image from 'next/image'

const Places = () => {

    const placeData = [
        {
            id: 1,
            imageUrl: '/images/v-places/p-image1.jpg',
            rate: '5.0',
            title: 'Muk',
            subTitle: 'Glass tower',
            price: '฿1,500'
        },
        {
            id: 2,
            imageUrl: '/images/v-places/p-image2.jpg',
            rate: '5.0',
            title: 'Wan Yai',
            subTitle: 'Ghost Christ Wat Song Kon‎',
            price: '฿1,500'
        },
        {
            id: 3,
            imageUrl: '/images/v-places/p-image3.jpg',
            rate: '5.0',
            title: 'Muk',
            subTitle: '‎Thai-Lao Friendship Bridge',
            price: '฿1,500'
        },
        {
            id: 4,
            imageUrl: '/images/v-places/p-image4.jpg',
            rate: '5.0',
            title: 'Kham Cha E',
            subTitle: '‎‎Phu Pha San',
            price: '฿1,500'
        },
        {
            id: 5,
            imageUrl: '/images/v-places/p-image5.jpg',
            rate: '5.0',
            title: 'Kham Cha E',
            subTitle: 'Huai Kantai Yai Reservoir',
            price: '฿1,500'
        },
        {
            id: 6,
            imageUrl: '/images/v-places/p-image6.jpg',
            rate: '5.0',
            title: 'Muk',
            subTitle: 'Wat Phu Manorom‎‎',
            price: '฿1,500'
        },
    ]

    return (
        <PlaceSection>
            <PleceTitle>
                Choose your place
                <p>When you're in a good place, we're happy for you.</p>
            </PleceTitle>
            <PlaceContainer>
                {
                    placeData.map(item => (
                        <PlaceCard key={item.id}>
                            <PlaceImage
                                src={item.imageUrl}
                                alt="place-image"
                            />
                            <PlaceContent>
                                <PlaceRate>
                                    <i className="ri-star-line"></i>
                                    <PleacRateNumber>{item.rate}</PleacRateNumber>
                                </PlaceRate>
                                <PlaceData>
                                    <PlaceTitle>{item.title}</PlaceTitle>
                                    <PlaceSubTitle>{item.subTitle}</PlaceSubTitle>
                                    {/* <PlacePrice>{item.price}</PlacePrice> */}
                                </PlaceData>
                            </PlaceContent>
                            {/* <PlaceButton>
                                <i className="ri-arrow-right-line"></i>
                            </PlaceButton> */}
                        </PlaceCard>
                    ))
                }
            </PlaceContainer>
        </PlaceSection>
    )
}

export default Places


// # Styled-components
const PlaceSection = styled.section`
    padding: 4.5rem 0 2.5rem;

    @media screen and (min-width: 768px) {
        padding: 7rem 0 2rem;
    }
`

const PleceTitle = styled.h2`
    font-size: 1.25rem;
    color: hsl(190, 64%, 18%);
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 2rem;

    p {
        margin-top: .75rem;
        text-transform: none;
        font-size: .75rem;
        font-weight: 500;
    }
`

const PlaceContainer = styled.div`
    max-width: 968px;
    margin-left: 1rem;
    margin-right: 1rem;

    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(2, max-content);
    justify-content: center;

    @media screen and (min-width: 568px) {
        grid-template-columns: repeat(3, max-content);
    }

    @media screen and (min-width: 768px) {
        padding-top: 2rem;
    }

    @media screen and (min-width: 1024px) {
        gap: 3rem 2rem;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 1200px) {
        max-width: 1024px;
    }
`

const PlaceCard = styled.div`
    height: 230px;
    position: relative;
    overflow: hidden;

     @media screen and (min-width: 1024px) {
        height: 333px;
        width: 250px;
     }

     &:hover img {
        transform: scale(1.1);
    }
`

const PlaceImage = styled.img`
    height: 230px;
    transition: 0.4s;
    /* overflow: hidden; */

    /* &:hover {
        transform: scale(1.1);
    } */

    @media screen and (min-width: 1024px) {
        /* height: 263px; */
        height: auto;
        /* width: 250px; */
     }
`

const PlaceContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.75rem 0.75rem 1rem;
    color: #fff;
`

const PlaceRate = styled.span`
    align-self: flex-end;
    display: flex;
    align-items: center;
    color: #fff;

    i {
        font-size: 0.75rem;
        margin-right: .25rem;
    }
`

const PleacRateNumber = styled.span`
    font-size: .813rem;
`

const PlaceData = styled.div``

const PlaceTitle = styled.h3`
    font-size: 1rem;
    margin-bottom: .25rem;
    color: #fff;
`

const PlaceSubTitle = styled.span`
    font-size: .75rem;
    margin-bottom: 1.25rem;
    display: block;
`

const PlacePrice = styled.span`
    display: block;
`

const PlaceButton = styled.button`
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0.75rem 1rem;

    display: flex;
    align-items: center;
    column-gap: 0.25rem;
    background-color: hsl(190, 64%, 22%);
    color: #fff;
    font-weight: 600;
    transition: 0.3s;

    &:hover {
        background-color: hsl(190, 64%, 15%);
    }
`
