import { SVGProps } from 'react';
import { CaixaClassica, CaixaFesta, CaixaMini, CaixaPresente } from '@/components/icons/ProductDoodles';
import { ProductIllustration as ProductIllustrationName } from '@/types';

interface ProductIllustrationProps extends SVGProps<SVGSVGElement> {
  illustration: ProductIllustrationName;
}

export function ProductIllustration({ illustration, ...props }: ProductIllustrationProps) {
  const illustrations = {
    classica: CaixaClassica,
    festa: CaixaFesta,
    mini: CaixaMini,
    presente: CaixaPresente,
  };

  const Illustration = illustrations[illustration] ?? CaixaClassica;
  return <Illustration {...props} />;
}
