
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { login } from "../redux/apiCalls"
import { mobile } from "../responsive"
const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255,255,255, 0.5),rgba(255,255,255, 0.5)), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
background-size: cover;
display: flex;align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;
${mobile({width: "75%" })}
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;

`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
`
const Button = styled.button`
width: 40%;
padding: 10px 0px;
border: 1px solid black;
font-weight: 600;
background-color: white;
cursor: pointer;
transition: all 0.5s ease;
margin-bottom: 10px;
& :disabled{
background-color: gray;
color: white;
cursor: not-allowed;
}
&:hover{
    background-color: black;
    color: white;
}

`
const Link = styled.a`
margin: 5px 0;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`
const Error = styled.p`
color: red;
`

export default function Login() {
    const [username, setUsername] =useState("");
    const [password, setPassword] =useState("");
    const dispatch = useDispatch();
    const {isFeatching, error} = useSelector((state)=>state.user)
    const handleClick = (e)=>{
        e.preventDefault();
        login(dispatch, {username, password});
    }
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder=" username" onChange={(e)=> setUsername(e.target.value)}/>
                    <Input placeholder="password" type="password" onChange={(e)=> setPassword(e.target.value)}/>
                   <Button onClick ={handleClick} disabled={isFeatching}>LOGIN</Button>
                  {error && <Error>Something went wrong... check your login/password</Error>}
                    <Link>DO NOT REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}
