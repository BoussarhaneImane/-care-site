import React from 'react'
import { ShoppingCartProvider } from './ShoppingCartContext'
import ShopPageContent from './ShopPageContent'

function ShopPage() {
  return (
    <div>
      <ShoppingCartProvider>
          <ShopPageContent/>
      </ShoppingCartProvider>
    </div>
  )
}

export default ShopPage
