
import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import { mobile } from "../responsive"
const Container = styled.div``
const Wrapper = styled.div`
padding: 50px;
display: flex;
  ${mobile({ padding: "10px", flexDirection: "column"})}
`
const ImageContainer = styled.div`
flex: 1;
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({ height: "40vh", flexDirection: "column"})}
`
const InfoContainer = styled.div`
flex: 1;
padding: 0 50px;
${mobile({ padding: "0 20px"})}
`
const Title = styled.h1`
font-weight: 200;
`
const Desc = styled.p`
margin: 20px 0;`
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0;
display: flex;
justify-content: space-between;
${mobile({width: "100%" })}
`
const Filter = styled.div`
display: flex;
align-items: center;

`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0 5px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption = styled.option`
font-weight: 2;
`
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width: "100%" })}
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
font-weight: 7;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;
font-weight: 600;

`
const Button = styled.button`
padding: 15px;
border: 1px solid teal;
background-color: white;
color: teal;
font-weight: 500;
cursor: pointer;
transition: all 0.5s ease;
&:hover{
    background-color: teal;
    color: white;
}
`


export default function Product() {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://images.pexels.com/photos/2705753/pexels-photo-2705753.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Sweater</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea iure a quidem, laudantium inventore nesciunt facilis pariatur. Soluta odit suscipit sit labore ipsam dignissimos aliquam ex maxime iste quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit in temporibus sit nisi! Cumque corrupti exercitationem, est aliquam aspernatur temporibus, dignissimos sequi dolores magni placeat reiciendis molestias! Provident, fugiat praesentium!</Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color: </FilterTitle>
                            <FilterColor color="beige"/>
                            <FilterColor color="green"/>
                            <FilterColor color="gray"/>
                        </Filter>

                         <Filter>
                            <FilterTitle>Size: </FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>

                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>

            <NewsLetter/>
            <Footer/>
        </Container>
    )
}
