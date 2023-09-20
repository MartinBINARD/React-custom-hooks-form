import ErrorMessages from '../../utils/ErrorMessages';

import './Error.scss';

export default function Error() {
  return (
    <section className="message">
      <h2>Error Page</h2>
      <ErrorMessages />
    </section>
  );
}
