/* eslint-disable func-names */
/**
 * now should be the current time that the page is loaded
 */
const NOW = new Date();

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;

// values of month and years are estimations due to inconsistent size of months
const month = week * 4;
const year = month * 12;

/**
 * @param {*} [dateable] any value that can be coerced to a date by the date object constructor
 *
 * @returns {string} human readable string for the difference between dates
 */
const formatTime = function (dateable) {
  const THEN = new Date(dateable);

  const delta = NOW.valueOf() - THEN.valueOf();

  if (delta < 40 * second) {
    const seconds = Math.round(delta / second);
    return (delta < second) ? 'about a second ago' : `${seconds} second${seconds === 1 ? '' : 's'} ago`;
  }

  if (delta < 55 * minute) {
    const minutes = Math.round(delta / minute);
    return (delta < minute) ? 'about a minute ago' : `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  }

  if (delta < 23 * hour) {
    const hours = Math.round(delta / hour);
    return (delta < hour) ? 'about a hour ago' : `${hours} hour${hours === 1 ? '' : 's'} ago`;
  }

  if (delta < 6 * day) {
    const days = Math.round(delta / day);
    return (delta < day) ? 'about a day ago' : `${days} day${days === 1 ? '' : 's'} ago`;
  }

  if (delta < 3 * week) {
    const weeks = Math.round(delta / week);
    return (delta < week) ? 'about a week ago' : `${weeks} week${weeks === 1 ? '' : 's'} ago`;
  }

  if (delta < 10 * month) {
    const months = Math.round(delta / month);
    return (delta < month) ? 'about a month ago' : `${months} month${months === 1 ? '' : 's'} ago`;
  }

  // years
  const years = Math.round(delta / year);
  return (delta < year) ? 'about a year ago' : `${years} year${years === 1 ? '' : 's'} ago`;
};

export default formatTime;
