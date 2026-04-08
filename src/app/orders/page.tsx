import { Search, Download } from "lucide-react";
import { ORDERS, STATUS_COLORS } from "@/lib/data";

export default function OrdersPage() {
  const total = ORDERS.reduce((sum, o) => sum + o.amount, 0);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#061429]">Orders</h1>
          <p className="text-gray-500 text-sm mt-1">{ORDERS.length} orders · Total ₹{total.toLocaleString()}</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 text-[#061429] px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors">
          <Download size={15} />
          Export CSV
        </button>
      </div>

      {/* Status summary pills */}
      <div className="flex gap-3 mb-6">
        {["All", "Processing", "Shipped", "Delivered", "Cancelled"].map((s) => (
          <button
            key={s}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
              s === "All"
                ? "bg-[#061429] text-[#D4AF37]"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 mb-6 max-w-sm">
        <Search size={16} className="text-gray-400" />
        <input
          placeholder="Search by order ID or customer…"
          className="text-sm outline-none flex-1 text-[#061429] placeholder-gray-400"
        />
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100">
              {["Order ID", "Customer", "Product", "Amount", "Status", "Date", "Action"].map((h) => (
                <th key={h} className="px-6 py-4 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ORDERS.map((order) => (
              <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-mono font-bold text-[#061429]">{order.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700 font-medium">{order.customer}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{order.product}</td>
                <td className="px-6 py-4 text-sm font-black text-[#061429]">₹{order.amount.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_COLORS[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                <td className="px-6 py-4">
                  <button className="text-xs text-[#061429] font-semibold hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
