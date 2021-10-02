
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from '../components/Announcement'
import Footer from "../components/Footer" 
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"
import { useSelector } from "react-redux"
import StripeCheckout from "react-stripe-checkout"
import { useEffect, useState } from "react"
import { userRequest } from "../requestMethods"
import { useHistory } from "react-router"

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``
const Wrapper = styled.div`
padding: 20px;
${mobile({padding: "10px" })}
`
const Title = styled.h1`
font-weight: 300;
text-align: center;

`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=> props.type ==="filled" && "none"};
background-color: ${props=> props.type === "filled"?"black" : "white"};
color: ${props=> props.type ==="filled" ?  "white" : "black"};
`
const TopTexts = styled.div`
display: flex;
${mobile({display: "none" })}
`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
/* align-items: center; */
${mobile({flexDirection: "column" })}
`
const Info = styled.div`
flex: 3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
${mobile({flexDirection: "column" })}
`
const ProductDetail = styled.div`
flex:2;
display: flex;
`
const Image = styled.img`
width: 200px;
height: 200px;
object-fit: cover;
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`
const ProdutName = styled.span``
const ProdutId = styled.span``
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color: ${props => props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const PoductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;

`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin: " 5px 15px" })}
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({marginBottom: "15px" })}
`
const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
margin: 20px;
`
const Summary = styled.div`
flex: 1;
/* display: flex;
flex-direction: column; */
border: 0.5px solid lightgray ;
padding: 20px;
height: 50vh;
`
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 30px 0;
display: flex;
justify-content: space-between;
`
const SummaryItemText = styled.div`
font-weight: ${props=> props.type === "total" && "500"};
font-size: ${props=> props.type === "total" && "24px"};
`
const SummaryItemPrice = styled.div``
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`

export default function Cart() {
 const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };
console.log(cart.total * 100)
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        history.push("/success", { data: res.data });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);
    return (
        <Container>
            <Navbar/>
            <Announcement/>
         <Wrapper>
             <Title>YOUR BAG</Title>
             <Top>
                 <TopButton>CONTINUE SHOPPING</TopButton>
                 <TopTexts>
                     <TopText>Shopping Bag (2)</TopText>
                     <TopText>Your Wishlist (0)</TopText>
                 </TopTexts>
                 <TopButton type="filled">CHECKOUT NOW</TopButton>
             </Top>
             <Bottom>
                 <Info>
                    { cart.products.map(product => (
                    <>
                    <Product key={product._id}>
                         <ProductDetail>
                        <Image src={product.img} />
                        <Details>
                            <ProdutName><b>Product</b>{product.title}</ProdutName>
                            <ProdutId><b>ID: </b>{product._id}</ProdutId>
                            <ProductColor color={product.color}/>
                            <ProductSize><b>Size: </b>{product.size}</ProductSize>
                        </Details>
                         </ProductDetail>
                         <PriceDetail>
                            <PoductAmountContainer>
                                <Add/>
                                <ProductAmount>{product.quantity}</ProductAmount>
                                <Remove/>
                            </PoductAmountContainer>
                            <ProductPrice>${product.price * product.quantity}</ProductPrice>
                         </PriceDetail>
                     </Product>
                      <Hr/>
                      </>
                     ))}
            
                 </Info>
                 <Summary>
                     <SummaryTitle>Order Summary</SummaryTitle>
                     <SummaryItem>
                         <SummaryItemText>
                             Subtotal: 
                         </SummaryItemText>
                         <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                     </SummaryItem>

                      <SummaryItem>
                         <SummaryItemText>
                             Shipping: 
                         </SummaryItemText>
                         <SummaryItemPrice>$ 7</SummaryItemPrice>
                     </SummaryItem>

                     <SummaryItem>
                         <SummaryItemText>
                             Shipping Discount: 
                         </SummaryItemText>
                         <SummaryItemPrice>$ - 7</SummaryItemPrice>
                     </SummaryItem>

                     <SummaryItem>
                         <SummaryItemText type="total">
                             Total: 
                         </SummaryItemText>
                         <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                     </SummaryItem>
                   <StripeCheckout
              name="Thank you"
              image=""
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
                 </Summary>
             </Bottom>
         </Wrapper>
            <Footer/>
        </Container>
    )
}
