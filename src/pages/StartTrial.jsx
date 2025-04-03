import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51R9HrxPBe4ycoBuxxeppCHzz6UynCBjsilNI1kYPr70Dm9fw7tNBGai76BA1y89UcegrhwyhPIeMo0FFAPyMJe1T00ROJaYGBr');

const StartTrial = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        { price: 'price_1R9IOtPBe4ycoBuxpjIs3sFn', quantity: 1 }
      ],
      mode: 'subscription',
      successUrl: `${window.location.origin}/trial-success`,
      cancelUrl: `${window.location.origin}/start-trial`,
    });

    if (error) {
      console.error('Stripe redirect error:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold ml-4 mb-4">Subscribe for Shortlet Premium</h1>
        <p className="ml-10 mb-6 text-gray-600">Try all premium features. Cancel anytime.</p>
  
        <div className="mb-8 space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white text-center">
            Why Go Premium?
          </h2>
          <ul className="space-y-4">
            {[
              "Advanced AI analytics for optimizing revenue",
              "Priority listing & smart booking boosts",
              "Secure payment infrastructure with instant payouts",
              "Automated guest communication tools",
              "Multi-property management from one dashboard",
              "24/7 expert support & onboarding assistance"
            ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 text-gray-800 shadow-sm hover:shadow-md transition">
                <FiCheck className="text-green-500" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
  
        <button 
          onClick={handleClick}
          disabled={loading}
          className={`px-6 py-3 w-full text-white rounded transition ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Redirecting...' : 'Proceed to Checkout'}
        </button>
      </div>
    </div>
  );
  
};

export default StartTrial;
