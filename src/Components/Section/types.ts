import { ReactElement } from 'react';

export interface GridSectionStyleProps {
  col2?: boolean;
  col3?: boolean;
  col4?: boolean;
  col5?: boolean;
  col6?: boolean;
  col8?: boolean;
  col12?: boolean;
}

export default interface GridSectionProps extends GridSectionStyleProps {
  children: string | ReactElement | ReactElement[];
}
