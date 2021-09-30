import { Facebook, Instagram, MailOutline, Map, Phone } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container= styled.div`
display: flex;
${mobile({flexDirection: "column" })}
`
const Left = styled.div` 
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px 0;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;align-items: center;
justify-content: center;
margin-right: 20px;
`
const Center = styled.div` 
flex:1;
padding: 20px;
${mobile({display: "none" })}
`
const Title = styled.h3`
margin-bottom: 30px;`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
cursor: pointer;
`

const Right = styled.div` 
flex:1;
padding: 20px;
${mobile({backgroundColor: "#f5f5f5" })}
`
const ContactItem = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const Payment = styled.img`
width: 50%;
`
    
export default function Footer() {
    return (
        <Container>
            <Left>
                <Logo>FLEA MARKET.</Logo>
                <Desc>Hey,  my name is Liubov Trudova, This is my store project. I hope you will enjoy design and functionality.  Cooperation offers by phone 347-613-5276 </Desc>
                <SocialContainer>
                    <SocialIcon color="3DB2FF">
                        <Facebook  onClick={()=> window.open("https://m.facebook.com/profile.php", "_blank")}/>
                    </SocialIcon>
                    <SocialIcon color="D62AD0">
                        <Instagram onClick={()=> window.open("https://www.instagram.com/liubovtrudova/?hl=en", "_blank")}/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links </Title>
                <List>
                    <ListItem onClick={()=> window.open("https://murmuring-savannah-06614.herokuapp.com/")} >Portpholio</ListItem>
                    <ListItem onClick={()=> window.open("https://netflixcopycat.herokuapp.com/")} >Netflix copycat</ListItem>
                    <ListItem onClick={()=> window.open("https://trudovameetapp.herokuapp.com/profile/liv")} >SocialMedia</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contacts</Title>
                <ContactItem> <Map style={{marginRight:"10px"}}/> New York </ContactItem>
                <ContactItem> <Phone style={{marginRight:"10px"}}/> +1 347 613 5276</ContactItem>
                <ContactItem> <MailOutline style={{marginRight:"10px"}}/> liubovtrudovaapplying@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}
