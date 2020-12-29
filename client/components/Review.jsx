import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import Avatar from './Avatar';
import StarRating from './StarRating';

import formatTime from '../formatTime';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #dedfe0;
  padding: 15px 0px 15px 0px;
  min-height: 100px;
  @media (max-width: 575px) {
    flex-direction: column;
  }
`;

const Profile = styled.div`
  order: 1;
  width: 100px;
  @media (max-width: 575px) {
    display: none;
  }
`;

const Info = styled.div`
  order: 2;
  width: 150px;
  @media (max-width: 575px) {
    order: 2;
  }
`;

const Content = styled.div`
  order: 3;
  width: 100%;
  @media (max-width: 575px) {
    order: 1;
  }
`;

const ResponseWrapper = styled.div`
  padding: 10px;
  background-color: #f7f8fa;
  order: 4;
  @media (max-width: 575px) {
    order: 3;
  }
`;

const Response = ({ response }) => {
  if (response) {
    return (
      <ResponseWrapper>
        <div>{`${response.user} (instructor), ${formatTime(response.created)}`}</div>
        <div>{response.content}</div>
      </ResponseWrapper>
    );
  }
  // if there is no response object we don't want to
  // render a component
  return null;
};

Response.propTypes = {
  response: PropTypes.shape({
    user: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

Response.defaultProps = {
  response: null,
};

const Review = ({ review }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '0px',
  });

  return (
    <Container ref={ref}>
      {
        inView
          ? (
            <>
              <Profile>
                <Avatar src={review.avatar} username={review.user} />
              </Profile>
              <Info>
                <div>{review.user}</div>
                <div>{formatTime(review.created)}</div>
              </Info>
              <Content>
                <StarRating rating={review.rating} />
                <div>{review.content}</div>
                <Response response={review.response} />
              </Content>
            </>
          )
          : null
      }
    </Container>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    content: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    created: PropTypes.string.isRequired,
    modified: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    response: PropTypes.shape({
      content: PropTypes.string,
      created: PropTypes.string,
      modified: PropTypes.string,
      user: PropTypes.string,
      avatar: PropTypes.string,
    }),
  }).isRequired,
};

export default Review;
