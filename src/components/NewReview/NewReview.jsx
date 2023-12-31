//npm imports
import { useState } from 'react'

//css
import styles from './NewReview.module.css'

const NewReview = (props) => {
  const [reviewFormData, setReviewFormData] = useState({
    text: '',
    price:'1',
    rating:'1',
    wifi:'1',
    coffeeShopAmbience: 'Spacious'
  })

  const handleChange = (evt) => {
    setReviewFormData({...reviewFormData, [evt.target.name]: evt.target.value})
  }

  const handleSubmitReview = (evt) => {
    const newForm = {}
    newForm.text = reviewFormData.text
    newForm.price = parseFloat(reviewFormData.price)
    newForm.rating = parseFloat(reviewFormData.rating)
    newForm.wifi = parseFloat(reviewFormData.wifi)
    newForm.coffeeShopAmbience = reviewFormData.coffeeShopAmbience
    evt.preventDefault()
    props.handleAddReview(newForm)
    setReviewFormData({})
  }

  return (
    <form className={styles.container} onSubmit={handleSubmitReview}>
      <div className={styles['review-container']}> 
        <div>
          <input
            required
            name='text'
            type='text'
            value={reviewFormData.text || ''} 
            id='text'
            onChange={handleChange}
            placeholder='Add Review'
            autoComplete='off'
            className={styles['review-text-input']}
          />
        </div>
        <div className={styles['review-dropdowns']}>
        <div className={styles['space-between']}>
            <label htmlFor='rating'>Rating ⭐️ </label>
            <select name='rating' value={reviewFormData.rating || ''} id='rating' onChange={handleChange}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
          <div className={styles['space-between']}>
            <label htmlFor='price'>Price 💰 </label>
            <select name='price' value={reviewFormData.price || ''} id='price' onChange={handleChange}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>       
          <div className={styles['space-between']}>
          <label htmlFor='coffeeShopAmbience'>Ambience ☕️ </label>
            <select name='coffeeShopAmbience' value={reviewFormData.coffeeShopAmbience || ''} id='coffeeShopAmbience' onChange={handleChange}>
              <option value='Spacious'>Spacious</option>
              <option value='Cozy'>Cozy</option>
              <option value='Loud'>Loud</option>
              <option value='Relaxing'>Relaxing</option>
              <option value='Quiet'>Quiet</option>
            </select>
          </div>
          <div className={styles['space-between']}>
            <label htmlFor='wifi'> Wifi 🛜 </label>
              <select name='wifi' value={reviewFormData.wifi || ''} id='wifi' onChange={handleChange}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
          </div>  
          <button type="submit" className={styles['submit-review-btn']}>Add Review</button>
        </div>
      </div>
    </form>
  )
}

export default NewReview