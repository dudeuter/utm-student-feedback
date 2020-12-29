/* eslint-env jest */

import formatTime from '../client/formatTime';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = WEEK * 4;
const YEAR = MONTH * 12;

describe('format time function', () => {
  const NOW = (new Date()).valueOf();

  it('should not be a timestamp', () => {
    const string = formatTime(NOW);

    expect(string).not.toBe(NOW.toString());
  });

  it('should describe time seconds ago', () => {
    const string = formatTime(NOW - SECOND / 2);

    expect(string).toBe('about a second ago');
  });

  it('should describe time minutes ago', () => {
    const string = formatTime(NOW - MINUTE);

    expect(string).toBe('1 minute ago');
  });

  it('should describe time hours ago', () => {
    const string = formatTime(NOW - HOUR);

    expect(string).toBe('1 hour ago');
  });

  it('should describe time days ago', () => {
    const string = formatTime(NOW - DAY);

    expect(string).toBe('1 day ago');
  });

  it('should describe time weeks ago', () => {
    const string = formatTime(NOW - WEEK);

    expect(string).toBe('1 week ago');
  });

  it('should describe time months ago', () => {
    const string = formatTime(NOW - MONTH);

    expect(string).toBe('1 month ago');
  });

  it('should describe time years ago', () => {
    const string = formatTime(NOW - YEAR);

    expect(string).toBe('1 year ago');
  });
});
