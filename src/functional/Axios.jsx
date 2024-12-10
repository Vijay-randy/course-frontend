import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Axios = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching data from API
  
    axios.get(`https://6746c3dc38c8741641d412e9.mockapi.io/studentform`)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);  // Empty array means this effect runs once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.id}{post.productName} {post.price}</li>
        ))}
      </ul>
    </div>
  );
};

// export default App;




// function Axios() {
//   return (
//     <div> 
//         axois
//     </div>
//   )
// }
export default Axios