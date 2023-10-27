interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['School Administrator'],
  customerRoles: ['Parent'],
  tenantRoles: ['School Administrator', 'Teacher'],
  tenantName: 'School',
  applicationName: 'Student Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal information',
    'View student information',
    'Manage contact information',
    'View school information',
  ],
  ownerAbilities: ['Manage user data', 'Manage school data', 'Manage student data', 'Manage teacher data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/89bc2633-6b30-4c13-afdd-e510bf31a802',
};
