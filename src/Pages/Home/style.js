import styled from "styled-components";

export const TitleWeb = styled.div`
    display: flex;
    background-color: purple;
    width: 10rem;
    height: 4rem;
    text-align: center;
    line-height: 16px;

    h1{
        color: red;
        font-family: 'Nunito', sans-serif;
    }

    h4{
        margin-top: 1.5rem;
        color: white;
    }
` 

export const ButtonBegin = styled.button`
    color: white;
    border-radius: 1rem;
    background-color: black;
    padding: 16px 16px 16px 16px;

`
export const SeparationDifficulty = styled.div`
    display: grid;
` 

export const ButtonEasy = styled.button`
    color: white;
    background-color: green;
    border-radius: 1rem;
    padding: 12px 12px 12px 12px;
    width: 5rem;
    height: 3rem;
    border: 0;
    font-size: large;
    

`

export const ButtonNormal = styled.button`
    color: white;
    background-color: yellow;
    border-radius: 1rem;
    padding: 12px 12px 12px 12px;
    width: 5rem;
    height: 3rem;
    border: 0;
    margin-top: 1rem;
    font-size: large;

`

export const ButtonHard = styled.button`
    color: white;
    background-color: red;
    border-radius: 1rem;
    padding: 12px 12px 12px 12px;
    width: 5rem;
    height: 3rem;
    border: 0;
    margin-top: 1rem;
    font-size: large;
`

export const ButtonBack = styled.button`
    color: white;
    border-radius: 1rem;
    background-color: black;
    padding: 16px 16px 16px 16px;
    margin-top: 1rem;

`

export const InfoDifficultyEasy = styled.h1`
    color: green;
    font-size: 1.5rem;
`

export const InfoDifficultyNormal = styled.h1`
    color: orange;
    font-size: 1.5rem;
`

export const InfoDifficultyHard = styled.h1`
    color: red;
    font-size: 1.5rem;
`