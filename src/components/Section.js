import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .main-content {
        display: flex;
        /* align-items: center; */
        height: 100vh;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        margin: 49px auto;
    }

    .aboutme-main {
        background: #06161acf;
        border-radius: 20px;
        padding: 25px;
        color: white;
        margin-bottom: 1.5em;
        height: fit-content;
        margin: 34px auto;
    }

    .aboutme-brackets {
        color: #3771ffb0;
    }

    .aboutme-name {
        color: #f16868;
    }

    .aboutme-code {
        color: #0ce20c
    }

    .aboutme-buttons {
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-wrap: wrap;

        .play {
            border: 4px solid #1f13e1cf;
            color: #1f13e1cf
        }

        .play:hover {
            background: #1f13e1cf;
            color: white;
            mix-blend-mode: multiply;
            transition: 0.5s;
        }
    }

    
`