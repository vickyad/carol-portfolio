export type ColorPaletteType = {
  name: string;
  color: string;
  letterColor: ModeType;
};

export type SizeType =
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';
export type ModeType = 'light' | 'dark';
export type VariantType = 'primary' | 'secondary';
export type WeightType = 'regular' | 'bold';
