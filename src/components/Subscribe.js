import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


export default class Subscribe extends Component {
  render() {
    return (
      <div className="subscribe-section">
        {/* Begin MailChimp Signup Form */}
        <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}\n\t/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n" }} />
        <div id="mc_embed_signup">
          <form action="https://codingforkids.us12.list-manage.com/subscribe/post?u=77849d71682525907b9a14365&id=416ac4c992" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
              <label className="subscribe-text" htmlFor="mce-EMAIL">Subscribe to our mailing list</label>
              <input type="email" defaultValue="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_77849d71682525907b9a14365_416ac4c992" tabIndex={-1} defaultValue /></div>
              <div style={{marginLeft: '1rem'}} className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn hoverable waves-effect red waves-green subbtn" /></div>
            </div>
          </form>
        </div>
        {/*End mc_embed_signup*/}

      </div>
    )
  }
}
