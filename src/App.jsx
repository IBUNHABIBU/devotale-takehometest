import { createContext, useState } from 'react';
import Home from './component/Home';

export const PostContext = createContext(null);

function App() {
  const [post, setPost] = useState(PostContext);
  return (
    <PostContext.Provider value={{ post, setPost }}>
      <div className="container">

        <Home />
      </div>
    </PostContext.Provider>
  );
}

export default App;
