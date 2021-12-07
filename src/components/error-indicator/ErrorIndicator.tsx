import React from 'react';

import { useTypedSelector } from '../hook/useTypedSelector';

const ErrorIndicator: React.FC = () => {
  const { isFetchError } = useTypedSelector((state) => state.books);

  return (
    <div>
      {isFetchError && (
        <div className="alert alert-danger" role="alert">
          Произошла ошибка! Пожалуйста обновите страницу!
        </div>
      )}
    </div>
  );
};

export default ErrorIndicator;
