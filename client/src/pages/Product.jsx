
import { Add, Remove } from "@material-ui/icons"
import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import { addProduct } from "../redux/cartRedux"
import { publickRequest } from "../requestMethods"
import { mobile } from "../responsive"
import { useDispatch } from "react-redux"

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
     const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState(1);
  const dispatch = useDispatch();

  useEffect(()=>{
      const getPoduct= async()=>{
         try {
              const res = await publickRequest.get(`/products/find/${id}`);
              setProduct(res.data);
         } catch (error) {
             
         }
      }
      getPoduct();
  },[id])
  const handleQuantity =(param)=>{
    if(param ==="dec" && quantity> 0){
        setQuantity(quantity - 1)
    }else{
        setQuantity(quantity + 1)
    }
  }
  const handleClick =()=>{
    //   audate card
    dispatch(
        addProduct({...product, quantity, color, size})
    )
  }
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>${product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color: </FilterTitle>
                           {product.color?.map((c) => (
                             <FilterColor color={c} key={c} onClick={()=> setColor(c)} />
              ))}
                        </Filter>

                         <Filter>
                            <FilterTitle>Size: </FilterTitle>
                            <FilterSize onChange={(e)=> setSize(e.target.value)}>
                                {product.size?.map(s=>(
                                <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                ))}
                                
                            </FilterSize>
                        </Filter>

                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={()=> handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={()=> handleQuantity("inc")}/>
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>

            <NewsLetter/>
            <Footer/>
        </Container>
    )
}
