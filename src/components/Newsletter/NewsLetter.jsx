import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <>
            <section className="page-width news-letter" id='margin-t'>
                <h1>Get Exclusive Offer on your Email</h1>
                <p>Subscribe to our newsLetter and stay up-date</p>
                <div>
                    <input type="email" placeholder='your email id' />
                    <button>subscribe</button>
                </div>
            </section>
        </>
    )
}

export default NewsLetter
