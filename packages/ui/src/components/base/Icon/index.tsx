import { iconIdList } from './iconIdList';

const SPRITE_IMAGE_PATH = '/sprite.svg';

export type TIconId = (typeof iconIdList)[number];

type TIcon = {
  id: TIconId;
  size?: number;
  color?: string;
};

export const Icon = ({ id, size = 24, color = 'currentColor' }: TIcon) => {
  return (
    <svg width={size} height={size} style={{ color }} aria-hidden="true">
      <use href={`${SPRITE_IMAGE_PATH}#${id}`} />
    </svg>
  );
};
