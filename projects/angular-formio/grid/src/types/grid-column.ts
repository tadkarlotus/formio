import { ComponentInstance } from '@tadkarlotus/formio';

export interface GridColumn {
  label?: string;
  path: string;
  renderCell?(cellValue: any, component?: ComponentInstance): string;
}
