import styled from "styled-components";

export const AboutContent = styled.section `
    display: flex;
    width: 100%;

    .about-me {
        display: flex;
        column-gap: 20px;
        flex-wrap: wrap;
    }

    .aboutme-info {
        width: 51%;
        background: #06161acf;
        border-radius: 20px;
        padding: 25px;
        color: white;
        margin-bottom: 5em;
    }

    .aboutme-projects {
        width: 100%; 
        background: #06161acf;
        border-radius: 30px;
        color: white;
        padding: 30px;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-around;
        gap: 40px;
    }

    .aboutme__skill {
        max-width: 500px;
        width: 100%;
        z-index: 1;
        background: #06161acf;
        border-radius: 20px;
        padding: 25px;
        color: white;
        margin-bottom: 5em;

        p {
            flex-basis: 9em;
        }
    }

    .myskills {
        display: flex;
        justify-content;
        align-items: center;
        column-gap: 8px;

        i {
            font-size: 2em;
        }
    }
`