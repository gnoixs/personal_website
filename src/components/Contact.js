import Sns from "./Sns";

export default function Contact() {
    return (
        <section id="contact">
            <h1 className="title">Contact</h1>
            <main className="main">
                <p id="contact-p">Thanks for stopping by! If you would like to get in touch, there are a few ways you can reach out. You can fill out the following form, send a text, or connect with me on social media. I'm always happy to chat and will do my best to back to you as soon as possible.</p>
                <div className="form-contact">
                    <form action="https://formspree.io/f/xnqygoqy" method="POST">
                        <div className="row">
                            <input type="text" name="name" placeholder="Name" required/>
                            <input type="email" name="email" placeholder="Email" required/>
                        </div>
                        <input type="text" name="subject" placeholder="Subject"/>
                        <textarea name="message" cols="60" rows="5" placeholder="Message" required></textarea>
                        <input type="submit" value="Send Message"/>
                    </form>
                    <div id="contact-other">
                        <div className="contact-other">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                            <p>Text me at <span>(+1) 763 381-2113</span></p>
                        </div>
                        <div className="contact-other">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                            <p>Email me at <span></span><a href="mailto:samanthaxiong040802@gmail.com" target="_blank" rel="noreferrer">samanthaxiong040802@gmail.com</a></p>
                        </div>
                        <div className="contact-other">
                            <Sns />
                            <p>Connect on social media</p>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}