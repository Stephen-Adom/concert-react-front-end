import PropTypes from 'prop-types';

const hallType = PropTypes.shape({
  id: PropTypes.number,
  concert_id: PropTypes.number,
  hall_name: PropTypes.string,
  city_name: PropTypes.string,
  date: PropTypes.string,
  total_seats: PropTypes.number,
  reserved_seats: PropTypes.number,
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
}).isRequired;

const concertType = PropTypes.shape({
  artist: PropTypes.string,
  band: PropTypes.string,
  image: PropTypes.string,
  active: PropTypes.bool,
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string,
  concert_halls: PropTypes.arrayOf(
    PropTypes.shape(hallType),
  ),
}).isRequired;

const setStepType = PropTypes.func.isRequired;

export const AuthWrapperProp = {
  children: PropTypes.element.isRequired,
};

export const ConcertTableDetailsProp = {
  concert: concertType,
};

export const ErrorMessageProp = {
  error: PropTypes.shape({}).isRequired,
  field: PropTypes.string.isRequired,
};

export const LocationDetailsProp = {
  hall: hallType,
};

export const MobileSidebarProp = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export const ReserveConcertDialogProp = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  concert: concertType,
  fetchConcertDetails: PropTypes.func.isRequired,
};

export const SidebarLinkProp = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export const SwiperNextButtonProps = {
  disableNextButton: PropTypes.bool.isRequired,
  swiper: PropTypes.shape({}).isRequired,
};

export const SwiperPrevButtonProps = {
  disablePrevButton: PropTypes.bool.isRequired,
  swiper: PropTypes.shape({}).isRequired,
};

export const SwiperSlideProp = {
  concert: concertType,
};

export const ConcertLocationDetailsProp = {
  setStep: setStepType,
};

export const ConfirmSubmissionDetailsProp = {
  setStep: setStepType,
};

export const NewConcertDetailsProp = {
  setStep: setStepType,
};
