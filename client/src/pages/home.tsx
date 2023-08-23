import styled from "styled-components";

const Heading=styled.h1`
    color: ${({theme})=>theme.PRIMARY_TEXT};
`

export default function Home(){
    return <>
    <h1 className="text-2xl text-red-400 dark:text-green-500">Home Page</h1>
    <Heading>styled Components</Heading>
    </>
}