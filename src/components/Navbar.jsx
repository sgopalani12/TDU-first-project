import React, {useState} from "react"
import '../styles/Navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";

const SearchableDropdown = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = items.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleItemClick = (item) => {
    setSearchTerm(item);
    setShowDropdown(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onClick={() => setShowDropdown(true)}
        placeholder="Search..."
        style={{ padding: '8px', width: '200px', boxSizing: 'border-box' }}
      />
      {showDropdown && (
        <ul style={{
          position: 'absolute',
          backgroundColor: 'white',
          border: '1px solid #ccc',
          width: '200px',
          maxHeight: '150px',
          overflowY: 'auto',
          padding: '0',
          margin: '0',
          listStyleType: 'none',
          zIndex: 1000
        }}>
          {filteredItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(item)}
              style={{
                padding: '8px',
                cursor: 'pointer',
                backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white'
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="navbar">
            <div className="logo">The Denim University</div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#shoppingCart">Shopping Cart</a></li>
                <label>Search </label>
            </ul>
        </nav>
  )
}

export default Navbar; 
SearchableDropdown;