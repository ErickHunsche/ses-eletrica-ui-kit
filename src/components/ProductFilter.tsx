
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductFilterProps {
  onFilterChange: (category: string, search: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { value: 'all', label: 'Todos os Produtos' },
    { value: 'eletrico', label: 'Elétrico' },
    { value: 'protecao', label: 'Proteção' },
    { value: 'iluminacao', label: 'Iluminação' },
    { value: 'ferramentas', label: 'Ferramentas' }
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange(category, searchTerm);
  };

  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
    onFilterChange(selectedCategory, search);
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "ghost"}
              size="sm"
              onClick={() => handleCategoryChange(category.value)}
              className={`rounded-full transition-all duration-300 ${
                selectedCategory === category.value
                  ? 'bg-electric-orange text-white'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
