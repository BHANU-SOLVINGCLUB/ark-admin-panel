import { Plus, Star, MapPin, Phone, Briefcase } from "lucide-react";
import { PROFESSIONALS, STATUS_COLORS } from "@/lib/data";

export default function ProfessionalsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#061429]">Professionals</h1>
          <p className="text-gray-500 text-sm mt-1">{PROFESSIONALS.length} registered professionals</p>
        </div>
        <button className="flex items-center gap-2 bg-[#061429] text-[#D4AF37] px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-[#061429]/90 transition-colors">
          <Plus size={16} />
          Add Professional
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {PROFESSIONALS.map((prof) => (
          <div
            key={prof.id}
            className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-gray-200 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#061429] flex items-center justify-center flex-shrink-0">
                <span className="text-[#D4AF37] font-black text-lg">
                  {prof.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[#061429] font-black text-base">{prof.name}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Briefcase size={12} className="text-gray-400" />
                      <p className="text-gray-500 text-sm">{prof.profession}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${STATUS_COLORS[prof.status]}`}>
                    {prof.status}
                  </span>
                </div>

                <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star size={11} className="text-[#D4AF37] fill-[#D4AF37]" />
                    <span className="font-bold text-[#061429]">{prof.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={11} className="text-gray-400" />
                    {prof.location}
                  </div>
                  <span>{prof.experience} exp.</span>
                </div>

                <div className="flex items-center gap-1.5 mt-2">
                  <Phone size={11} className="text-gray-400" />
                  <span className="text-xs text-gray-500">{prof.contact}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              {prof.status === "Pending" && (
                <button className="flex-1 bg-[#061429] text-[#D4AF37] text-xs font-bold py-2 rounded-xl hover:bg-[#061429]/90 transition-colors">
                  Verify
                </button>
              )}
              <button className="flex-1 bg-gray-100 text-[#061429] text-xs font-bold py-2 rounded-xl hover:bg-gray-200 transition-colors">
                Edit
              </button>
              <button className="flex-1 bg-red-50 text-red-500 text-xs font-bold py-2 rounded-xl hover:bg-red-100 transition-colors">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
