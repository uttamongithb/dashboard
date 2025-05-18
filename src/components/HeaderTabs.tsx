const HeaderTabs = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mb-4 ">
      
        <div>
          {['Generated Articles', 'Published Articles', 'Scheduled Articles', 'Archived Articles'].map(tab => (
        <button key={tab} className="px-4 py-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 ">
          {tab}
        </button>
      ))}
        </div>
     
      
    </div>
  );
};

export default HeaderTabs;