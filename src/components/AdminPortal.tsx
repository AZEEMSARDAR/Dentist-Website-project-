import { useState } from 'react';
import { ShieldAlert, Check, X, Calendar, Search, Users, Activity, Wallet, FileDown, PlusCircle, CheckCircle2 } from 'lucide-react';
import { Appointment, ActiveTab } from '../types';

interface AdminPortalProps {
  appointments: Appointment[];
  onUpdateStatus: (id: string, status: Appointment['status']) => void;
  onClearAll: () => void;
}

export default function AdminPortal({ appointments, onUpdateStatus, onClearAll }: AdminPortalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'confirmed' | 'cancelled' | 'completed'>('all');

  const treatmentValues: Record<string, number> = {
    'gen-dent': 250,
    'cos-dent': 350,
    'implants': 2800,
    'invisalign': 4500,
    'whitening': 399,
    'veneers': 1200,
    'root-canal': 950,
    'crowns': 1100,
    'emergency': 450,
    'pediatric': 150
  };

  const getTreatmentName = (serviceId: string) => {
    switch (serviceId) {
      case 'gen-dent': return 'General Dentistry';
      case 'cos-dent': return 'Cosmetic Dentistry';
      case 'implants': return 'Dental Implants';
      case 'invisalign': return 'Invisalign® Aligners';
      case 'whitening': return 'Teeth Whitening';
      case 'veneers': return 'Porcelain Veneers';
      case 'root-canal': return 'Root Canal';
      case 'crowns': return 'Crowns & Bridges';
      case 'emergency': return 'Emergency Priority';
      case 'pediatric': return 'Pediatric Dentistry';
      default: return 'Routine Care';
    }
  };

  const getDoctorName = (dentistId: string) => {
    switch (dentistId) {
      case 'dr-sarah': return 'Dr. Sarah Mercer';
      case 'dr-marcus': return 'Dr. Marcus Vance';
      default: return 'First Available';
    }
  };

  // Filtered appointments list
  const filteredAppointments = appointments.filter(app => {
    const matchesSearch = app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          app.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          app.phone.includes(searchTerm);
    const matchesFilter = statusFilter === 'all' || app.status === statusFilter;
    return matchesSearch && matchesFilter;
  });

  // Calculate clinical value metrics
  const activeConfirmedAndCompleted = appointments.filter(a => a.status === 'confirmed' || a.status === 'completed');
  const estimatedRevenue = activeConfirmedAndCompleted.reduce((sum, app) => {
    const val = treatmentValues[app.serviceId] || 250;
    return sum + val;
  }, 0);

  const pendingCount = appointments.filter(a => a.status === 'pending').length;
  const urgentCount = appointments.filter(a => a.isUrgent && a.status === 'pending').length;

  const handleDownloadBackup = () => {
    const jsonStr = JSON.stringify(appointments, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `bright_smile_clinical_schedule_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-100 min-h-screen text-slate-800" id="admin-portal-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Banner header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="text-left">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
              Internal Practitioner Network
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-2">Clinical Operations Dashboard</h2>
            <p className="text-xs sm:text-sm text-slate-500 font-sans mt-1">
              Protected HIPAA session. Monitor patient schedules, update statuses, and check real-time pipeline performance.
            </p>
          </div>

          <div className="flex gap-2.5">
            <button
              onClick={handleDownloadBackup}
              disabled={appointments.length === 0}
              className="px-4.5 py-2.5 bg-white hover:bg-slate-50 disabled:bg-slate-100 disabled:text-slate-400 border border-slate-200 text-slate-700 font-semibold rounded-xl text-xs sm:text-sm shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
              id="btn-admin-download"
            >
              <FileDown size={14} />
              <span>Export Ledger JSON</span>
            </button>
            <button
              onClick={onClearAll}
              disabled={appointments.length === 0}
              className="px-4 py-2.5 bg-red-50 hover:bg-red-100 disabled:bg-slate-100 disabled:text-slate-400 border border-red-200 hover:border-red-300 text-red-600 font-semibold rounded-xl text-xs sm:text-sm transition-all cursor-pointer"
            >
              Reset Schedule
            </button>
          </div>
        </div>

        {/* Dashboard Analytics Metric Cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Total Appointments */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm text-left flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Total Ledger Records</p>
              <p className="text-2xl font-bold text-slate-800">{appointments.length}</p>
              <p className="text-[10px] text-slate-400 font-sans">Reservations created overall</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
              <Calendar size={20} />
            </div>
          </div>

          {/* Card 2: Pending Confirmations */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm text-left flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Pending Confirmations</p>
              <p className="text-2xl font-bold text-slate-850">{pendingCount}</p>
              <p className="text-[10px] text-slate-400 font-sans">Requires clinical triage calls</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Users size={20} />
            </div>
          </div>

          {/* Card 3: Urgent Cases */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm text-left flex justify-between items-center relative overflow-hidden">
            {urgentCount > 0 && <div className="absolute top-0 left-0 right-0 h-1 bg-red-500 animate-pulse"></div>}
            <div className="space-y-1">
              <p className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Urgent Priority Alerts</p>
              <p className="text-2xl font-bold text-red-600 flex items-center gap-1.5">
                <span>{urgentCount}</span>
                {urgentCount > 0 && <span className="inline-block w-2.5 h-2.5 bg-red-600 rounded-full animate-ping shrink-0"></span>}
              </p>
              <p className="text-[10px] text-slate-400 font-sans">Requires immediate intervention</p>
            </div>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${urgentCount > 0 ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-400'}`}>
              <ShieldAlert size={20} />
            </div>
          </div>

          {/* Card 4: Estimated Revenue Value pipeline */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm text-left flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">Confirmed pipeline Value</p>
              <p className="text-2xl font-bold text-emerald-600">${estimatedRevenue.toLocaleString()}</p>
              <p className="text-[10px] text-slate-400 font-sans">Active procedural value sum</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Wallet size={20} />
            </div>
          </div>

        </div>

        {/* Filters and search blocks */}
        <div className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Status filtering */}
          <div className="flex flex-wrap gap-1.5 justify-center w-full md:w-auto">
            {(['all', 'pending', 'confirmed', 'completed', 'cancelled'] as const).map(stat => (
              <button
                key={stat}
                onClick={() => setStatusFilter(stat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase transition-all cursor-pointer ${
                  statusFilter === stat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-50 border border-slate-100 text-slate-600 hover:text-teal-600 hover:bg-slate-100'
                }`}
              >
                {stat} ({appointments.filter(a => stat === 'all' || a.status === stat).length})
              </button>
            ))}
          </div>

          {/* Quick search input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search patient, phone, or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/10 focus:border-teal-500 bg-slate-50"
              id="input-admin-search"
            />
          </div>

        </div>

        {/* Main interactive Table ledger list */}
        <div className="bg-white border border-slate-200/60 rounded-2xl shadow-sm overflow-hidden text-left">
          {filteredAppointments.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[10px] sm:text-xs text-slate-400 font-mono uppercase font-bold">
                    <th className="px-5 py-4">Ref Code</th>
                    <th className="px-5 py-4">Patient Name</th>
                    <th className="px-5 py-4">Schedule Slot</th>
                    <th className="px-5 py-4">Clinical Team / Service</th>
                    <th className="px-5 py-4">Status</th>
                    <th className="px-5 py-4 text-center">Triage Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150 text-xs sm:text-sm text-slate-700">
                  {filteredAppointments.map((app) => (
                    <tr 
                      key={app.id} 
                      className={`hover:bg-slate-50/60 transition-colors ${
                        app.isUrgent && app.status === 'pending' ? 'bg-red-50/20' : ''
                      }`}
                      id={`row-app-${app.id}`}
                    >
                      {/* Ref code */}
                      <td className="px-5 py-4.5 font-mono font-bold text-slate-500">
                        <div className="flex items-center gap-1.5">
                          {app.isUrgent && (
                            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping shrink-0" title="Urgent"></span>
                          )}
                          <span>{app.id}</span>
                        </div>
                      </td>

                      {/* Patient Info */}
                      <td className="px-5 py-4.5">
                        <div className="font-semibold text-slate-900">{app.fullName}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{app.email} • {app.phone}</div>
                        {app.message && (
                          <div className="text-[10px] text-slate-500 font-sans italic max-w-xs truncate mt-1">
                            "{app.message}"
                          </div>
                        )}
                      </td>

                      {/* Schedule Slot */}
                      <td className="px-5 py-4.5 font-sans font-medium">
                        <div className="font-bold text-slate-800">{app.preferredDate}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{app.preferredTime}</div>
                      </td>

                      {/* Service & Clinician */}
                      <td className="px-5 py-4.5">
                        <div className="font-semibold text-slate-850">{getTreatmentName(app.serviceId)}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{getDoctorName(app.dentistId)}</div>
                      </td>

                      {/* Status badge */}
                      <td className="px-5 py-4.5">
                        <span className={`inline-block px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase ${
                          app.status === 'pending'
                            ? 'bg-amber-100 text-amber-700 border border-amber-200'
                            : app.status === 'confirmed'
                              ? 'bg-blue-100 text-blue-700 border border-blue-200'
                              : app.status === 'completed'
                                ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                                : 'bg-slate-100 text-slate-500 border border-slate-200'
                        }`}>
                          {app.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-5 py-4.5">
                        <div className="flex gap-1.5 justify-center items-center">
                          {app.status === 'pending' && (
                            <>
                              <button
                                onClick={() => onUpdateStatus(app.id, 'confirmed')}
                                className="p-1.5 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-all cursor-pointer"
                                title="Confirm Booking"
                                id={`btn-confirm-${app.id}`}
                              >
                                <Check size={14} className="stroke-[2.5px]" />
                              </button>
                              <button
                                onClick={() => onUpdateStatus(app.id, 'cancelled')}
                                className="p-1.5 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-all cursor-pointer"
                                title="Cancel Booking"
                                id={`btn-cancel-${app.id}`}
                              >
                                <X size={14} />
                              </button>
                            </>
                          )}

                          {app.status === 'confirmed' && (
                            <button
                              onClick={() => onUpdateStatus(app.id, 'completed')}
                              className="px-2.5 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white font-bold rounded-lg text-[10px] uppercase transition-all cursor-pointer flex items-center gap-1"
                              id={`btn-complete-${app.id}`}
                            >
                              <CheckCircle2 size={12} />
                              <span>Complete</span>
                            </button>
                          )}

                          {(app.status === 'cancelled' || app.status === 'completed') && (
                            <span className="text-[10px] text-slate-400 font-mono uppercase italic">No further triage needed</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-20">
              <Users className="text-slate-300 mx-auto mb-4 animate-bounce" size={40} />
              <h3 className="text-base font-bold text-slate-700">No appointments found in active ledger</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">There are either no reservations matching your filters or no bookings have been requested.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
