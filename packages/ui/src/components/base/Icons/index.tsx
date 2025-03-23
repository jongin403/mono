interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} fill={color} aria-hidden="true">
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
