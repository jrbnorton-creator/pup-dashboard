export type Severity = 'high' | 'medium' | 'info' | 'low';

export interface Issue {
  severity: Severity;
  title: string;
  description: string;
}

export const issues: Issue[] = [
  {
    severity: 'high',
    title: 'Materials account pollution in general ledger',
    description:
      'Fergus is dumping all materials into a single GL account (181 02). Sanitary ware, plumbing supplies, consumables, and travel-related costs are all mixed together, making the ledger unreliable for cost analysis.',
  },
  {
    severity: 'high',
    title: 'Travel charges misclassified as revenue',
    description:
      'Travel charges are mapped to income accounts (181 04 / 180 04) instead of cost recovery. This overstates revenue and understates true cost of sales.',
  },
  {
    severity: 'medium',
    title: 'Sanitary ware account underutilised',
    description:
      'Account 181 03 (Sanitary Ware) exists but line items may be falling into the general materials account instead. Needs verification against recent invoices.',
  },
  {
    severity: 'medium',
    title: 'No COGS structure for materials',
    description:
      'Materials flow directly to revenue accounts without a cost of goods sold structure. Cannot calculate true margins by material type.',
  },
  {
    severity: 'info',
    title: 'Fergus Xero sync is correctly splitting commercial and residential',
    description:
      'The 181 series (commercial) and 180 series (residential) revenue accounts are properly configured and routing correctly from Fergus.',
  },
  {
    severity: 'low',
    title: 'GST tracking by material type missing',
    description:
      'No indication of GST tracking by material type. Risk of compliance issues if materials are misclassified between standard and zero-rated supplies.',
  },
];
