
const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r h-screen p-4 text-sm">
      <h1 className="text-xl font-bold mb-6">abun</h1>
      <select className="w-full border rounded px-2 py-1 mb-4">
        <option>amazon.com</option>
      </select>
      <ul className="space-y-2">
        <li className="font-semibold">Articles</li>
        {[
          'Create Article',
          'Generated Articles',
          'Keyword Projects',
          'AI Keyword to Article',
          'Steal Competitor Keyword',
          'Import Keyword from GSC',
          'Manual Keyword to Article',
          'Bulk Keyword to Article',
          'Longtail Keyword to Article',
          'Article Settings'
        ].map(text => (
          <li key={text} className="pl-3 text-gray-700 hover:text-black cursor-pointer">{text}</li>
        ))}
        <li className="mt-4 font-semibold">Auto Blog</li>
        <li className="mt-4 font-semibold">Internal Links</li>
        <li className="mt-4 font-semibold">Free Backlinks</li>
        <li className="mt-4 font-semibold">Integrations</li>
        <li className="mt-4 font-semibold">Subscriptions</li>
        <li className="mt-4 font-semibold">Affliate Program</li>
        <li className="mt-4 font-semibold">Help Center</li>
        <li className="mt-4 font-semibold">Updates</li>
        <li className="mt-4 font-semibold">Live Chat Support</li>
        <li className="mt-4 font-semibold">Profile</li>
        
      </ul>
    </div>
  );
};

export default Sidebar;