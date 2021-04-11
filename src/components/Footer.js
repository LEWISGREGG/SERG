import React from 'react'
import './Footer.css';

import Year from './Year';
function Footer() {
 return (
 <footer id="footer">
          <section className='footer_subscription'>
        <p className='footer_subscription_heading'>
          Join -o-SERGTRADE-o- newsletter to receive our best stock alerts
        </p>
        <p className='footer_subscription_text'>
          You can unsubscribe at any moment.
        </p>
        <div className='input_areas'>


<div href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">        </div>
<div id="mc_embed_signup">
<form action="https://gmail.us1.list-manage.com/subscribe/post?u=4d5c806de93fbeace0abb8dd9&amp;id=3cd8873c31" method="post" id="mc-embedded-subscribe-form" className="mc-embedded-subscribe-form" className="validate" target="_blank" >
<div id="mc_embed_signup_scroll">


<div class="clear">
<input type="submit" value="Subscribe" name="subscribe"id="mc-embedded-subscribe"  class='btn_outline' variant="outlined"/>
</div>
</div>
</form>
</div>
<Year/>
        </div>
      </section>

  </footer>
  
 )
}

export default Footer
