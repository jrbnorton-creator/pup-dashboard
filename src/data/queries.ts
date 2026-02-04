export type TagType = 'important' | 'saving' | 'headsup' | null;

export interface Query {
  number: number;
  title: string;
  description: string;
  tag: TagType;
}

export const queries: Query[] = [
  {
    number: 1,
    title: 'Materials GL restructure',
    description:
      'We recommend splitting the single materials account (181 02) into sub-accounts: plumbing supplies, sanitary ware, consumables, and stock items. This will give you visibility into which material types are eating into margins. Can we proceed with creating these accounts in Xero?',
    tag: 'important',
  },
  {
    number: 2,
    title: 'Travel charges reclassification',
    description:
      'Travel charges are currently booked as income. We want to move these to a cost recovery structure so your revenue figures are accurate. Do your travel charges cover actual costs, or is there a markup built in?',
    tag: 'important',
  },
  {
    number: 3,
    title: 'Fergus material type tagging',
    description:
      'To fix the GL pollution long-term, we need Fergus to tag materials by type before syncing to Xero. Does your team currently categorise materials when entering them in Fergus, or does everything go in as a generic line item?',
    tag: null,
  },
  {
    number: 4,
    title: 'Sanitary ware routing',
    description:
      'Account 181 03 exists for sanitary ware but may not be receiving the right transactions. Can you confirm whether sanitary ware items (toilets, basins, taps) are entered as a separate line type in Fergus invoices?',
    tag: null,
  },
  {
    number: 5,
    title: 'Job costing accuracy',
    description:
      'With materials lumped together, job-level profitability is unreliable. Do you currently review individual job margins in Fergus, and would a per-job material breakdown be useful for quoting?',
    tag: 'saving',
  },
  {
    number: 6,
    title: 'Hire purchase allocations',
    description:
      'You have three active hire purchase agreements (Ford Ranger, Kobelco Excavator, MTF). Are the repayments being split correctly between principal and interest in Xero, or are they going to a single expense account?',
    tag: 'headsup',
  },
  {
    number: 7,
    title: 'Supplier cost tracking',
    description:
      'With $921k in cost of sales, even a small improvement in supplier pricing has a big impact. Would you like us to set up supplier-level reporting so you can compare costs and negotiate better rates?',
    tag: 'saving',
  },
  {
    number: 8,
    title: 'Historical reclassification',
    description:
      'Once the new account structure is in place, we can reclassify the current year transactions to give you clean comparative data. This will require journal entries. Are you comfortable with us doing this, or would you prefer to start clean from a specific date?',
    tag: null,
  },
];
