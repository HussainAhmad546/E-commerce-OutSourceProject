import { UsersIcon, PackageIcon, ShoppingCartIcon, DollarSignIcon, CreditCardIcon } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', sales: 4000, revenue: 2400 },
  { name: 'Feb', sales: 3000, revenue: 1398 },
  { name: 'Mar', sales: 2000, revenue: 9800 },
  { name: 'Apr', sales: 2780, revenue: 3908 },
  { name: 'May', sales: 1890, revenue: 4800 },
  { name: 'Jun', sales: 2390, revenue: 3800 },
  { name: 'Jul', sales: 3490, revenue: 4300 },
];

function AdminDashboard() {
  const totalUsers = 34567;
  const totalProducts = 74657;
  const totalOrders = 24567;
  const totalIncome = 74567;
  const totalExpense = 24567;

  return (
    <div className="w-full p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Global Products Dashboard</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white shadow-md rounded-xl p-6 flex justify-between items-center transition hover:shadow-lg">
          <div>
            <p className="text-2xl font-bold">{totalOrders}</p>
            <p className="text-sm text-gray-500">New Orders</p>
            <p className="text-sm text-green-500">+2.00% (30 days)</p>
          </div>
          <div className="bg-blue-100 text-blue-500 rounded-full p-3">
            <ShoppingCartIcon className="w-8 h-8" />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex justify-between items-center transition hover:shadow-lg">
          <div>
            <p className="text-2xl font-bold">${totalIncome}</p>
            <p className="text-sm text-gray-500">Total Income</p>
            <p className="text-sm text-green-500">+4.54% Increased</p>
          </div>
          <div className="bg-green-100 text-green-500 rounded-full p-3">
            <DollarSignIcon className="w-8 h-8" />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex justify-between items-center transition hover:shadow-lg">
          <div>
            <p className="text-2xl font-bold">{totalProducts}</p>
            <p className="text-sm text-gray-500">Total Products</p>
            <p className="text-sm text-green-500">+8.00% Inventory Growth</p>
          </div>
          <div className="bg-yellow-100 text-yellow-500 rounded-full p-3">
            <PackageIcon className="w-8 h-8" />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex justify-between items-center transition hover:shadow-lg">
          <div>
            <p className="text-2xl font-bold">{totalUsers}</p>
            <p className="text-sm text-gray-500">New Users</p>
            <p className="text-sm text-red-500">-26.00% Earning</p>
          </div>
          <div className="bg-purple-100 text-purple-500 rounded-full p-3">
            <UsersIcon className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart for Yearly Stats */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-lg font-bold mb-4">Yearly Stats</h2>
          <LineChart width={450} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={3} />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={3} />
          </LineChart>
        </div>

        {/* Bar Chart for Sales/Revenue */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-lg font-bold mb-4">Sales/Revenue</h2>
          <BarChart width={450} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" barSize={30} />
            <Bar dataKey="revenue" fill="#82ca9d" barSize={30} />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
