export type BootStrapColors =
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';

type Props = {
  text: string;
  color?: BootStrapColors;
  className?: string;
};

const PillTag = ({ text, color = 'primary', className }: Props) => {
  return (
    <p
      className={`d-inline-flex rounded-pill px-3 py-1 bg-${color} fw-semibold text-white ${className}`}
    >
      {text}
    </p>
  );
};

export default PillTag;
