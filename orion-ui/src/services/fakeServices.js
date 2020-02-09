export const services = [
  { id: "1", name: "SQL_Database_Release" },
  { id: "2", name: "Oracle_Database_Release" },
  { id: "3", name: "DB_Kill_Session" },
  { id: "4", name: "Oracle_Account_Automation" },
  { id: "5", name: "SQL_Account_Automation" }
];

export function getServices() {
  return services.filter(g => g);
}
