import React, { useContext } from 'react'
import { MenuContext } from '../Context/MenuContext'
import { SlideFoodMenu } from '../assets/data'

const FavouriteItems = () => {
    const { favouriteItems } = useContext(MenuContext)
    return (
        <div className="h-screen">

            <div>
                <h3>Favourites</h3>
                favouriteItems
                <div>
                    {SlideFoodMenu.map((product) => {
                        if (favouriteItems[product.id] === null) {
                            return <h2>Favourite List is Empty!</h2>
                        } else {

                            <div>

                                <img src={product.image} alt="" />

                                <div key={product.id}>
                                    <h4>{product.name}</h4>
                                    <p>{product.category}</p>
                                    <h3>${product.price}</h3>
                                </div>
                            </div>


                        }
                    })}


                </div>
            </div>

        </div>
    )
}

export default FavouriteItems
