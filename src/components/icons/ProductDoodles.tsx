import { SVGProps } from 'react';

interface DoodleProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function CaixaClassica({ size = "100%", className = '', ...props }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 150 150" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>

      <g className="animate-box-float origin-center">
        {/* Box Interior / Offset Back Fill */}
        <path d="M 50 82 Q 70 85 95 80 Q 98 100 85 105 Q 60 100 45 100 Z" fill="var(--terracotta)" opacity="0.15" stroke="none" />
        
        {/* Lid Offset Fill */}
        <path d="M 45 78 L 90 65 L 115 45 L 60 55 Z" fill="var(--cream)" stroke="none" />
        {/* Lid Outline */}
        <path d="M 42 80 C 65 70 95 62 95 62 C 105 50 120 42 120 42 C 90 50 55 58 55 58 C 45 68 40 82 40 82" />
        
        {/* Inside Cookies (Offset layer then stroke layer) */}
        <path d="M 85 68 C 75 55 95 45 105 60 C 110 70 95 80 85 68 Z" fill="var(--butter)" stroke="none" />
        <path d="M 83 66 C 75 52 98 42 108 58 C 112 72 90 82 83 66 Z" />
        <path d="M 65 75 C 55 60 80 50 85 70 C 90 85 70 90 65 75 Z" fill="var(--butter)" stroke="none" />
        <path d="M 62 73 C 52 58 82 48 88 72 C 92 88 68 92 62 73 Z" />
        
        {/* Tumbling Cookie Offset & Slanted */}
        <g className="origin-center" style={{ transform: 'rotate(-25deg) translate(-25px, 25px)' }}>
          <path d="M 55 85 C 40 70 70 60 80 80 C 90 100 65 105 55 85 Z" fill="var(--butter)" stroke="none" />
          <path d="M 53 83 C 38 68 72 58 82 78 C 92 102 62 108 53 83 Z" />
          <path d="M 60 80 Q 62 78 65 82 M 72 85 Q 75 88 72 92 M 65 95 Q 62 92 68 95" strokeWidth="4" />
        </g>

        {/* Box Front Fill */}
        <path d="M 40 85 L 105 75 L 100 110 L 35 115 Z" fill="var(--orange)" stroke="none" />
        {/* Box Front Wonky Stroke */}
        <path d="M 38 82 C 60 80 80 78 108 72 C 105 90 104 115 104 115 C 80 115 45 118 32 118 C 34 100 38 82 38 82" />
        <path d="M 40 85 L 105 75 M 100 110 L 35 115" strokeWidth="2" opacity="0.6" />
      </g>
    </svg>
  );
}

export function CaixaPresente({ size = "100%", className = '', ...props }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 150 150" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>

      <g className="animate-box-float origin-center">
        {/* Box Front Fill */}
        <path d="M 35 60 C 60 55 100 62 110 65 L 105 110 C 80 115 40 108 30 105 Z" fill="var(--orange)" stroke="none" />
        
        {/* Unkempt Outline */}
        <path d="M 25 62 C 60 55 100 60 120 66" />
        <path d="M 20 105 C 60 115 90 112 115 108" />
        <path d="M 32 50 C 30 80 25 115 25 115" />
        <path d="M 112 60 C 110 85 105 120 105 120" />

        {/* Lid wrap ribbon (Offset Fill & Stroke) */}
        <path d="M 28 65 C 60 62 100 68 115 72" stroke="var(--cream)" strokeWidth="8" opacity="0.9" />
        <path d="M 28 65 C 60 62 100 68 115 72" strokeWidth="2" opacity="0.8" />
        
        {/* Vertical ribbon */}
        <path d="M 70 58 C 72 80 70 110 68 112" stroke="var(--cream)" strokeWidth="10" opacity="0.9" />
        <path d="M 70 58 C 72 80 70 110 68 112" strokeWidth="2" opacity="0.8" />

        <g className="animate-bow-bounce origin-center" style={{ transformOrigin: '70px 55px' }}>
          {/* Bow Offset Fill */}
          <path d="M 70 55 C 40 30 20 60 70 55" fill="var(--orange)" stroke="none" />
          <path d="M 70 55 C 90 20 130 40 70 55" fill="var(--orange)" stroke="none" />
          
          {/* Bow Strokes */}
          <path d="M 72 57 C 35 25 15 65 70 56" />
          <path d="M 68 54 C 100 15 140 45 70 58" />
          
          <path d="M 68 56 C 50 80 40 85 30 95" />
          <path d="M 72 56 C 85 75 95 85 105 95" />
          
          <path d="M 65 52 C 75 50 80 60 70 62 C 60 60 60 55 65 52 Z" fill="var(--cream)" />
        </g>
      </g>

      <g className="animate-heart-float origin-center" style={{ transformOrigin: '30px 40px' }}>
        <path d="M 25 35 C 20 25 10 35 20 45 C 30 55 40 45 35 35 Z" fill="var(--orange)" stroke="none" />
        <path d="M 22 32 C 15 20 5 35 18 48 C 30 60 45 42 38 32 Z" />
      </g>
    </svg>
  );
}

