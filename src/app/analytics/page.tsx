import { REVENUE_DATA, STATS } from "@/lib/data";

export default function AnalyticsPage() {
  const maxRevenue = Math.max(...REVENUE_DATA.map((d) => d.revenue));
  const total = REVENUE_DATA.reduce((s, d) => s + d.revenue, 0);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-[#061429]">Analytics</h1>
        <p className="text-gray-500 text-sm mt-1">Performance overview for the last 7 months</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl p-5 border border-gray-100">
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide">{stat.label}</p>
            <p className="text-[#061429] text-2xl font-black mt-2">{stat.value}</p>
            <p className={`text-xs font-semibold mt-1 ${stat.up ? "text-green-600" : "text-red-500"}`}>
              {stat.change} vs last month
            </p>
          </div>
        ))}
      </div>

      {/* Full Revenue Chart */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[#061429] text-base font-bold">Revenue Trend</h2>
          <p className="text-gray-500 text-sm">
            Total: <span className="text-[#061429] font-black">₹{(total / 100000).toFixed(1)}L</span>
          </p>
        </div>
        <div className="flex items-end gap-4 h-52">
          {REVENUE_DATA.map((d) => (
            <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-gray-500 text-xs">₹{(d.revenue / 100000).toFixed(1)}L</span>
              <div
                className="w-full rounded-t-xl relative group cursor-pointer"
                style={{
                  height: `${(d.revenue / maxRevenue) * 100}%`,
                  backgroundColor: d.revenue === maxRevenue ? "#D4AF37" : "#061429",
                  opacity: d.revenue === maxRevenue ? 1 : 0.75,
                }}
              />
              <span className="text-gray-500 text-sm font-semibold">{d.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category breakdown */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-[#061429] text-base font-bold mb-4">Top Categories</h2>
          <div className="space-y-3">
            {[
              { name: "Grains & Cereals", pct: 38 },
              { name: "Oils & Fats", pct: 24 },
              { name: "Spices", pct: 18 },
              { name: "Pulses", pct: 12 },
              { name: "Others", pct: 8 },
            ].map((cat) => (
              <div key={cat.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 font-medium">{cat.name}</span>
                  <span className="text-[#061429] font-bold">{cat.pct}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${cat.pct}%`, backgroundColor: "#061429" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-[#061429] text-base font-bold mb-4">Order Status Distribution</h2>
          <div className="space-y-3">
            {[
              { label: "Delivered", count: 820, color: "#16a34a" },
              { label: "Shipped", count: 240, color: "#3b82f6" },
              { label: "Processing", count: 180, color: "#d97706" },
              { label: "Cancelled", count: 44, color: "#ef4444" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                <span className="text-gray-600 text-sm flex-1">{s.label}</span>
                <span className="text-[#061429] text-sm font-bold">{s.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
