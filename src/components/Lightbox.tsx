interface LightboxProps {
  src: string | null;
  onClose: () => void;
}

export default function Lightbox({ src, onClose }: LightboxProps) {
  if (!src) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-sm animate-[lbFadeIn_0.2s_ease-out]"
      style={{ background: 'rgba(0,0,0,0.92)' }}
    >
      <img
        src={src}
        alt="Enlarged screenshot"
        className="max-w-[90vw] max-h-[85vh] rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
      />
    </div>
  );
}
