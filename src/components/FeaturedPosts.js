import React, { Component } from 'react';
import { Link } from 'react-router';

class FeaturedPosts extends Component {
  render() {
    return (
      <div>
        <div className="blogPostSection">
          <h1 className="blogSectionTitle">Featured Posts</h1>

          <Link className="containerLink" key="1" to="/post/what-is-western-esotericism">
            <div className="blog-post-container waves-effect waves-light">
              <img alt="More and more people are calling themselves Western Esotericists. But what is Western Esotericism?" src="https://cdn.buttercms.com/0q0GlkNTJWVw9xXerN5x" />
              <p key="0" className="post-title">What is Western Esotericism?</p>
              <p key="1" className="post-desc">More and more people are calling themselves Western Esotericists. But what is Western Esotericism?</p>
              <div className="readMoreLink" key="2"><div className="read-more">Read More</div><i className="material-icons allofit">arrow_forward</i></div>
            </div>
          </Link>

          <Link className="containerLink" key="2" to="/post/the-problem-with-open-occult-communities">
            <div className="blog-post-container waves-effect waves-light">
              <img alt="Many Occultists are turned off by open online Occult Communities for several reasons. Why is there so much fluff?" src="https://cdn.buttercms.com/KPcYB4d2QGKsjJfImcma" />
              <p key="0" className="post-title">The Problem With Open Occult Communities</p>
              <p key="1" className="post-desc">Many Occultists are turned off by open online Occult Communities for several reasons. Why is there so much fluff?</p>
              <div className="readMoreLink" key="2"><div className="read-more">Read More</div><i className="material-icons allofit">arrow_forward</i></div>
            </div>
          </Link>




        </div>
      </div>
    )
  }
}

export default FeaturedPosts;
