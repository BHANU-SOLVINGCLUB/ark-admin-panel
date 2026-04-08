import { Plus, Search, Filter } from "lucide-react";
import { PRODUCTS, STATUS_COLORS } from "@/lib/data";

export default function ProductsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#061429]">Products</h1>
          <p className="text-gray-500 text-sm mt-1">{PRODUCTS.length} products in inventory</p>
        </div>
        <button className="flex items-center gap-2 bg-[#061429] text-[#D4AF37] px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-[#061429]/90 transition-colors">
          <Plus size={16} />
          Add Product
        </button>
      </div>

      {/* Search & filter bar */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 flex-1 max-w-sm">
          <Search size={16} className="text-gray-400" />
          <input
            placeholder="Search products…"
            className="text-sm outline-none flex-1 text-[#061429] placeholder-gray-400"
          />
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 font-semibold hover:bg-gray-50 transition-colors">
          <Filter size={15} />
          Filter
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100">
              {["Product", "Category", "Price", "Stock", "Unit", "Status", "Actions"].map((h) => (
                <th key={h} className="px-6 py-4 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((product) => (
              <tr key={product.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="text-[#061429] text-sm font-bold">{product.name}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs bg-gray-100 text-gray-600 font-semibold px-2.5 py-1 rounded-full">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-bold text-[#061429]">₹{product.price.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <span className={`text-sm font-bold ${product.stock === 0 ? "text-red-500" : product.stock < 50 ? "text-yellow-600" : "text-green-600"}`}>
                    {product.stock}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{product.unit}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_COLORS[product.status]}`}>
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="text-xs text-[#061429] font-semibold hover:underline">Edit</button>
                    <span className="text-gray-300">|</span>
                    <button className="text-xs text-red-500 font-semibold hover:underline">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
