export function LogoMark({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <img
      src="/bglogo.png"
      alt="NUViA"
      className={className}
      style={{ display: 'inline-block', height: size, width: 'auto', objectFit: 'contain' }}
    />
  );
}
