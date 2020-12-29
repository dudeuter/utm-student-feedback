/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import Review from '../client/components/Review';
import formatTime from '../client/formatTime';

describe('Review Component', () => {
  const currentTime = new Date();

  const NOW = currentTime.toString();
  const LATER = new Date(currentTime.valueOf() + 500).toString();

  const review = {
    content: 'This is a review',
    rating: 4,
    created: NOW,
    modified: NOW,
    user: 'Sam Deuter',
    avatar: 'localhost:3000/smiley.png',
  };

  const wrapper = mount(<Review review={review} />);

  it('should render the expected subcomponents', () => {
    expect(wrapper.exists('Avatar')).toBe(true);
    expect(wrapper.exists('StarRating')).toBe(true);
  });

  it('should display the username', () => {
    expect(wrapper.contains('Sam Deuter')).toBe(true);
  });

  it('should display the review content', () => {
    expect(wrapper.contains('This is a review')).toBe(true);
  });

  it('should display the creation date', () => {
    const string = formatTime(NOW);

    expect(wrapper.contains(string)).toBe(true);
  });

  const reviewWithResponse = {
    ...review,
    response: {
      content: 'This is a response',
      created: LATER.toString(),
      modified: LATER.toString(),
      user: 'hello author',
      avatar: 'localhost:3000/smiley.png',
    },
  };
  const responseWrapper = mount(<Review review={reviewWithResponse} />);

  it('should display a response from the author', () => {
    expect(responseWrapper.text().includes('This is a response')).toBe(true);
  });

  it('should display the author\'s username', () => {
    expect(responseWrapper.text().includes('hello author')).toBe(true);
  });

  it('should display the time of the response', () => {

    // test it against the human readable string
    const string = formatTime(LATER);

    expect(responseWrapper.text().includes(string)).toBe(true);
  });
});
