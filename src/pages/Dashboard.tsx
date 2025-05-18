import React, { useState, useEffect } from 'react';
import HeaderTabs from '../components/HeaderTabs';
import ArticleTable from '../components/ArticleTable';
import LoadingSkeleton from '../components/LoadingSkeleton';

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-1 p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center">Articles</h2>
      <HeaderTabs />
      {loading ? <LoadingSkeleton rows={5} /> : <ArticleTable />}
    </div>
  );
};

export default Dashboard;