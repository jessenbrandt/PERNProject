import React from 'react';
import Maps from './Map';
import { Jumbotron } from 'reactstrap';
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron className='bgJumbo'>
                    {/* <h1 className="display-3">Welcome to Sharity!</h1>
                    <p className="lead">Check out some of our local charities near you on the map below.</p> */}
                    <div className='imghome'>
                        <img alt='pic' className='pic1' src='https://images.shulcloud.com/392/uploads/community-cropped.jpg' />
                        <img alt='pic' className='pic2' src='http://sites.tccd.edu/tccbuzz/wp-content/uploads/sites/2/2012/09/volunteercorkboard.jpg' />
                        <img alt='pic' className='pic' src='https://inclusiveactioneverydaylives.files.wordpress.com/2012/08/celebratediversity750.jpg?w=660&h=330&crop=1' />
                        <img alt='pic' className='pic2' src='https://us.123rf.com/450wm/dphiman/dphiman1407/dphiman140700391/30064337-the-word-home-in-cut-out-magazine-letters-pinned-to-a-cork-notice-board.jpg?ver=6' />
                        <img alt='pic' className='pic' src='https://us.123rf.com/450wm/dphiman/dphiman1407/dphiman140700055/30031476-the-word-share-in-cut-out-magazine-letters-pinned-to-a-cork-notice-board.jpg?ver=6' />
                        <img alt='pic' className='pic4' src='https://t4.ftcdn.net/jpg/01/08/98/79/240_F_108987939_1MR9g4KwSL54NRb3iQDfKMH9jmjri9ba.jpg' />
                        <img alt='pic' className='pic2' src='https://www.coburgbanks.co.uk/wp-content/uploads/2016/08/communication-400x269.jpg' />
                        <img alt='pic' className='picmain' src='https://us.123rf.com/450wm/dphiman/dphiman1407/dphiman140700054/30031478-the-word-change-in-cut-out-magazine-letters-pinned-to-a-cork-notice-board.jpg?ver=6' />
                        <img alt='pic' className='pic3' src='http://www.actingbiz.com/assets/images/articles/005.jpg' />
                        <img alt='pic' className='pic4' src='https://us.123rf.com/450wm/christianchan/christianchan1503/christianchan150300172/37140607-the-word-start-in-cut-out-magazine-letters-pinned-to-a-corkboard-.jpg?ver=6' />
                        <img alt='pic' className='pic1' src='https://us.123rf.com/450wm/thingass/thingass1407/thingass140700058/30568407-%EC%86%8C%EC%9A%B8-x28-soul-x29-%EC%9D%B4%EB%9D%BC%EB%8A%94-%EB%8B%A8%EC%96%B4%EA%B0%80-%EC%BD%94%EB%A5%B4%ED%81%AC-%EA%B2%8C%EC%8B%9C%ED%8C%90%EC%97%90-%EB%A7%A4%EA%B1%B0%EC%A7%84-%ED%8E%B8%EC%A7%80%EB%A5%BC-%EC%9E%98%EB%9D%BC-%EB%83%88%EC%8A%B5%EB%8B%88%EB%8B%A4-%EB%AF%B8%EA%B5%AD%EC%9D%98-%EB%94%94%ED%8A%B8%EB%A1%9C%EC%9D%B4%ED%8A%B8-x28-disroit-x29-%EC%99%80-%EC%8B%9C%EC%B9%B4%EA%B3%A0-x28-chicago-x29-%EC%97%90%EC%84%9C-.jpg?ver=6' />

                        <img alt='pic' className='pic2' src='https://us.123rf.com/450wm/thingass/thingass1312/thingass131200074/24758456-the-word-impact-in-cut-out-magazine-letters-pinned-to-a-cork-notice-board.jpg?ver=6' />
                        <img alt='pic' className='pic' src='https://us.123rf.com/450wm/thingass/thingass1312/thingass131200073/24758457-the-word-smart-in-cut-out-magazine-letters-pinned-to-a-cork-notice-board-representing-the-business-c.jpg?ver=6' />
                        <img alt='pic' className='pic2' src='http://www.mychapterroom.com/wp-content/uploads/2017/01/Vision-board.png' />
                        <img alt='pic' className='pic' src='http://collegeforadultlearning.com.au/wp-content/uploads/2014/03/diversity.jpg' />
                        <img alt='pic' className='picmain' src='https://us.123rf.com/450wm/dphiman/dphiman1407/dphiman140700186/30032393-the-word-dream-in-cut-out-magazine-letters-pinned-to-a-cork-notice-board.jpg?ver=6' />
                    </div>
                </Jumbotron>
                <div className='mainhome'>
                    <h1 className='h1home'>Welcome to <span className='sharity'>Sharity!</span></h1>
                    <p className='p'>Checkout some of our local charities near you</p>
                    <div className='home'>
                        <div className='mainMap'><Maps /></div>
                    </div>
                    <p className='p'>Click <Link to="/authform">here</Link> to Signup or Login</p>
                </div>
            </div>
        )
    }
}

export default Home;