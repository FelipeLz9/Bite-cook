import React from "react";
import "./page.css";
import Footer from '@/components/molecules/Footer/Footer';
import { Header } from '@/components/molecules/Header/Header';


const TeamPage: React.FC = () => {
  return (
    <div className="team-page">
        <Header />
      <div className="team-page">
  <section className="hero">
    <div className="hero-content">
      <h1>
        Nosotros estamos en la mision de buscar hacer la vida más fácil y rapida para todos.
      </h1>
      <p>
        Nuestro equipo está construyendo el futuro de las finanzas, un producto innovador a la vez.
      </p>
      <button className="learn-more">Learn more</button>
    </div>
    
  </section>
</div>


      <section className="team">
        <h2>Meet the team</h2>
        <div className="team-members">
          <div className="team-member">
            <img
                src="https://scontent.feoh9-1.fna.fbcdn.net/v/t39.30808-6/434129355_7382412681850788_3419909355700961027_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeErmMBngTTVpceOp99HGn6MHkqZnMA2EyYeSpmcwDYTJtWNiZNqNzz8RuHQIddyDLOvSRYi61MV91MlQJRrWEL8&_nc_ohc=fd2Z4ZFNT_sQ7kNvgFod6qM&_nc_zt=23&_nc_ht=scontent.feoh9-1.fna&_nc_gid=AW9iw7LKhzWxJRn5rpPAWKm&oh=00_AYBitbAyECrpMDooAei4DrwuJNl6fd-PlYJP822vrGwpqg&oe=67543228"
                alt="Pablo Ocampo"
                className="member-photo"
            />
            <h3>Pablo Ocampo</h3>
            <p>CEO, Co-founder</p>
            <div className="social-links">
              <button className="linkedin">LinkedIn</button>
              <button className="twitter">Twitter</button>
            </div>
          </div>
          <div className="team-member">
            <img
              src="https://scontent.feoh9-1.fna.fbcdn.net/v/t39.30808-6/448582626_8173534236003992_972960421344748514_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE0Lh0KykMPLWWj6edP4KooV1YTJA2oxONXVhMkDajE48IkoQiREdnx3R34ZHYpu0mtebXRE3eivYJXvbXqotF2&_nc_ohc=3YIWIXnBzVUQ7kNvgHJQpR5&_nc_zt=23&_nc_ht=scontent.feoh9-1.fna&_nc_gid=AQtF7Csa0-uLdHbznO_6rlQ&oh=00_AYDOkjdifmvEIpe2AeOXPhSf0GIreunXdoeI-ZFx-R0yqA&oe=67542699"
              alt="Felipe Lopez"
              className="member-photo"
            />
            <h3>Felipe López</h3>
            <p>CTO, Co-founder</p>
            <div className="social-links">
              <button className="linkedin">LinkedIn</button>
              <button className="twitter">Twitter</button>
            </div>
          </div>
        </div>
      </section>

      <section className="story">
        <h2>Our story</h2>
        <ul>
          <li>
            <span>2024</span> We launched our first product
          </li>
          <li>
            <span>2024</span> We raised our seed round
          </li>
          <li>
            <span>2024</span> We incorporated and started building our first
            product
          </li>
        </ul>
      </section>
        <Footer />
    </div>
  );
};

export default TeamPage;
