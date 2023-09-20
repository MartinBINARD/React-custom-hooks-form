import { useRouteError } from 'react-router-dom';

export default function ErrorMessages() {
  const error = useRouteError();

  if (error) {
    if (error.status === 404) {
      return <p>Page no found !</p>;
    }

    if (error.status === 401) {
      return <p>You are not authorized to view this page.</p>;
    }

    if (error.status === 503) {
      return <p>The service is not working. Contact us!</p>;
    }
  }

  return <p>Generic error...</p>;
}