export function CaixaFesta({ size = "100%", className = '', ...props }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 150 150" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>

      <g className="animate-cookie-wiggle origin-center" style={{ transformOrigin: '80px 80px' }}>
        <path d="M 45 35 C 20 60 25 110 55 125 C 90 145 130 115 125 85 C 100 95 85 70 110 60 C 120 40 90 15 65 20 C 55 20 50 25 45 35 Z" fill="var(--butter)" stroke="none" />
        <path d="M 40 30 C 15 50 20 105 50 130 C 85 150 135 120 130 90 C 105 100 90 75 115 65 C 125 45 95 10 70 15 C 60 15 45 20 40 30 Z" />
        
        {/* Imperfect choc chips */}
        <path d="M 50 60 C 45 55 55 50 60 58 C 55 65 52 62 50 60 Z" fill="currentColor" stroke="none" />
        <path d="M 90 45 C 80 40 85 30 95 40 C 95 50 92 48 90 45 Z" fill="currentColor" stroke="none" />
        <path d="M 45 95 C 35 90 45 80 50 90 C 50 100 48 98 45 95 Z" fill="currentColor" stroke="none" />
        <path d="M 85 105 C 75 100 85 90 90 100 C 90 110 88 108 85 105 Z" fill="currentColor" stroke="none" />
        <path d="M 70 75 C 65 70 70 65 75 70 C 75 80 72 78 70 75 Z" fill="currentColor" stroke="none" />

        <path d="M 125 80 C 130 85 135 88 140 85" stroke="var(--orange)" />
        <path d="M 105 50 C 110 45 120 40 125 45" stroke="var(--orange)" />
      </g>
    </svg>
  );
}

export function CaixaMini({ size = "100%", className = '', ...props }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 150 150" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>

      <g className="animate-stack-bob origin-center">
        {/* Layer 1 */}
        <g style={{ transform: 'translate(0px, 0px)' }}>
          <path d="M 45 110 C 60 95 105 100 115 115 C 105 130 50 125 45 110 Z" fill="var(--butter)" stroke="none" />
          <path d="M 40 108 C 65 92 110 98 120 118 C 105 135 45 128 40 108 Z" />
          <path d="M 60 115 Q 65 112 68 115" strokeWidth="4" />
          <path d="M 90 118 Q 92 115 95 118" strokeWidth="4" />
        </g>
        
        {/* Layer 2 */}
        <g style={{ transform: 'translate(12px, -15px)' }}>
          <path d="M 48 100 C 60 85 95 90 105 105 C 95 120 55 115 48 100 Z" fill="var(--butter)" stroke="none" />
          <path d="M 42 98 C 65 82 100 88 110 108 C 95 125 50 118 42 98 Z" />
          <path d="M 55 105 Q 60 102 65 105" strokeWidth="4" />
        </g>

        {/* Layer 3 */}
        <g style={{ transform: 'translate(-8px, -30px)' }}>
          <path d="M 50 90 C 65 75 95 80 102 95 C 95 110 55 105 50 90 Z" fill="var(--butter)" stroke="none" />
          <path d="M 46 88 C 65 72 100 78 108 98 C 95 115 50 108 46 88 Z" />
          <path d="M 80 95 Q 85 92 88 95" strokeWidth="4" />
        </g>

        {/* Top Wobbling Cookie */}
        <g className="animate-top-wobble origin-center" style={{ transformOrigin: '80px 50px' }}>
          <path d="M 60 55 C 80 35 115 45 110 65 C 95 85 55 75 60 55 Z" fill="var(--butter)" stroke="none" />
          <path d="M 56 52 C 85 30 125 42 115 68 C 95 90 48 78 56 52 Z" />
          <path d="M 75 58 Q 80 55 85 58" strokeWidth="4" />
          <path d="M 95 65 Q 98 62 100 65" strokeWidth="4" />

          {/* Dotted motion loop trailing up */}
          <path d="M 100 35 C 130 20 150 60 120 80 C 100 95 90 85 100 75" strokeDasharray="5 10" stroke="var(--ink)" />
        </g>
      </g>
    </svg>
  );
}
