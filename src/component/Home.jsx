import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AppContext } from '../App';

const Home = () => {
  const { post, setPost } = useContext(AppContext);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then((response) => {
        setPost(response.data);
      });
  }, [setPost]);

  return (
    <div className="container border border-info">
      <div className="row">
        {
                Array.from(post).map((data) => (
                  <div className="col-3" key={data.id}>
                    <div className="card">
                      <img className="card-img-top" src={data.image} alt="url for foto" />
                      <div className="card-body">
                        <p className="card-text">{data.caption}</p>
                      </div>
                    </div>
                  </div>
                ))
            }
      </div>
    </div>
  );
};

export default Home;
