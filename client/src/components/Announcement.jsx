import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: #FFF338;
color: #026f6f;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`

export default function Announcement() {
    return (
        <Container>
           Super deal !! minus 40% on everything!
        </Container>
    )
}

