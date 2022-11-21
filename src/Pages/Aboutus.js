import React from 'react'
import {Link} from 'react-router-dom'
import './about-styles.css'
/**
* @author
* @function Aboutus
**/

export const Aboutus = (props) => {
  return(
            <>
       


        <div className="wrapper">
            <div className="outer">
                            <div className="content animated fadeInLeft">
                                <span className="bg animated fadeInDown">Looking LIA</span>
                                <h1>Biruk<br/> Mengistu</h1>
                                 <p>Frontend developer student in EC-Utbliding.</p>
                                 <p>Interested in Web technologies like VueJs , ReactJs, Nodejs, etc.</p>
                                <div className="button">
                                    <Link to="/home">Linkden</Link><Link className="cart-btn" to="/home"><i className="cart-icon ion-bag"></i>Github</Link>
                                </div>
                                
                            </div>
                            <img alt='profile' src="https://media-exp1.licdn.com/dms/image/C4E03AQGTtjMf1wofUA/profile-displayphoto-shrink_200_200/0/1625488513946?e=1672272000&v=beta&t=EFJ4pirSjoxn-za0TaFxOzScZxjKlqB6-Cb2nSNqr7o" width="200px" className="animated fadeInRight" />
                        </div>
                      
                    </div>
                
            </>
   )

 }