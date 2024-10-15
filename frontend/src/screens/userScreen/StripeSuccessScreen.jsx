// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function StripeSuccess() {
//   const { session_id } = useParams(); // Get session_id from URL params
//   const [loading, setLoading] = useState(true);
//   const [paymentDetails, setPaymentDetails] = useState(null);

//   useEffect(() => {
//     if (session_id) {
//       // Fetch payment details using session_id
//       axios
//         .get(`http://localhost:5000/api/stripe/session/${session_id}`)
//         .then((response) => {
//           setPaymentDetails(response.data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching payment details", error);
//           setLoading(false);
//         });
//     }
//   }, [session_id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Payment Successful!</h1>
//       <p>Thank you for your order.</p>
//       {/* Optionally render more details from paymentDetails */}
//       {paymentDetails && (
//         <div>
//           <p>Amount Paid: {paymentDetails.amount_total / 100} USD</p>
//           {/* Add more details here if needed */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default StripeSuccess;





import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function StripeSuccess() {
  const [loading, setLoading] = useState(true);
  const [paymentDetails, setPaymentDetails] = useState(null);

  // Use `useLocation` to get the query string
  const location = useLocation();

  // Function to get the session_id from the query string
  const getSessionIdFromQuery = () => {
    const params = new URLSearchParams(location.search); // Extract query parameters
    return params.get("session_id"); // Get the `session_id` from the query
  };

  useEffect(() => {
    const session_id = getSessionIdFromQuery(); // Get the session ID from the query string

    if (session_id) {
      // Fetch payment details using session_id
      axios
        .get(`http://localhost:5000/api/stripe/session/${session_id}`)
        .then((response) => {
          setPaymentDetails(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching payment details", error);
          setLoading(false);
        });
    }
  }, [location]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Thank you for your order.</p>
      {/* Optionally render more details from paymentDetails */}
      {paymentDetails && (
        <div>
          <p>Amount Paid: {paymentDetails.amount_total / 100} USD</p>
          {/* Add more details here if needed */}
        </div>
      )}
    </div>
  );
}

export default StripeSuccess;
