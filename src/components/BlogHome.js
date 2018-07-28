import React, { Component } from 'react';
import { Link } from 'react-router'
import Butter from 'buttercms'

import HomeHero from './HomeHero';
import Footer from './Footer';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import '../index.css';

const butter = Butter('bf38a041f9c08115026386be442c10deb269d6ec');

class BlogHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  fetchPosts(page) {
    butter.post.list({page: page, page_size: 10}).then((resp) => {
      this.setState({
        loaded: true,
        resp: resp.data
      })
    });
  }

  componentWillMount() {
    let page = this.props.params.page || 1;

    this.fetchPosts(page)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({loaded: false});

    let page = nextProps.params.page || 1;

    this.fetchPosts(page)
  }

  render() {
    if (this.state.loaded) {
      const { next_page, previous_page } = this.state.resp.meta;

      return (
        <div>
          <HomeHero />

          <div className="blogPostSection">
            <h1 className="blogSectionTitle">Latest Publications</h1>


            {this.state.resp.data.map((post) => {
              return (
                <Link className="containerLink" key={post.slug} to={`/post/${post.slug}`}>
                  <div className="blog-post-container waves-effect waves-light">
                    <img alt={post.meta_description} src={post.featured_image} />
                    <p key="0" className="post-title">{post.title}</p>
                    <p key="1" className="post-desc">{post.meta_description}</p>
                    <div className="readMoreLink" key="2"><div className="read-more">Read More</div><i className="material-icons allofit">arrow_forward</i></div>
                  </div>
                </Link>

              )
            })}


            <div className="pagination">
              {previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}

              {next_page && <Link to={`/p/${next_page}`}>Next</Link>}
            </div>
          </div>

          <Footer />

        </div>
      );
    } else {
      //loading
      return (
        <div className="loading-box">
          <img alt="loading" src="https://loading.io/spinners/typing/lg.-text-entering-comment-loader.gif" />
        </div>
      )
    }
  }
}

export default BlogHome;
