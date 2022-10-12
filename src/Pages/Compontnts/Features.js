import React from 'react'
import { Container, GridThree } from '../../Styles/Common.styled'
import { FeatureCard, FeaturesSection } from '../../Styles/Hero.styled'
import bootstrap from '../../images/Bootstrap.png'
import materialUI from '../../images/Material UI.png'
import tailwind from '../../images/Tailwind.png'

const data = [
    {
        id:1,
        name:'Bootstrap',
        bgColor: "rgba(109, 67, 161, 0.3)",
        color: "rgba(109, 67, 161, 1)",
        img: bootstrap,

    },
    {
        id:1,
        name:'Material UI',
        bgColor:"rgba(61, 128, 247, 0.3)",
        color: "rgba(61, 128, 247, 1)",
        img: materialUI,

    },
    {
        id:1,
        name:'Tailwind',
        bgColor: "rgba(66, 166, 178, 0.3)",
        color: "rgba(66, 166, 178, 1)",
        img: tailwind,

    }
]

export default function Features() {
  return (
    <FeaturesSection>
        <Container>
        <h2>Others well known styling framework </h2>
        <GridThree gap="5rem">
        {
            data.map(feature =>(
                <FeatureCard bgColor={feature.bgColor} color={feature.color}>
                    <div>
                        <img src={feature.img} alt="" />
                    </div>
                    <div className='caption'>
                        <p>{feature.name}</p>
                    </div>
                </FeatureCard>
            ))
        }
        </GridThree>
        </Container>
    </FeaturesSection>
  )
}
