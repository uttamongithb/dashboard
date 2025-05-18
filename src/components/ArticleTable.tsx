import React, { useState, useMemo } from 'react'
import type { TableRow } from '../types/data'
import ActionButton from './ActionButton'
import PublishDropdown from './PublishDropdown'

const dummyArticles: TableRow[] = [
  { id: '1', title: 'How to Improve Your Skills...', keyword: 'league of legends [2240000]', words: 4575, created: '20 hours ago' },
  { id: '2', title: 'How to Master Last Hitting...', keyword: 'league of legends [2240000]', words: 3480, created: '21 hours ago' },
  { id: '3', title: '7 Tips for Better Teamplay...', keyword: 'league of legends [2240000]', words: 2676, created: 'a day ago' },
  { id: '4', title: 'Top Virtual Executive Assistant...', keyword: 'virtual assistant [2900]', words: 2408, created: '1 Oct, 24' },
  { id: '5', title: 'Unlimited Graphics Design Solution', keyword: 'Unlimited Graphics Design Services [390]', words: 1993, created: '--' },
  { id: '6', title: 'Top Amazon Payment Methods for Quick Access to Funds', keyword: 'amazon payment methods [3600]', words: 2674, created: '--' },
  { id: '7', title: 'Backlinks 101: What are backlinks?', keyword: 'Backlinks [8100]', words: 2261, created: '--' },
  { id: '8', title: 'Unlimited Graphics Design Solution', keyword: 'ai seo software [880]', words: 1543, created: '--' },
  { id: '9', title: 'Unlimited Graphic Design Services You Can Rely On', keyword: 'Unlimited Graphics Design Services [390]', words: 1974, created: '--' },

];

type SortKey = 'keyword' | 'words'
type SortOrder = 'asc' | 'desc'

const ArticleTable: React.FC = () => {
  const [search, setSearch] = useState('')
  const [sortKey, setSortKey] = useState<SortKey | null>(null)
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')
  const [selected, setSelected] = useState<string[]>([])

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortOrder('asc')
    }
  }

  const handleToggleAll = () => {
    if (selected.length === filteredAndSorted.length) {
      setSelected([])
    } else {
      setSelected(filteredAndSorted.map(article => article.id))
    }
  }

  const handleToggleRow = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const filteredAndSorted = useMemo(() => {
    return dummyArticles
      .filter(article =>
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.keyword.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => {
        if (!sortKey) return 0
        const aVal = a[sortKey]
        const bVal = b[sortKey]
        if (sortKey === 'words') {
          return sortOrder === 'asc' ? Number(aVal) - Number(bVal) : Number(bVal) - Number(aVal)
        } else {
          return sortOrder === 'asc'
            ? String(aVal).localeCompare(String(bVal))
            : String(bVal).localeCompare(String(aVal))
        }
      })
  }, [search, sortKey, sortOrder])

  return (
    <div>
      <div className="flex justify-center items-center  mb-8 mt-10">
        <input
          type="text"
          placeholder="Search for Title & Keywords..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-1 rounded w-72"
        />
      </div>

      <div className="border rounded-lg overflow-x-auto">
        <table className="w-full text-sm table-auto">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">
                <input
                  type="checkbox"
                  checked={selected.length === filteredAndSorted.length && filteredAndSorted.length > 0}
                  onChange={handleToggleAll}
                />
              </th>
              <th className="p-2">Article Title</th>

              <th className="p-2 relative group cursor-pointer">
                <div onClick={() => handleSort('keyword')} className="flex items-center">
                  Keyword [Traffic]
                  <span className="ml-1 text-xs opacity-50 group-hover:opacity-100">
                    {sortKey === 'keyword' ? (sortOrder === 'asc' ? '↑' : '↓') : '↕'}
                  </span>
                </div>
              </th>

              <th className="p-2 relative group cursor-pointer">
                <div onClick={() => handleSort('words')} className="flex items-center">
                  Words
                  <span className="ml-1 text-xs opacity-50 group-hover:opacity-100">
                    {sortKey === 'words' ? (sortOrder === 'asc' ? '↑' : '↓') : '↕'}
                  </span>
                </div>
              </th>

              <th className="p-2">Created On</th>
              <th className="p-2">Action</th>
              <th className="p-2">Publish</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSorted.map((article) => (
              <tr key={article.id} className="border-t">
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(article.id)}
                    onChange={() => handleToggleRow(article.id)}
                  />
                </td>
                <td className="p-2">{article.title}</td>
                <td className="p-2">{article.keyword}</td>
                <td className="p-2">{article.words}</td>
                <td className="p-2">{article.created}</td>
                <td className="p-2"><ActionButton /></td>
                <td className="p-2"><PublishDropdown /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ArticleTable
