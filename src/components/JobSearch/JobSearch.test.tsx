import React from 'react';
import { render } from '@testing-library/react';
import JobSearch from './JobSearch';

const props = {
  getJobs: jest.fn((location: string, jobDescription: string, fulltime: string) => {})
}

it('renders component correctly', () => {
  const component = render(<JobSearch {...props} />);
  expect(component).toBeTruthy();
});