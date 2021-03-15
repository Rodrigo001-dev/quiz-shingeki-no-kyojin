import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};

  outline: 0;
  margin-bottom: 25px;
`;

export default function Input({ placeholder, onChange, ...props }) {
  return (
    <div>
      {/*
        o ...props é para passar todas as propriedades que o componente input
        recebe menos o placeholder e o onChange que eu já tinha definido
      */}
      <InputBase placeholder={placeholder} onChange={onChange} {...props} />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
