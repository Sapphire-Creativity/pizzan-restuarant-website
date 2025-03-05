import React from 'react'
import heroImage from '../assets/offer_banner_1.jpg'
import OtherHeader from '../Components/OtherHeader'
const NotFound = () => {
  return (
    <>
      <OtherHeader title="404" subTitle="" backgroundImage={heroImage} />

      <div className="container">

        <h2 className="text-primary">Page is Coming Soon</h2>

      </div>
    </>
  )
}

export default NotFound