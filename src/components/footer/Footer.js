import React, { Component } from 'react'
import '../../css/Footer.scss'
class Footer extends Component {
  
  render() {
    return (
    
      <footer className="footer">
          <div className="text">
            @Khaled Nouri 2020 <br/>
            Reproduction à des fins de commerciales interdite.<br/>
            Merci de respecter le travail des auteurs en faisant un lien ver le contenu original !
          </div>
          <div className="contacts">
              Contacts: 
            <div className="email">
            <a href="mailto:khalednouri25@gmail.com">khalednouri25@gmail.com</a>  
            </div>
            <div className="phone">
              514 594 43 54  
            </div>
          </div>
      </footer>
    )
  }
}

export default Footer