import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface ReviewCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: Number;
  setRating?: (rating: Number) => void;
}
