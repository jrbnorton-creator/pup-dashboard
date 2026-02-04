export type AuditSeverity = 'critical' | 'warning' | 'info' | 'pass';

export interface AuditFinding {
  id: number;
  category: string;
  title: string;
  severity: AuditSeverity;
  detail: string;
  recommendation: string;
}

export const auditFindings: AuditFinding[] = [
  {
    id: 1,
    category: 'Fergus > Xero sync',
    title: 'Materials account pollution',
    severity: 'critical',
    detail:
      'All materials are pushed to a single GL account (181 02 / 180 02) regardless of type. Sanitary ware, plumbing supplies, consumables, and travel-related costs are undifferentiated. This makes the general ledger unreliable for cost analysis, variance tracking, and margin reporting.',
    recommendation:
      'Create COGS sub-accounts (5200-5215) by material type. Update Fergus material type codes to route to corresponding GL accounts.',
  },
  {
    id: 2,
    category: 'Fergus > Xero sync',
    title: 'Travel charges classified as revenue',
    severity: 'critical',
    detail:
      'Travel charges are mapped to income accounts (181 04 / 180 04) labelled "Income - Travel Charge". Travel costs (fuel, mileage) should be in expense or COGS accounts, not revenue. This overstates revenue figures.',
    recommendation:
      'Create expense accounts (6100/6101) for travel costs and clearing accounts (6200/6201) for travel recovery. Separate cost from recovery in GL.',
  },
  {
    id: 3,
    category: 'Fergus > Xero sync',
    title: 'Sanitary ware account may be bypassed',
    severity: 'warning',
    detail:
      'Account 181 03 (Income - Sanitary Ware) exists but sanitary ware items may be falling into the general materials account (181 02) instead. This needs verification against recent invoices.',
    recommendation:
      'Audit last 10 invoices containing sanitary ware items. Verify Fergus line item types are routing to 181 03. Fix mapping if needed.',
  },
  {
    id: 4,
    category: 'Chart of accounts',
    title: 'No COGS structure for materials',
    severity: 'warning',
    detail:
      'Materials flow directly to revenue-side accounts without a cost of goods sold structure. Cannot separate material revenue from material cost, making true margin calculation impossible by material type.',
    recommendation:
      'Create COGS accounts: 5200-5205 (Commercial) and 5210-5215 (Residential) with sub-categories for labour-related, sanitary ware, plumbing supplies, consumables, stock items, and other direct materials.',
  },
  {
    id: 5,
    category: 'Tax & compliance',
    title: 'GST tracking by material type missing',
    severity: 'warning',
    detail:
      'No indication of GST tracking broken down by material type. GST on materials may not be allocating correctly to cost accounts. Risk of compliance issues if materials are misclassified.',
    recommendation:
      'Create tax tracking codes by material type. Verify GST reconciliation account pulls correctly from all material and cost accounts.',
  },
  {
    id: 6,
    category: 'Fergus configuration',
    title: 'Commercial/residential split is correct',
    severity: 'pass',
    detail:
      'Fergus is properly configured with separate commercial (181 series) and residential (180 series) revenue accounts. Xero Sales Account Codes show clear separation. Invoices are routing to the correct revenue stream.',
    recommendation:
      'No action required. Continue monitoring to ensure new job types follow the same pattern.',
  },
  {
    id: 7,
    category: 'Fergus configuration',
    title: 'Invoice template structure is sound',
    severity: 'pass',
    detail:
      'Invoice templates show line item quantities, prices, totals, and section totals. Labour and material sections are formatted separately. The invoice presentation is clear for clients.',
    recommendation:
      'No change to invoice templates needed. Focus changes on the GL posting logic behind the scenes.',
  },
  {
    id: 8,
    category: 'Job costing',
    title: 'No material sub-categorisation per job',
    severity: 'warning',
    detail:
      'Materials are bundled at job level without type breakdown. Cannot compare estimated materials vs actuals, cannot track which material types drive cost overruns, and job profitability analysis is unreliable.',
    recommendation:
      'Implement material type codes in Fergus (MAT_LABOR, MAT_SANITARY, MAT_PLUMB, MAT_CONS, MAT_STOCK, MAT_OTHER). Enable per-job material breakdown reporting.',
  },
];

export const auditSummary = {
  totalFindings: 8,
  critical: 2,
  warnings: 4,
  passed: 2,
  source: 'Fergus platform audit via Claude Chrome, 4 February 2026',
  scope: 'Fergus > Xero integration, chart of accounts, invoice templates, job costing, tax compliance',
};
