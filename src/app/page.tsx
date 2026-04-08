import { TrendingUp, TrendingDown, Package, ShoppingCart, Star } from "lucide-react";
import { STATS, ORDERS, REVENUE_DATA, STATUS_COLORS } from "@/lib/data";

const NAVY = "#061429";
const GOLD = "#D4AF37";

export default function Dashboard() {
  const maxRevenue = Math.max(...REVENUE_DATA.map((d) => d.revenue));

  return (
    <div className="p-8">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl font-black" style={{ color: NAVY }}>Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back. Here's what's happening at ARK Assured.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl p-5 border border-gray-100">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide">{stat.label}</p>
            <p className="text-2xl font-black mt-2" style={{ color: NAVY }}>{stat.value}</p>
            <div className={`flex items-center gap-1 mt-2 ${stat.up ? "text-green-600" : "text-red-500"}`}>
              {stat.up ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
              <span className="text-xs font-semibold">{stat.change} from last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="col-span-2 bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-base font-bold mb-6" style={{ color: NAVY }}>Monthly Revenue</h2>
          <div className="flex items-end gap-3 h-40">
            {REVENUE_DATA.map((d) => (
              <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-gray-400 text-xs">₹{(d.revenue / 100000).toFixed(1)}L</span>
                <div
                  className="w-full rounded-t-lg"
                  style={{
                    height: `${(d.revenue / maxRevenue) * 100}%`,
                    backgroundColor: d.revenue === maxRevenue ? GOLD : NAVY,
                    opacity: d.revenue === maxRevenue ? 1 : 0.72,
                  }}
                />
                <span className="text-gray-500 text-xs">{d.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick stats */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#FDF8E7" }}>
                <Package size={18} color={NAVY} />
              </div>
              <p className="font-bold text-sm" style={{ color: NAVY }}>Low Stock Alert</p>
            </div>
            <p className="text-3xl font-black" style={{ color: NAVY }}>2</p>
            <p className="text-gray-500 text-xs mt-1">Products need restocking</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                <ShoppingCart size={18} color="#3b82f6" />
              </div>
              <p className="font-bold text-sm" style={{ color: NAVY }}>Pending Orders</p>
            </div>
            <p className="text-3xl font-black" style={{ color: NAVY }}>18</p>
            <p className="text-gray-500 text-xs mt-1">Awaiting fulfillment</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
                <Star size={18} color="#16a34a" />
              </div>
              <p className="font-bold text-sm" style={{ color: NAVY }}>Avg. Rating</p>
            </div>
            <p className="text-3xl font-black" style={{ color: NAVY }}>4.7</p>
            <p className="text-gray-500 text-xs mt-1">Across all products</p>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="mt-6 bg-white rounded-2xl border border-gray-100">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-base font-bold" style={{ color: NAVY }}>Recent Orders</h2>
          <a href="/orders" className="text-sm font-semibold hover:underline" style={{ color: GOLD }}>
            View all →
          </a>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-gray-400 uppercase tracking-wide border-b border-gray-50">
              {["Order ID", "Customer", "Product", "Amount", "Status", "Date"].map((h) => (
                <th key={h} className="px-6 py-3 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ORDERS.slice(0, 6).map((order) => (
              <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-mono font-semibold" style={{ color: NAVY }}>{order.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{order.customer}</td>
                <td className="px-6 py-4 text-sm text-gray-500" style={{ maxWidth: 200 }}>{order.product}</td>
                <td className="px-6 py-4 text-sm font-bold" style={{ color: NAVY }}>₹{order.amount.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_COLORS[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
