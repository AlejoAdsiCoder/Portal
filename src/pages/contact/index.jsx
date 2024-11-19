// src/pages/ContactPage.js
import React, { useState } from 'react';
import * as Styled from './contact.styles';
import { AboutContent } from '../../components/about/AboutContent';
import { Animated } from 'react-animated-css';
import emailjs from 'emailjs-com';
import { Social } from '../../components/socialnav';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  const parentSection = {
    display: 'flex',
    width: '100%'
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Configura tus IDs de EmailJS
    const serviceId = 'service_3btiuc5';
    const templateId = 'template_a484074';
    const publicKey = '94ySMO4Na21aZfa8O';

    const templateParams = {
      from_name: name,
      from_email: email,
      message
    };

    emailjs
      .sendForm(serviceId, templateId, templateParams, publicKey)
      .then(
        (response) => {
          console.log('Correo enviado con éxito:', response.status, response.text);
          setStatusMessage('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Error al enviar el correo:', error);
          setStatusMessage('Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo más tarde.');
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AboutContent>
      <section className='about-me' style={parentSection}>
        <Animated className='aboutme-info left-contact' animationIn="bounceInDown" animationOut="bounceOutUp" isVisible={true}>
          <Styled.Container>
            <Styled.Card>
              <Styled.FormColumn>
                <Styled.Title>Contáctame</Styled.Title>
                <Styled.Form onSubmit={handleSubmit}>
                  <Styled.FormGroup>
                    <Styled.Label>Nombre</Styled.Label>
                    <Styled.Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Styled.FormGroup>

                  <Styled.FormGroup>
                    <Styled.Label>Email</Styled.Label>
                    <Styled.Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Styled.FormGroup>

                  <Styled.FormGroup>
                    <Styled.Label>Mensaje</Styled.Label>
                    <Styled.Textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Styled.FormGroup>

                  <Styled.SubmitButton type="submit">Enviar Mensaje</Styled.SubmitButton>
                </Styled.Form>
                {statusMessage && <Styled.StatusMessage>{statusMessage}</Styled.StatusMessage>}
              </Styled.FormColumn>
            </Styled.Card>
          </Styled.Container>
        </Animated>
        <Animated className='aboutme-info right-contact' animationIn="bounceInDown" animationOut="bounceOutUp" isVisible={true}>
          <Styled.Card>
            <Styled.Container>
                <Styled.ContactInfo>
                  <Styled.Title>Información de Contacto</Styled.Title>
                  <Styled.ContactDetails>
                    <Styled.ContactDetail>
                      <Styled.ContactIcon>
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </Styled.ContactIcon>
                      <span>alejop.9318@gmail.com</span>
                    </Styled.ContactDetail>
                    <Styled.ContactDetail>
                      <Styled.ContactIcon>
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </Styled.ContactIcon>
                      <span>+57 3113943383</span>
                    </Styled.ContactDetail>
                  </Styled.ContactDetails>
                </Styled.ContactInfo>
            </Styled.Container>
          </Styled.Card>  
        </Animated>
    </section>
    <Social />
    </AboutContent>

    
  );
};

export default ContactPage;