import React from 'react'
import { FaCreditCard } from 'react-icons/fa'

const Payment = () => {
  return (
    <div className="bg-gradient-to-r from-pink-600 to-fuchsia-700 text-white p-8 rounded-2xl shadow-lg flex items-center gap-6">
      <FaCreditCard size={60} />
      <div>
        <h2 className="text-3xl font-bold mb-2">Payments</h2>
        <p>Handle all transactions, invoices and billing settings securely.</p>
      </div>
    </div>
  )
}

export default Payment
