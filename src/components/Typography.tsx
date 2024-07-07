import { SizeType, VariantType, WeightType } from '../types/types';

type ComponentType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface TypographyProps {
  size: SizeType;
  variant: VariantType;
  component: ComponentType;
  weight: WeightType;
}

const Typography = ({ size, variant, component, weight }: TypographyProps) => {
  return <></>;
};
export default Typography;
