import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);


  const faqs = [
    {
      question: "How can I start earning?",
      answer:
        'To start earning click on the "Get Started" button on the PixClick Home page. Enter your email id, mobile number & set a password to login in. Once you\'re logged in, you will see more than 100,000+ share worthy deals. Pick a deal you like based on the product, your profit per sale, discount or price and share this link (your profit link) with anyone who would be interested in buying it. You can share as many Profit Links as you want with people on (No Suggestions), Facebook, Instagram or any other social platform. Whenever someone shops through your "Profit Link" you earn "Profit" which is "Real Cash". This cash is added to your PixClick Account & you can transfer it directly to your bank account in just a few clicks!'
    },
    {
      question: "Do I need a bank account to start?",
      answer:
        "Yes, you need to have a bank account so that you can transfer your profit to your bank. Your profit is safe in your PixClick Account till you transfer it to your bank account."
    },
    {
      question: "When & How do I get the payment?",
      answer:
        "Earn profit on each sale that happens through your link. Once your Profit is Confirmed, you can request for its payment. You can track the sales coming from each Profit Link. You will see that Profit is first added to your account in pending status within 5 minutes to 72 hours of a sale. Then, depending on the retailer of the product it can take anywhere between 30 to 90 days for your Profit to get Confirmed. Confirmed Profit can be transferred to your Bank Account by going to your 'Payments' section."
    },
    {
      question: "What kind of products are available on PixClick?",
      answer:
        "PixClick has a variety of products ranging from Sarees, Kurtis, Kids Wear, Home Furnishing, Electronics, Menswear & much more! Everything on PixClick is available at the best possible price for you to share and offers you great Profit!"
    },
    {
      question: "Where should I share the deals?",
      answer:
        "Once you identify the best products, share it with your friends or family on (No Suggestions) or Facebook or Instagram. You should find products your friends or family would want to buy and share links to products with the best price & profit. For example: If your friend is looking for a new phone and you know they have a big budget, you can share a Profit Link for an iPhone. However, if your friend is looking for a budget phone you can share a Profit Link to a Xiaomi, Oppo or Vivo phone."
    },
    {
      question: "How do I contact your Customer Support team?",
      answer:
        "We're always here to help you out! You can call us at 8178021403 or email us at support@PixClick.com. Our Customer Support team is available from Monday to Friday between 10 am & 6 pm IST. We guarantee a 48 hour response time, but will usually get back to you much sooner than that."
    },
    {
      question: "What does Pending Profit mean?",
      answer:
        "Pending Profit means someone has clicked on your Profit Links(s) and shopped at the retailer website. However, since the product(s) is (are) still within the Return or Cancellation period you cannot Transfer or Redeem this Profit. For example: If you make a purchase from Myntra through PixClick you will get an email from us acknowledging that you have Pending Profit of Rs. 250 within 48 hours. Now once the cancellation/return period is over, Myntra will confirm this to us and we will move your Rs. 250 Pending Profit to your Confirmed Profit. However, if the order is cancelled, returned or exchanged your Profit is cancelled as well. The retailer has to confirm the sale to us before we can pay you."
    },
    {
      question: "What does Confirmed Profit mean?",
      answer:
        "Confirmed Profit is Real Money that you can transfer to your Bank Account via NEFT"
    },
    {
      question: "How long after a sale will I actually get my Profit?",
      answer:
        "This varies from retailer to retailer. After you do a transaction you will get an email from us within 5 minutes to 48 hours telling you how much Profit is due to you. This is called 'Pending' Profit. Once the return period of your product/s is over or travel is completed, the retailer confirms your sale to us. The status of your Profit will then automatically change to 'Confirmed'. It can take between 48 hours to 90 days for your Profit to get confirmed depending on which retailer the sale was concluded at."
    },
    {
      question: "Where do I see my Profit earnings?",
      answer:
        'Once you\'ve logged in, you will see the “Profile” icon on the top right corner of your screen. Go to "Profile" and then open "Profit" to see your Profit Earnings.'
    },
    {
      question: "What is your payment policy? Are there any restrictions or charges?",
      answer:
        "Our payment policy in detail: Only Confirmed Profit can be paid. Pending Profit cannot be paid till its status has been updated to ‘Confirmed’. Whenever you have Confirmed Profit in your account, we can pay the money to your (Indian) Bank Account via NEFT (for free). Depending on your bank, this payment should reach your account within 4-5 business days for payments via NEFT."
    },
    {
      question: "How do I request payment of my profit?",
      answer:
        'You can go to the "My Payments" section in the "Profile" menu and click on "Request Payment". You can only request for a payment once you have Confirmed Profit Earnings.'
    },
    {
      question: "How long does it take to receive Profit via NEFT?",
      answer:
        "NEFT Payments are processed thrice a week. Depending on your bank, this payment should reach your account within 4-5 business days from the date of your request."
    },
    {
      question: "How to make profit links at PixClick?",
      answer:
        'Once you are logged in to PixClick, click on "Make Link" at the bottom left corner of your mobile screen. Now, paste a link from any Partner E-commerce Site (Click "See Partners" for details) in the empty box to make a Profit link. Now click on Make Profit Link below. Your Profit link is now ready to be shared. You can copy the profit link and share with your friends on WhatsApp, Facebook etc.'
    },
    {
      question: "How to Earn money from profit links?",
      answer:
        "Once you share the profit link amongst the potential buyers, the more they buy from your profit link the more you Earn. The profit as per the profit rates will be added to your PixClick account when someone shops using your profit link. It’s as simple as that. So, don't wait, make your own Profit Link now."
    },
    {
      question: "Why is my Profit not tracking?",
      answer:
        "If someone shops using your link on any retailer App except for Flipkart App, the retailer does not pay us Commission and we do not pay your profit."
    }
  ];

 const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
     <u> <h1 className="text-3xl font-bold mb-4">FAQs</h1></u>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border rounded-xl shadow-md overflow-hidden bg-white"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
          >
            <span className="font-bold text-green-600 hover:underline">{faq.question}</span>
            {openIndex === index ? (
              <FaChevronUp className="text-gray-500" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700 text-sm">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
