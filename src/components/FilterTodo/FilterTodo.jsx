import React, {useState} from "react";
import './FilterTodo.css'

const FilterTodo = ({tasks, updateFilter}) => {
    const [filter, setFilter] = useState('all')

    const handleFilter = (filterType) =>{
        setFilter(filterType)
        updateFilter(filterType)
    }

    return(
        <div className="FilterTodo">
            <div className="FilterTodo__countItems">{tasks.length} items</div>
            <div className="FilterTodo__filters">
                <ul>
                    <li>
                        <button onClick={()=> handleFilter('all')} className={filter === 'all' ? 'active': ''}>All</button>
                    </li>
                    <li>
                        <button onClick={()=> handleFilter('active')} className={filter === 'active' ? 'active': ''}>Active</button>
                    </li>
                    <li>
                        <button onClick={()=> handleFilter('completed')} className={filter === 'completed' ? 'active': ''}>Completed</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FilterTodo;