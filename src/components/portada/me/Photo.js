import styled from "styled-components";

export const Photo = styled.img`
    border-radius: 250px;
    width: 300px;
    height: 300px;
    position: relative;

    .personal__photo {
        position: relative;
    }
    
    .personal__photo-enter-active {
        transition: all 1s ease;
        height: 200px;
        width: 120px;
    }
    
    .personal__photo-exit-active {
        transition: all 1s ease;
        height: 400px;
        width: 420px;
    }
`