import '../app/globals.css';
import Link from 'next/link';

export default function ThankYou() {
  
    return (
        <main className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold mb-4 text-black">Thank you for your order!</h1>
          <p className="text-lg text-gray-700 mb-5">A confirmation email will be sent to you</p>
          <Link href={"/"} className='text-pink-700 underline'>Back to homepage</Link>
        </div>
      </main>
    );
};


// export default function ThankYou() {
//     const router = useRouter();
//     const { customerName } = router.query;
//     console.log(router.query)
//     return (
//         <section className="w-full h-full mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-white">
//             <h2 className="text-4xl text-black py-8">Thank you {customerName} for shopping with us!</h2>

//             <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                
//             </div>
//         </section>
//     )
// }




 



    // const router = useRouter();
    // const { session_id } = router.query;
    // const [customerName, setCustomerName] = useState('');
    // const [sessionDetails, setSessionDetails] = useState(null);
    // const [error, setError] = useState(null);
    // const [sessionID, setSessionID] = useState('');

    // const retryFetchSessionID = async () => {
    //     const { session_id } = router.query;
    //     if (session_id) {
    //         setSessionID(session_id);
    //     } else {
    //         setTimeout(retryFetchSessionID, 1000);
    //     }
    // };

    // useEffect(() => {
    //     retryFetchSessionID();
    // }, []); // Run once on component mount

    // useEffect(() => {
    //     if (sessionID) {
    //         // Make API request or perform other actions with sessionID
    //         fetchSessionData(sessionID); // Example function for fetching session data
    //     }
    // }, [sessionID]);



    // const fetchSessionData = async (sessionID) => {
    //     try {
    //         const response = await fetch('/api/thank-you');
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch session data');
    //         }
    //         const data = await response.json();
    //         console.log('Session data:', data);
    //         // Process the session data as needed
    //     } catch (error) {
    //         console.error('Error fetching session data:', error);
    //     }
    // };

    // useEffect(() => {
    //     if (session_id) {
    //         getSession();
    //     }
    // }, [session_id]);


    // const getSession =  async () => {
    // const data = await stripe.checkout.sessions.retrieve(session_id)
    // const session = await data
    // setCustomerName(session.customer_details?.name)
    // console.log(session)
    // }

    // const getSession = async () => {
    //     try {
    //         const data = await stripe.checkout.sessions.retrieve(session_id);
    //         const session = await data;
    //         setCustomerName(session.customer_details?.name);
    //         console.log(session);
    //     } catch (error) {
    //         console.error('Error fetching session details:', error);
    //     }
    // };


   
// setTimeoutgetSession()
    // getSession()

//   // Define a function to fetch session details from the server
// const fetchSessionDetails = async () => {
//     try {
//       // Send a GET request to your server route with the session ID as a query parameter
//       const response = await fetch(`/api/checkout_sessions/${session_id}`);
  
//       // Check if the response is successful (status code 200)
//       if (response.ok) {
//         // Parse the JSON response body
//         const session = await response.json();
//         console.log('Session details:', session);
//         // Handle the session details as needed
//       } else {
//         // If the response is not successful, throw an error
//         throw new Error('Failed to fetch session details');
//       }
//     } catch (error) {
//       // Handle errors
//       console.error('Error fetching session details:', error);
//     }
//   };
  
//   // Call the fetchSessionDetails function with the session ID
// //   const sessionId =  session_id; // Replace with the actual session ID
//   fetchSessionDetails();

// useEffect(() => {
//     if (session_id) {
//         fetchSessionDetails();
//     }
// }, [session_id]);

// const fetchSessionDetails = async () => {
//     try {
//         // Send a GET request to your server route with the session ID as a query parameter
//         const response = await fetch('/api/checkout_sessions?sessionId=sessionID');

//         // Check if the response is successful (status code 200)
//         if (response.ok) {
//             // Parse the JSON response body
//             const session = await response.json();
//             console.log('Session details:', session);
//             // Set session details state
//             setSessionDetails(session);
//         } else {
//             // If the response is not successful, throw an error
//             throw new Error('Failed to fetch session details');
//         }
//     } catch (error) {
//         // Handle errors
//         console.error('Error fetching session details:', error);
//         // setError('Error fetching session details');
//     }
// };

// if (error) {
//     return <div>Error: {error}</div>;
// }

// useEffect(() => {
//     // Make a GET request to your Next.js API route
//     fetch(`/api/checkout_sessions?session_id=${session_id}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch order success data');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Set the thank you message from the response data
//         setCustomerName(data.name);
//       })
//       .catch(error => {
//         // Handle errors
//         console.error('Error fetching order success data:', error);
//       });
//   }, []); // Empty dependency array to ensure the effect runs only once
// useEffect(() => {
//     const fetchCustomerName = async () => {
//       try {
//         const response = await fetch('/api/thank-you');
//         if (!response.ok) {
//           throw new Error('Failed to fetch customer name');
//         }
//         const data = await response.json();
//         setCustomerName(data.name); // Assuming the response contains the customer name
//       } catch (error) {
//         console.error('Error fetching customer name:', error);
//       }
//     };

//     fetchCustomerName();
//   }, []);
  
 

