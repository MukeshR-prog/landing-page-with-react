import React from "react";
import './land.css'
const Land = () => {
    return (
        <div className="main">
             <div className="land">
                <img className="worldi" src="https://png.pngtree.com/png-clipart/20200722/original/pngtree-world-tour-travel-logo-template-png-image_5059405.jpg" width={150}></img>
                 <h1>Welcome to World of Tour Travel Website</h1>
             </div>
             <nav>
    <a href="#">HOME</a>
    <a href="#">OFFERS</a>
    <a href="#">DESTINATIONS</a>
    <a href="#">ABOUT US</a>
    <a href="#">CONTACT</a>
    <a href="#">HELP</a>
  </nav>
  <img className="maini" src="https://www.careinsurance.com/upload_master/media/posts/December2019/nqnHZDEg8JmxEKUg5MsB.jpg"></img>
  <br></br><br></br>
  <div className="title">
      <img className="offeri" src="https://rukminim2.flixcart.com/fk-p-flap/1100/600/image/241549d1bb35e4d7.jpg?q=90" ></img>
    <h2>Featured Packages</h2>
      <h1>Explore Exciting Destinations</h1>
      <p>Discover the world with our amazing travel packages.</p>
      <p>Book your next adventure now!</p></div>

      <div className="package">
      <img className="rome" src="https://www.interrail.eu/content/dam/images/interrail/shutterstock_390232801_1.adaptive.767.1643277100494.jpg"></img>
     <h1><i className="red">Cultural Exploration in Rome</i></h1>
      <i><p >Immerse yourself in the rich history and culture of Rome with our guided tour. Visit iconic landmarks such as the Colosseum, Vatican City, and the Trevi Fountain.</p>
      <p><strong>Price:</strong> Rs.<del className="del">15000</del><ins className="ins" > 10000</ins> per person</p></i><br></br>
      <input type="button" class="but1" value="Book Now" id="but1"></input>
    </div><br></br>

    <div className="packages">
      <img className="romes" src="https://gskworldtravels.com/wp-content/uploads/2023/07/maldives.jpg" ></img>
      <i> <h1 className="blue">Beach Paradise in Maldives</h1>
      <p>Escape to the pristine beaches of the Maldives and indulge in luxury at our exclusive resort. Enjoy crystal-clear waters, white sandy beaches, and world-class amenities.</p>
      <p><strong>Price:</strong> Rs.<del className="del">10000</del>  <ins className="ins"> 8000</ins> per person</p></i><br></br>
      <input type="button" class="but1" value="Book Now" id="but1"></input>
    </div><br></br>

    <div className="package">
      <img className="rome" src="https://rising-pakistan.com/wp-content/uploads/2022/11/The-best-city-to-visit-in-France-.jpg"></img>
     <h1><i className="red">Discover Paris, France</i></h1>
      <i><p >Paris, the City of Light, is a timeless destination known for its iconic landmarks, exquisite cuisine, and rich culture. Explore the romantic streets of Montmartre, admire the art at the Louvre Museum, and marvel at the beauty of the Eiffel Tower.</p>
      <p><strong>Price:</strong> Rs.<del className="del">30000</del><ins className="ins" > 25000</ins> per person</p></i><br></br>
      <input type="button" class="but1" value="Book Now" id="but1"></input>
    </div><br></br>

    <div className="packages">
      <img className="romes" src="https://i.pinimg.com/736x/02/d4/f8/02d4f81faee57798c4be490f6d394f96.jpg" ></img>
      <i> <h1 className="blue">Explore the Wonders of Egypt</h1>
      <p>Journey to the land of pharaohs and pyramids and uncover the mysteries of ancient Egypt. Cruise along the Nile River, marvel at the Great Sphinx of Giza, and explore the majestic temples of Luxor and Karnak.</p>
      <p><strong>Price:</strong> Rs.<del className="del">40000</del>  <ins className="ins">33000</ins> per person</p></i><br></br>
      <input type="button" class="but1" value="Book Now" id="but1"></input>
    </div><br></br>

    <div className ="contact" >
    <h1>Contact Us</h1>
    <p>Have questions or need assistance? Contact us today!</p>
      <div className="form">
      <label for="name">Name:</label><br></br>
      <input type="text" id="name" name="name" required></input><br></br><br></br>
      <label for="email">Email:</label><br></br>
      <input type="email" id="email" name="email" required></input><br></br><br></br>
      <label for="message">Message:</label><br></br>
      <textarea id="message" name="message" rows="4" required></textarea><br></br><br></br>
      <button className="submit" type="submit">Submit</button>
      </div>
  </div>
  <footer>
    <p>&copy; World Tour Travel Website. All rights reserved.</p>
    <p>worldtourtravel@gmail.com</p>
  </footer>



        </div>
       
        );
}

export default Land;