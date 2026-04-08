export const STATS = [
  { label: "Total Revenue", value: "₹18,64,000", change: "+22%", up: true },
  { label: "Total Orders", value: "1,847", change: "+16%", up: true },
  { label: "Active Products", value: "124", change: "+8", up: true },
  { label: "Professionals", value: "48", change: "+5", up: true },
];

export const ORDERS = [
  { id: "ORD-001", customer: "Rajesh Interior Works", product: "Mortise Lock Set (SS Finish)", amount: 22000, status: "Delivered", date: "2026-04-07" },
  { id: "ORD-002", customer: "Priya Constructions", product: "Vitrified Floor Tiles (60×60cm)", amount: 58000, status: "Shipped", date: "2026-04-07" },
  { id: "ORD-003", customer: "Kumar Modular Kitchen", product: "Concealed Door Hinges (Soft Close)", amount: 18500, status: "Processing", date: "2026-04-06" },
  { id: "ORD-004", customer: "Sri Sai Interiors", product: "Wooden Laminate Flooring", amount: 42000, status: "Delivered", date: "2026-04-06" },
  { id: "ORD-005", customer: "Anil Builders", product: "Gypsum False Ceiling Board", amount: 15200, status: "Cancelled", date: "2026-04-05" },
  { id: "ORD-006", customer: "Vijay Home Solutions", product: "Modular Kitchen Handles", amount: 9600, status: "Processing", date: "2026-04-05" },
  { id: "ORD-007", customer: "Lakshmi Décor Studio", product: "UPVC Window Frame", amount: 84000, status: "Shipped", date: "2026-04-04" },
];

export const PRODUCTS = [
  { id: "1", name: "Concealed Door Hinges (Soft Close)", category: "Door Hardware", price: 1850, stock: 480, unit: "Set of 10", status: "Active" },
  { id: "2", name: "Wooden Laminate Flooring", category: "Flooring", price: 42, stock: 12000, unit: "Per sq. ft.", status: "Active" },
  { id: "3", name: "Mortise Lock Set (SS Finish)", category: "Locks & Security", price: 2200, stock: 95, unit: "Per piece", status: "Active" },
  { id: "4", name: "Modular Kitchen Handles", category: "Cabinet Hardware", price: 320, stock: 0, unit: "Pack of 20", status: "Out of Stock" },
  { id: "5", name: "Gypsum False Ceiling Board", category: "Ceiling & Wall", price: 38, stock: 8400, unit: "Per sq. ft.", status: "Active" },
  { id: "6", name: "Vitrified Floor Tiles (60×60cm)", category: "Tiles", price: 58, stock: 22000, unit: "Per sq. ft.", status: "Active" },
  { id: "7", name: "Telescopic Channel Drawer Slides", category: "Cabinet Hardware", price: 980, stock: 24, unit: "Set of 5 pairs", status: "Active" },
  { id: "8", name: "UPVC Window Frame", category: "Windows & Doors", price: 420, stock: 0, unit: "Per sq. ft.", status: "Out of Stock" },
];

export const PROFESSIONALS = [
  { id: "1", name: "Ramesh Kumar", profession: "Interior Designer", contact: "+91 98765 43210", experience: "8 years", rating: 4.7, location: "Hyderabad", status: "Verified" },
  { id: "2", name: "Suresh Patel", profession: "Carpenter & Modular Kitchen", contact: "+91 87654 32109", experience: "12 years", rating: 4.9, location: "Hyderabad", status: "Verified" },
  { id: "3", name: "Anita Sharma", profession: "Civil Contractor", contact: "+91 76543 21098", experience: "5 years", rating: 4.5, location: "Secunderabad", status: "Pending" },
  { id: "4", name: "Vijay Reddy", profession: "Tile & Flooring Specialist", contact: "+91 65432 10987", experience: "10 years", rating: 4.6, location: "Hyderabad", status: "Verified" },
  { id: "5", name: "Mohammed Ali", profession: "Electrician", contact: "+91 54321 09876", experience: "7 years", rating: 4.8, location: "Hyderabad", status: "Pending" },
];

export const REVENUE_DATA = [
  { month: "Oct", revenue: 920000 },
  { month: "Nov", revenue: 1080000 },
  { month: "Dec", revenue: 1340000 },
  { month: "Jan", revenue: 1120000 },
  { month: "Feb", revenue: 1480000 },
  { month: "Mar", revenue: 1680000 },
  { month: "Apr", revenue: 1864000 },
];

export const STATUS_COLORS: Record<string, string> = {
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Processing: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
  Active: "bg-green-100 text-green-700",
  "Out of Stock": "bg-red-100 text-red-700",
  Verified: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
};
