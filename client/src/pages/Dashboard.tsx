import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Package, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';

const data = [
  { name: 'Jan', sales: 4000, stock: 2400 },
  { name: 'Feb', sales: 3000, stock: 1398 },
  { name: 'Mar', sales: 2000, stock: 9800 },
  { name: 'Apr', sales: 2780, stock: 3908 },
  { name: 'May', sales: 1890, stock: 4800 },
  { name: 'Jun', sales: 2390, stock: 3800 },
  { name: 'Jul', sales: 3490, stock: 4300 },
];

import type { LucideIcon } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color }: { title: string, value: string, icon: LucideIcon, color: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
    </div>
    <div className={`p-3 rounded-full ${color}`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Inventory"
          value="12,345"
          icon={Package}
          color="bg-blue-500"
        />
        <StatCard
          title="Low Stock Items"
          value="23"
          icon={AlertTriangle}
          color="bg-amber-500"
        />
        <StatCard
          title="Total Revenue"
          value="$54,230"
          icon={DollarSign}
          color="bg-emerald-500"
        />
        <StatCard
          title="Growth"
          value="+12.5%"
          icon={TrendingUp}
          color="bg-indigo-500"
        />
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Inventory vs Sales Trends</h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B7280'}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280'}} />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              />
              <Area type="monotone" dataKey="stock" stackId="1" stroke="#6366f1" fill="#818cf8" fillOpacity={0.2} />
              <Area type="monotone" dataKey="sales" stackId="1" stroke="#10b981" fill="#34d399" fillOpacity={0.2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity (Placeholder) */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <div className="space-y-4">
           {[1, 2, 3].map((i) => (
             <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                    <Package className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-sm font-medium text-gray-900">New stock added for "Wireless Mouse"</p>
                   <p className="text-xs text-gray-500">2 hours ago</p>
                 </div>
               </div>
               <span className="text-sm font-medium text-emerald-600">+50 units</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
