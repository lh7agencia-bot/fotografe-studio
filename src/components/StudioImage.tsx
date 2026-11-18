import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface StudioImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  loading?: 'eager' | 'lazy';
  fit?: 'cover' | 'contain';
}

export function StudioImage({
  src,
  alt,
  width,
  height,
  className = '',
  imgClassName = '',
  loading = 'eager',
  fit = 'cover',
}: StudioImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-slate-200/70 ${className}`}
      style={fit === 'cover' ? { aspectRatio: `${width} / ${height}` } : undefined}
    >
      {hasError ? (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-100 to-slate-200 p-4 text-center text-slate-600"
          role="img"
          aria-label={alt}
        >
          <ImageOff className="h-6 w-6 text-[#0D7AC4]" aria-hidden="true" />
          <span className="text-xs font-medium">{alt}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={`h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} ${imgClassName}`}
        />
      )}
    </div>
  );
}
