import { log } from '@repo/logger';
import { Icon } from '@repo/ui';

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
      {/* <CounterButton /> */}
      <p className="description">
        <Icon id={'AccountCircle'}></Icon>
      </p>
    </div>
  );
}
