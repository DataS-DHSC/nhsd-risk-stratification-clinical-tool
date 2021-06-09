import React from 'react';
import PropTypes from 'prop-types';
import { ReviewDate } from 'nhsuk-react-components';
import { PAGE_REVIEW_DATES } from '../constants/reviewDates';

const PageReviewDates = ({ page }) => {
  const dates = PAGE_REVIEW_DATES[`${page}`] || {
    lastReviewDate: '',
    nextReviewDate: '',
  };

  return (
    <>
      {(dates.lastReviewDate || dates.nextReviewDate) && (
        <ReviewDate
          id="review-date"
          lastReviewed={dates.lastReviewDate}
          nextReview={dates.nextReviewDate}
        />
      )}
    </>
  );
};

PageReviewDates.propTypes = {
  page: PropTypes.string.isRequired,
};

export default PageReviewDates;
