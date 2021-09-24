import React from "react"
import socialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a href={link.url} className="social-link" key={link.id}>
                {link.icon}
              </a>
            )
          })}
        </div>
        <h4>Copyright &copy; {new Date().getFullYear()}</h4>
      </div>
    </footer>
  )
}

export default Footer
