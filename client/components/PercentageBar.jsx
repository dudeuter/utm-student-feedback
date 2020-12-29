import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Track = styled.div`
  width: 100%;
  height: 20px;
  background-color: #f2f3f5;
  border-radius: 3px;
`;
const Slider = styled.div`
  width: ${({ percent }) => percent}%;
  background-color: #8a92a3;
  border-radius: 3px;
  height: 20px;
`;

const PercentageBar = ({ percent }) => (
  <Track>
    <Slider percent={percent} />
  </Track>
);

PercentageBar.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default PercentageBar;
