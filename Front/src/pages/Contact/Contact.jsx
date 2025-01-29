import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <>
        <section className='cards'>
            <h1 className='titleContact'>Contact Us</h1>
            <div className='contactCards'>

                <div className="cardContact">
                    <img className='cardContactImg' src="/call-center-service_3958150.png" alt="call center logo" />
                    <h3 className='cardContactTitle'>BY PHONE</h3>
                    <p className='cardContactParagraph'>Get telephone support by signing into your account.</p>
                    <button className='cardContactBtn'>LOGIN</button>
                </div>

                <div className="cardContact">
                    <img className='cardContactImg' src="start-new-case.png" alt="new case logo" />
                    <h3 className='cardContactTitle'>START NEW CASE</h3>
                    <p className='cardContactParagraph'>Just send us your questions or concerns by starting a new case and we will give you the help you need.</p>
                    <button className='cardContactBtn'>START HERE</button>
                </div>

                <div className="cardContact">
                    <img className='cardContactImg' src="/live-chat.png" alt="live chat logo" />
                    <h3 className='cardContactTitle'>LIVE CHAT</h3>
                    <p className='cardContactParagraph'>Chat with a memeber of our in-house team.</p>
                    <button className='cardContactBtn'>START CHAT</button>
                </div>

            </div>
        </section>

        <section className="case">
            <h5 className="titleCase">Track a Case</h5>
            <p className="paragraphCase">View your thread of messages with our support team.</p>
            <form action="" className="formCase">
                <input type="numeric" placeholder="Case Number" className="inputCase"/>
                <input type="mail" placeholder="Email Address" className="inputCase"/>
                <button className='buttonCaseForm'> GO</button>
            </form>
        </section>
    </>
  )
}

export default Contact