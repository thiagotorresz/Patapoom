interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const categories = ['todos', 'cães', 'rações', 'brinquedos', 'casinhas', 'acessórios'];

  return (
    <div className="flex gap-3 mb-8 flex-wrap justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category === 'todos' ? 'all' : category)}
          className={`px-6 py-2 rounded-full capitalize transition-colors ${
            selectedCategory === (category === 'todos' ? 'all' : category)
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
