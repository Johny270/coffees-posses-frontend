// npm modules
import { Link } from 'react-router-dom'

// css
import styles from './ShopCard.module.css'

const ShopCard = ({ shop, handleDeleteShop, user }) => {
  return (
    <div className={styles['shop-card']}>
      <Link to={`/shops/${shop._id}`}>
        {shop.name}
      </Link>
      <div>{shop.location}, {shop.address.state}</div>
      {user?.profile === shop.addedBy._id &&
      <div className={styles['btn-container']}>
        <button 
          type='submit' 
          onClick={() => handleDeleteShop(shop._id)}
        >
          Delete
        </button>
      </div>}
    </div>
  )
}

export default ShopCard