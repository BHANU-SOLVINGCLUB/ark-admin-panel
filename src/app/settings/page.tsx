export default function SettingsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-[#061429]">Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your store configuration</p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Store Details */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-[#061429] text-base font-bold mb-5">Store Details</h2>
          <div className="space-y-4">
            {[
              { label: "Store Name", value: "ARK Assured" },
              { label: "Contact Email", value: "admin@arkassured.com" },
              { label: "Phone", value: "+91 98765 43210" },
              { label: "GST Number", value: "29AABCT1332L1ZY" },
            ].map((field) => (
              <div key={field.label}>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">
                  {field.label}
                </label>
                <input
                  defaultValue={field.value}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#061429] focus:outline-none focus:border-[#061429] transition-colors"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Settings */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-[#061429] text-base font-bold mb-5">Delivery Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">
                Free Delivery Minimum Order (₹)
              </label>
              <input
                defaultValue="10000"
                type="number"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#061429] focus:outline-none focus:border-[#061429] transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">
                Delivery Charge (below minimum)
              </label>
              <input
                defaultValue="299"
                type="number"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#061429] focus:outline-none focus:border-[#061429] transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 font-semibold hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-[#061429] text-[#D4AF37] text-sm font-bold hover:bg-[#061429]/90 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
