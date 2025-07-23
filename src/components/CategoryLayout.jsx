import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryPage from '../pages/CategoryPage';
import FilterSidebar from './FilterSidebar/FilterSidebar';

const CategoryLayout = () => {
  const { category } = useParams();

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', padding: '10px' }}>
        <FilterSidebar category={category} />
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: '10px' }}>
        <CategoryPage />
      </div>
    </div>
  );
};

export default CategoryLayout;
