import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`


  
text-align: center;
  p {
    font-family: 'Montserrat','Noto Sans JP','Sen', sans-serif;
    font-size: 1rem;
    color:grey;
}
  h2 {
    font-family:  'Montserrat','Noto Sans JP','Sen', sans-serif;
    font-size: 5rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    text-decoration:none,
  }
  @media only screen and (max-width: 1400px) {
    text-align: center;
    p {
      font-size: 1.2rem;
      word-break: normal;
    }
    h2 {
      font-size: 3rem;
      
      word-break: normal;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <h2>{heading}</h2>

      <p>{subheading}</p>
      
    </SectionTitleStyle>
  );
}