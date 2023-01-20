import React from "react"
import Contact from "./components/Contact"



export default function App() {
    return (
        <div className="contacts">
        
            <Contact
            name = "Mr. Whiskerson"
            img = "https://www.freeiconspng.com/thumbs/cat-png/cat-png-17.png"
            phone = "(212) 555-1234"
            mail = "mr.whiskaz@catnap.meow"
            />

            <Contact
            name ="Fluffykins"
            img = "https://www.freeiconspng.com/thumbs/cat-png/cat-png-20.png"
            phone = "(212) 555-2345"
            mail = "fluff@me.com"
            />

            <Contact 
            name = "Felix"
            img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk11dl0X-I3mrM0FTCJ5ZspTOKKh6FDx4LIPQoObD8s-zFqk54VFaivX40ASn9DQIGSHg&usqp=CAU"
            phone = "(212) 555-4567"
            mail = "thecat@hotmail.com"
            />

            <Contact 
            name = "Pumpkin"
            img = "https://www.freepnglogos.com/uploads/cat-png/brown-cat-download-image-12.png"
            phone = "(0800) CAT KING"
            mail = "pumpkin@scrimba.com"
            />
            
            {/* <div className="contact-card">
                <img src="https://www.freeiconspng.com/thumbs/cat-png/cat-png-20.png"/>
                <h3>Fluffykins</h3>
                <div className="info-group">
                    <img src="https://static.vecteezy.com/system/resources/previews/005/043/127/original/a-phone-icon-in-a-round-circle-free-vector.jpg" />
                    <p>(212) 555-2345</p>
                </div>
                <div className="info-group">
                    <img src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png" />
                    <p>fluff@me.com</p>
                </div>
            </div>
             */}
            {/* <div className="contact-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk11dl0X-I3mrM0FTCJ5ZspTOKKh6FDx4LIPQoObD8s-zFqk54VFaivX40ASn9DQIGSHg&usqp=CAU"/>
                <h3>Felix</h3>
                <div className="info-group">
                    <img src="https://static.vecteezy.com/system/resources/previews/005/043/127/original/a-phone-icon-in-a-round-circle-free-vector.jpg" />
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <img src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png" />
                    <p>thecat@hotmail.com</p>
                </div>
            </div>
             */}
            {/* <div className="contact-card">
                <img src="https://www.freepnglogos.com/uploads/cat-png/brown-cat-download-image-12.png"/>
                <h3>Pumpkin</h3>
                <div className="info-group">
                    <img src="https://static.vecteezy.com/system/resources/previews/005/043/127/original/a-phone-icon-in-a-round-circle-free-vector.jpg" />
                    <p>(0800) CAT KING</p>
                </div>
                <div className="info-group">
                    <img src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png" />
                    <p>pumpkin@scrimba.com</p>
                </div>
            </div>
             */}
        </div>
    )
}

