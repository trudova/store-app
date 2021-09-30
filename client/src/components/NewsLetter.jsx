import { Send } from '@material-ui/icons'
import styled from "styled-components"
import { mobile } from '../responsive'

const Container = styled.div`
height: 60vh;
background-color: #FFF8E5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
${mobile({height: "40vh" })}
`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`
const Description = styled.p`
font-size: 20px;
font-weight: 200;
margin-bottom: 20px;
letter-spacing: 3px;
${mobile({textAlign: "center" })}
`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
align-items: center;
justify-content: space-between;
border: 0.5px solid lightgray ;
${mobile({width: "80%" })}
`
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
&:focus{
outline: none;
}
`
const Button = styled.button`
flex: 1;
height: 100%;
border: none;
background-color: #FFADAD;
color: white;
cursor: pointer;
&:focus{
outline: none;
}
`
    

export default function NewsLetter() {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>
                Get timely updates for our new collections and descounts
            </Description>
            <InputContainer>
                <Input placeholder="Your email"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

