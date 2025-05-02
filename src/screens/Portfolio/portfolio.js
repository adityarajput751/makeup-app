import React from 'react';
import './Portfolio.css';
import Header from '../../components/header/header';

const posts = [
  {
    id: 1,
    imageUrl: require('../../assets/models_photo/1.jpg'),
    caption: 'Beautiful sunset in Goa 🌅',
  },
  {
    id: 2,
    imageUrl: require('../../assets/models_photo/2.jpg'),
    caption: 'Working on a new app 💻📱',
  },
  {
    id: 3,
    imageUrl: require('../../assets/models_photo/3.jpg'),
    caption: 'React Native is amazing!',
  },
  {
    id: 1,
    imageUrl: require('../../assets/models_photo/4.jpg'),
    caption: 'Beautiful sunset in Goa 🌅',
  },
  {
    id: 2,
    imageUrl: require('../../assets/models_photo/8.jpg'),
    caption: 'Working on a new app 💻📱',
  },
  {
    id: 3,
    imageUrl: require('../../assets/models_photo/9.jpg'),
    caption: 'React Native is amazing!',
  },
  {
    id: 1,
    imageUrl: require('../../assets/models_photo/10.jpg'),
    caption: 'Beautiful sunset in Goa 🌅',
  },
  {
    id: 1,
    imageUrl: require('../../assets/models_photo/11.jpg'),
    caption: 'Beautiful sunset in Goa 🌅',
  },
  {
    id: 1,
    imageUrl: require('../../assets/models_photo/12.jpg'),
    caption: 'Beautiful sunset in Goa 🌅',
  },
  // Add more posts as needed
];

function Portfolio() {
  return (
    <div className="portfolio-container">
        <Header />
      {/* <h2>My Instagram Portfolio</h2> */}
      <div className="post-grid">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <img src={post.imageUrl} alt={`Post ${post.id}`} />
            {/* <p>{post.caption}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
