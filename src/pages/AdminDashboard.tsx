import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [filteredEnquiries, setFilteredEnquiries] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [chartData, setChartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEnquiries = async () => {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/admin/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/admin/enquiries');
        if (response.ok) {
          const data = await response.json();
          setEnquiries(data);
          setFilteredEnquiries(data);
          updateChartData(data);
        } else {
          console.error('Failed to fetch enquiries');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchEnquiries();
  }, [navigate]);

  const handleFilter = () => {
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    const filtered = enquiries.filter((enquiry: any) => {
      const createdAt = new Date(enquiry.createdAt);
      if (start && createdAt < start) return false;
      if (end && createdAt > end) return false;
      return true;
    });

    setFilteredEnquiries(filtered);
    updateChartData(filtered);
  };

  const updateChartData = (data: any[]) => {
    const counts: { [key: string]: number } = {};

    data.forEach((enquiry) => {
      const date = new Date(enquiry.createdAt).toISOString().split('T')[0];
      counts[date] = (counts[date] || 0) + 1;
    });

    const formatted = Object.entries(counts).map(([date, count]) => ({
      date,
      enquiries: count,
    })).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    setChartData(formatted);
  };

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>

      {/* Date Filters */}
      <div className="filter-container">
        <label>
          Start Date:
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </label>
        <label>
          End Date:
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </label>
        <button onClick={handleFilter}>Filter</button>
      </div>

      {/* Chart Section */}
      <div style={{ width: '100%', height: 300, marginBottom: '40px' }}>
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line type="monotone" dataKey="enquiries" stroke="#1d4ed8" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Enquiry Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Product Interest</th>
            <th>Message</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {filteredEnquiries.map((enquiry: any) => (
            <tr key={enquiry._id}>
              <td>{enquiry.name}</td>
              <td>{enquiry.email}</td>
              <td>{enquiry.phone}</td>
              <td>{enquiry.company || 'N/A'}</td>
              <td>{enquiry.productInterest || 'N/A'}</td>
              <td>{enquiry.message}</td>
              <td>{new Date(enquiry.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
