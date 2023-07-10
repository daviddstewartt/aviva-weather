import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ICity} from '../../../ts/interfaces';

// Redux
import {requestForecastData} from '../../../redux/features/forecast';
import {RootState} from '../../../redux/store';

// Components
import Error from '../../../Components/Error';

type ForecastErrorProps = {
  error: string;
};

const ForecastError: React.FC<ForecastErrorProps> = ({error}) => {
  const dispatch = useDispatch();
  const {selectedCity, isLoading} = useSelector(
    (state: RootState) => state.location,
  );

  const onHandleRetry = () => {
    if (!isLoading && selectedCity) {
      dispatch(requestForecastData(selectedCity as ICity));
    }
  };

  return (
    <Error
      title="Failed to get forecast"
      error={error}
      buttonTitle="Retry"
      onButtonPress={() => onHandleRetry()}
    />
  );
};

export default ForecastError;
