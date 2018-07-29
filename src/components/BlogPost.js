import React, { Component } from 'react';
import Butter from 'buttercms'
import { Helmet } from "react-helmet";

import Subscribe from './Subscribe';
import Footer from './Footer';


import '../index.css';


const butter = Butter('bf38a041f9c08115026386be442c10deb269d6ec');

class BlogPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentWillMount() {
    let slug = this.props.params.slug;

    butter.post.retrieve(slug).then((resp) => {
      this.setState({
        loaded: true,
        post: resp.data.data
      })
    });
  }

  render() {
    if (this.state.loaded) {
      const post = this.state.post;

      return (
        <div className="blog-Post-Page">
          <Helmet>
            <title>{post.seo_title}</title>
            <meta name="description" content={post.meta_description} />
            <meta name="og:image" content={post.featured_image} />
          </Helmet>

            <div className="blog-container">
              <h1>{post.title}</h1>
              <div dangerouslySetInnerHTML={{__html: post.body}} />
            </div>

            <Subscribe />
            <Footer />
        </div>
      );
    } else {
      return (
        <div className="loading-box">
          <img alt="loading" src="https://loading.io/spinners/typing/lg.-text-entering-comment-loader.gif" />
        </div>
      );
    }
  }
}

export default BlogPost;
