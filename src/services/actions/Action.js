import React from 'react'
import { ADD_TO_CART } from '../Constants'

const Action=(data) =>{
    return {
        type:ADD_TO_CART,
        data:data
    }
}

export default Action
