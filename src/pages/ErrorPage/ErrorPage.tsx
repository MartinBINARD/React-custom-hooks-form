import Error from '../../components/Error/Error';
import Header from '../../components/Header/Header';

import './ErrorPage.scss';

export default function HomePage() {
  return (
    <section className="error">
      <Header />
      <Error />
    </section>
  );
}
