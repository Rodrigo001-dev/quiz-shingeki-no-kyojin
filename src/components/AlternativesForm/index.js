import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    padding: 8px;
    &[data-selected='true'] {
      background-color: ${({ theme }) => theme.colors.primary};

      &[data-status='SUCCESS'] {
        background-color: ${({ theme }) => theme.colors.success};
      }
      &[data-status='ERROR'] {
        background-color: #e61919;
      }
    }

    &:focus {
      opacity: 1;
    }
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;
