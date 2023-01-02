import styled from "styled-components";

export const AboutContent = styled.section `
    display: flex;
    width: 100%;

    .about-me {
        display: flex;
        column-gap: 91px;
    }

    .aboutme-info {
        width: 51%;
    }

    .aboutme__skill {
        width: 50%;
        z-index: 1;

        p {
            flex-basis: 9em;
        }
    }

    .myskills {
        display: flex;
        justify-content;
        align-items: center;
        column-gap: 70px;
    }
`