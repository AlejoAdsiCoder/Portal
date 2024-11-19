import styled from "styled-components";

export const Bar = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    justify-content: center;
    position: absolute;
    max-height: 302px;
    height: 100%;
    right: 0;
    top: 40%;
    position: fixed;

    @media (max-width: 765px) {
        display: none;
    }

    .pres__social {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }

`