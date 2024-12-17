import { Search } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';

interface SearchBarProps {
  className?: string;
}

export function SearchBar({ className = '' }: SearchBarProps) {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <div className={`relative w-full ${className}`}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Procurar..."
        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-purple-500"
      />
      <Search className="absolute right-3 top-2.5 text-purple-400" size={22} />
    </div>
  );
}