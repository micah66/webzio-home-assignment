export type TTag = {
  text: string;
  size?: 'lg' | 'sm';
  className?: string;
};

export default function Tag({ text, size = 'sm', className = '' }: TTag) {
  const fontSize = {
    sm: 'text-xs',
    lg: 'text-lg',
  };

  return (
    <div
      className={`px-2 py-1 rounded w-fit ${fontSize[size]} drop-shadow-md ${className}`}
    >
      {text}
    </div>
  );
}
