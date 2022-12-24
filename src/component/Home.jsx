import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { PostContext } from '../App';


const Home = () => {
  const { post, setPost } = useContext(PostContext);
    const API_KEY = 'YSCHbutcdsXn1Nal3CH0HvxD7TWdWTmZ';
  useEffect(() => {
    axios.get(`https://api.giphy.com/v1 /clips/trending?api_key=${API_KEY}&limit=10`)
     .then((response) => {
        setPost(response.data);
        console.log(response.data);
      });
  }, [setPost]);

  return (
    <div className="container border border-info">
      <div className="row">
        hello
        {
                // Array.from(post).map((data) => (
                //   <div className="col-3" key={data.id}>
                //     <div className="card">
                //       <img className="card-img-top" src={data.image} alt="url for foto" />
                //       <div className="card-body">
                //         <p className="card-text">{data.caption}</p>
                //       </div>
                //     </div>
                //   </div>
                // ))
            }
      </div>
    </div>
  );
};

export default Home;
