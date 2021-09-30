import styled from "styled-components"
import {FavoriteBorder, Search, ShoppingCartOutlined} from "@material-ui/icons"

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #00000021;
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all 0.5s ease;
`
const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #EEEEEE;
position: relative;
&:hover ${Info}{
    opacity: 1;
}
`
const Circle = styled.div`
/* width: 330px;
height: 330px;
border-radius: 50%;
background-color: #FFF338;
position: absolute; */
`
const Image = styled.img`
height: 75%;
width: 75%;
object-fit: cover;
z-index: 2;
`

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
&:hover{
    background-color: #f0fbff;
    transform: scale(1.1);
}
`

export default function Product({item}) {
    return (
        <Container>
           <Circle/>
           <Image src={item.img} /> 
           <Info>
               <Icon>
                   <ShoppingCartOutlined/>
               </Icon>
               <Icon>
                   <Search/>
               </Icon>
               <Icon>
                   <FavoriteBorder/>
               </Icon>
           </Info>
        </Container>
    )
}
