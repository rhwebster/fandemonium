import React from 'react';
// import CheckinIndex from '../checkin/checkin_index';
// import TopRatedBeers from './top_rated_beers';

function Test() {
    // constructor(props) {
    //     super(props);

    //     this.checkinCounter = this.checkinCounter.bind(this);
    //     this.uniqueBeerCounter = this.uniqueBeerCounter.bind(this);
    // }

    // checkinCounter() {
    //     let count = 0;
    //     Object.values(this.props.checkins).map(checkin => {
    //         if (checkin.user.id === this.props.sessionId) {
    //             count += 1
    //         }
    //     })
    //     return count;
    // }

    // uniqueBeerCounter() {
    //     const uniqueBeers = [];
    //     Object.values(this.props.checkins).map(checkin => {
    //         if (!uniqueBeers.includes(checkin.beer_id && checkin.user.id === this.props.sessionId)) {
    //             uniqueBeers.push(checkin.beer_id)
    //         }
    //     })
    //     return uniqueBeers.length;
    // }

   
        // const { checkins, user, sessionId, deleteCheckin, fetchCheckins, fetchCheckin } = this.props;
        return (
            <div className="home-main-div">
                {/* <CheckinIndex
                    // checkins={checkins}
                    // fetchCheckins={fetchCheckins}
                    // fetchCheckin={fetchCheckin}
                    // sessionId={sessionId}
                    // deleteCheckin={deleteCheckin}
                /> */}
                <div className="home-rt-side">
                    <div className="user-container">
                        <div className="user-info-row-1">
                            <img src={window.defAvatar} />
                            <div id="user-fullname-icon">
                                <h3>Demo Demo</h3>
                                <img src={window.proIcon} />
                                <p>Demo</p>
                            </div>
                        </div>
                        <div className="user-info-row-2">
                            <div className="total-checkins"><p id="num">0</p><p>TOTAL</p></div>
                            <div className="unique-checkins"><p id="num">0</p><p>UNIQUE</p></div>
                        </div>
                    </div>
              
                </div>
            </div>
        )
    
}

export default Test;