
import React from 'react';
import './Menu.css';
function Menu() {
    
     
        <div className="menu-container">
          <div className="menu-column">
            <div className="menu-item">
              <h3>Jack Fruit Tacos</h3>
              <div className="menu-info">
                <span>4oz | 8oz</span>
                <span>$8.50</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
            </div>
            <div className="menu-item">
              <h3>Baja Cali Tacos</h3>
              <div className="menu-info">
                <span>4oz | 8oz</span>
                <span>$7.25</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
            </div>
            <div className="menu-item">
              <h3>Impossible Tacos</h3>
              <div className="menu-info">
                <span>4oz | 8oz</span>
                <span>$9.00</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
            </div>
          </div>
          <div className="menu-column">
            <div className="menu-item">
              <h3>Jack Fruit Tacos</h3>
              <div className="menu-info">
                <span>4oz | 8oz</span>
                <span>$8.50</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
            </div>
            <div className="menu-item">
              <h3>Baja Cali Tacos</h3>
              <div className="menu-info">
                <span>4oz | 8oz</span>
                <span>$7.25</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
            </div>
            <div className="menu-item">
              <h3>Impossible Tacos</h3>
              <div className="menu-info">
                <span>4oz | 8oz</span>
                <span>$9.00</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
            </div>
          </div>
        </div>
      
    };
    
    export default Menu;
    


const styles = {
  main: {
    padding: '20px',
  },
  menuSection: {
    textAlign: 'center',
  },
  categories: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '20px',
  },
  menuItems: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  menuItem: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  menuItemImage: {
    width: '150px',
    height: 'auto',
  },
  menuItemDetails: {
    textAlign: 'left',
  },
};

