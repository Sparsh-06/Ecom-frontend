import React, { useState } from 'react';

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Our standard shipping typically takes 3-5 business days within the contiguous United States. International shipping times may vary based on the destination country and customs processing times. We also offer expedited shipping options for customers who need their orders to arrive more quickly."
    },
    {
      question: "Can I return or exchange items?",
      answer: "Yes, you can return or exchange items within 30 days of purchase. Please visit our returns page for more details."
    },
    {
      question: "What sizes do you offer?",
      answer: "We offer a wide range of sizes from XS to XXL. Please refer to our size chart for more details."
    },
    {
      question: "Are your products sustainable?",
      answer: "Yes, we are committed to sustainability and all our products are made from eco-friendly materials."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact our customer support via email at support@example.com or call us at 1-800-123-4567."
    },
  ];

  return (
    <div className="w-[80vw] mx-auto p-8 ">
      <h1 className="text-3xl font-bold mb-6 text-center">Have Queries? Refer Here</h1>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b-2 border-gray-200">
            <div className="flex justify-between items-center py-4 cursor-pointer bg-white" onClick={() => toggle(i)}>
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <span className="text-xl">
                {selected === i ? '-' : '+'}
              </span>
            </div>
            <div className={`overflow-hidden transition-max-height duration-500 ${selected === i ? 'max-h-screen' : 'max-h-0'}`}>
              <p className="py-4">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
