/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';

import PercentageBar from '../client/components/PercentageBar';

describe('Percentage Bar Component', () => {
  it('should not throw an error when rendered', () => {
    expect(() => mount(<PercentageBar percent={50} />)).not.toThrow();
  });
});
