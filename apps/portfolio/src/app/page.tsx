import { log } from '@repo/logger';
import { Link } from '@repo/ui/link';
import { CounterButton } from '@repo/ui/counter-button';

export const metadata = {
  title: 'Portfolio | Kitchen Sink',
};

export default function Store() {
  log('Hey! This is the Portfolio page.');

  return (
    <div className="container">
      <h1 className="title">
        Portfolio <br />
        <span>Kitchen Sink</span>
      </h1>
      <CounterButton />
      <p className="description">
        Built With{' '}
        <Link href="https://turbo.build/repo" newTab>
          Turborepo
        </Link>
        {' & '}
        <Link href="https://nextjs.org/" newTab>
          Next.js
        </Link>
      </p>
    </div>
  );
}
