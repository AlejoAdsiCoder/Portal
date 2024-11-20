import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Card = styled.div`
  border-radius: 0.75rem;
  width: 100%;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  md: {
    flex-direction: row;
  }
`;

export const FormColumn = styled.div`
  width: 100%;
  md: {
    width: 50%;
  }
`;

export const SocialColumn = styled.div`
  padding: 2rem;
  width: 100%;
  md: {
    width: 50%;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const Form = styled.form``;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #00bcd4;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-family: 'Poppins-Medium';
  background: unset;
  color: white;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #00bcd4;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-family: 'Poppins-Medium';
  resize: vertical;
  background: unset;
  color: white;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
  }
`;

export const SubmitButton = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #2563eb;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #6b7280;
  &:hover {
    color: #3b82f6;
  }
`;

export const SocialIcon = styled.div`
  margin-right: 0.75rem;
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContactDetail = styled.p`
  display: flex;
  align-items: center;
  color: white;
`;

export const ContactIcon = styled.div`
  margin-right: 0.75rem;
`;

export const StatusMessage = styled.p`
  margin-top: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => (props.success ? '#155724' : '#721c24')};
  background-color: ${(props) => (props.success ? '#d4edda' : '#f8d7da')};
  border: 1px solid ${(props) => (props.success ? '#c3e6cb' : '#f5c6cb')};
`;
