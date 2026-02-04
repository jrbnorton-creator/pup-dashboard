export interface Stat {
  label: string;
  value: string;
  footnote: string;
  footnoteType: 'default' | 'warning';
}

export const stats: Stat[] = [
  {
    label: 'Revenue',
    value: '$1,241,695',
    footnote: '10 months to 31 Jan 2026',
    footnoteType: 'default',
  },
  {
    label: 'Gross profit',
    value: '$320,368',
    footnote: '25.8% margin',
    footnoteType: 'default',
  },
  {
    label: 'Net profit',
    value: '$180,878',
    footnote: 'Before recode adjustments',
    footnoteType: 'warning',
  },
  {
    label: 'Cash on hand',
    value: '$101,869',
    footnote: 'Bank balance',
    footnoteType: 'default',
  },
];
