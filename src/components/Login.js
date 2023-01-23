import React from 'react'
import styled from 'styled-components'
const Login = (props) => {
    return (
 <Container>
    <Content>
     <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>

        <Signup>GET ALL THESE</Signup>

<Description>

Get Premium Access to Raya and the Last Dragon for an additional fee with a disney+ 
subscription. As of 30/11/22, the price of disney+ and The Disney Bundle will increase
by $1.

</Description>

<CTALogoTwo src="/images/cta-logo-two.png" alt=""/>
                </CTA>
        <BgImage/>
    </Content>
 </Container>

    )
}


const Container = styled.section`
overflow:hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh;
`;

const Content = styled.div`
margin-bottom:10vw;
width:100%;
height:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px;
`;

const BgImage = styled.div `
background-image:url("/images/login-background.jpg");
height: 100%;
position: absolute;
top:0;
right:0;
left:0;
z-index:-1;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
`;
const CTA = styled.div`
max-width:650px;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
 justify-items:center;
`;
const CTALogoOne = styled.img`
margin-bottom:12px;
width:100%
max-width:600px;
min-height:1px;
display:block;
`;

const Signup = styled.a`
font-weight:bold;
background-color:#0063e5;
color:#f9f9f9;
width:100%;
font-size:18px;
letter-spacing:1.5px;
padding:16.5px 0;
border:1px solid transparent;
border-radius:4px;

&hover{
    background-color:#0483ee;
}
`;
 const Description = styled.p`
 color:hsla(0,0%,95.3%,1);
 font-size:11px;
 margin:20px 0 24px 0;
 line-height:1.5;
 letter-spacing:1.5px;
 display:flex;
 align-items:center;
 justify-items:center;
 `;

 const CTALogoTwo = styled.img `
 max-width:600px;
 width:100%;
 margin-bottom:20px;
 display:flex;
 vertical-align:bottom;
align-items:center;
justify-items:center;
 `;

export default Login;
