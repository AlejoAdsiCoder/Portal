import styled from "styled-components";

export const AboutContent = styled.section `
    display: flex;
    width: 100%;
    margin-top: 7em;

    .about-me {
        display: flex;
        column-gap: 1.5em;
        flex-wrap: wrap;
    }

    .aboutme-info {
        width: 100%;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        background: #06161acf;
        border-radius: 20px;
        padding: 25px;
        color: white;
        margin-bottom: 1.5em;
        height: fit-content;
    }

    .aboutme-projects {
        width: 100%; 
        max-width: 1320px;
        background: #06161acf;
        border-radius: 30px;
        color: white;
        padding: 20px 30px;

        @media (max-width: 450px) {
            .swiper {
                max-width: 320px !important;
            }
        }
        
    }

    .aboutme-projects a {
        color: white;
        text-decoration: none;
    }

    .aboutme__skill {
        max-width: 537px;
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

    .aboutme-technologies {
        display: flex;
        margin: 50px 0;
        gap: 2em;

        @media (max-width: 765px) {
            margin: 0;
            flex-wrap: wrap;
        }
    }

    .aboutme__exp {
        width: 100%;
        max-width: 659px;
        background: #06161acf;
        border-radius: 20px;
        padding: 25px;
        color: white;
        margin-bottom: 5em;
        color: #fff;
        font-family: Arial, sans-serif;
    }

    .aboutme-btn {
        margin: 0 auto 40px;
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

    .timeline {
        color: #fff;
        padding: 2rem;
        font-family: Arial, sans-serif;
        position: relative;
    }
      
    .timeline h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    
    .timeline-container {
        position: relative;
        margin-left: 1rem;
        padding-left: 0.8rem;
    }

    .timeline-container .divider {
        position: absolute;
        top: 0;
        left: 30%;
        bottom: 0;
        width: 1px;
        background-color: #444;
        border-left: 2px solid #00bcd4;
        
        &:after {
            content: '';
            position: absolute;
            top: 0.3rem;
            height: 12px;
            width: 12px;
            background-color: #00bcd4;
            border-radius: 50%;
            left: -7px;
        }
    }
    
    .timeline-item {
        position: relative;
        display: table;
        table-layout: fixed;
        width: 100%;
    }
    
    .timeline-date-company {
        width: 30%;
        display: table-cell;
        padding-right: 25px;
        min-height: 100%;
        text-align: right;
        vertical-align: top;

        span {
            line-height: 1.4em;
            font-weight: 600;
        }
        
        p {
            margin: 4px 0 21px;
            font-weight: 300;
            line-height: 1.45em;
            color: #a5a6a7;
        }
        
    }

    .timeline-content {
        width: 70%;
        display: table-cell;
        padding-left: 25px;
        padding-right: 15px;
        vertical-align: top;
    }
    
    .timeline-content h3 {
        font-size: 1.25rem;
        color: #fff;
        margin: 0;
    }
    
    .timeline-content p {
        font-size: 0.9rem;
        color: #ddd;
        line-height: 1.5;
        margin: 0.5rem 0 0;
    }
      
    .left-contact {
        max-width: 872px;
    }

    .right-contact {
        max-width: 304px;
    }
`