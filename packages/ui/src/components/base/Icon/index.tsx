interface IconProps {
  id: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  id,
  size = 24,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} fill={color} aria-hidden="true">
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
};

export default Icon;
