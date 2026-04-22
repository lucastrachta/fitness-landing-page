import "./App.css";
import { motion } from "framer-motion";
import personaltrainer2 from "./assets/personaltrainer2.jpg";
import personaltrainer3 from "./assets/personaltrainer3.jpg";
import gym5 from "./assets/gym5.jpg";
import gym6 from "./assets/gym6.webp";
import gym9 from "./assets/gym9.jpg";
import whatsapp4 from "./assets/whatsapp4.jpg";

function App() {

const plans = [
  {
    name: "Basic",
    price: "$20",
    text: "Access to gym equipment"
  },
  {
    name: "Standard",
    price: "$30",
    text: "Gym + group classes"
  },
  {
    name: "Premium",
    price: "$50",
    text: "All access + personal trainer"
  }
];

  const services = [
    {
      title: "Personal Training",
      text: "Train with professional coaches",
      img: personaltrainer2
    },
    {
      title: "Weight Loss",
      text: "Burn fat and get in shape fast",
      img: gym9
    },
    {
      title: "Muscle Gain",
      text: "Build strength and muscle effectively",
      img:  personaltrainer3
    }
  ];

  const images = [
  
    gym5,
    gym6,
  
  ];

  const testimonials = [
    { text: "I lost 10kg in 3 months!", name: "Lucas" },
    { text: "Best gym in the city, amazing trainers.", name: "Mike" }
  ];

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <h2>Elite Fitness</h2>
        <a href="https://wa.me/5493705013558?text=Hello%20I%20want%20to%20improve%20my%20website" className="btn">Join Now</a>
      </nav>

  

        {/* HERO */}
        <section className="hero">
        
          <motion.div
            className="hero-box"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Transform your body today</h1>
            <p>Train hard. Get results. Feel unstoppable.</p>

            <motion.a
              href="https://wa.me/5493705013558?text=Hello%20I%20want%20to%20improve%20my%20website"
              className="btn big"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Now
            </motion.a>
          </motion.div>
       
        </section>
 
        {/* SERVICES */}
        <motion.section
          className="section"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container">
          <h2>Our Programs</h2>

          <div className="grid">
            {services.map((item, i) => (
              <motion.div
                key={i}
                className="card apple"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <img src={item.img} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
          </div>
        </motion.section>

        {/* IMAGES */}
        <motion.section
          className="section"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container">
          <h2>Our Gym</h2>

          <div className="grid">
            {images.map((img, i) => (
              <motion.div
                key={i}
                className="card apple"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <img src={img} />
              </motion.div>
            ))}
          </div>
          </div>
        </motion.section>



<motion.section
  className="section"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className="container">
  <h2>Membership Plans</h2>

  <div className="grid">
    {plans.map((plan, i) => (
      <motion.div
        key={i}
        className="card apple"
        whileHover={{ scale: 1.05 }}
      >
        <h3>{plan.name}</h3>
        <h2>{plan.price}/month</h2>
        <p>{plan.text}</p>

        <a href=" https://wa.me/5493705013558?text=Hi%2C%20can%20you%20build%20me%20a%20site%20like%20this%3F" className="btn">
          Join Now
        </a>
      </motion.div>
    ))}
  </div>
  </div>
</motion.section>




        {/* TESTIMONIALS */}
        <motion.section
          className="section"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container">
          <h2>What Our Clients Say</h2>

          <div className="grid">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                className="card apple"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <p>"{item.text}"</p>
                <span>- {item.name}</span>
              </motion.div>
            ))}
          </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="cta"
          id="contact"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container">
          <h2>Ready to start your transformation?</h2>

          <motion.a
            href=" https://wa.me/5493705013558?text=Hello%20I%20want%20to%20start%20a%20project%20with%20you"
            className="btn big"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Now
          </motion.a>
          </div>
        </motion.section>

         {/* WHATSAPP */}
      {/* <a href="https://wa.me/5491123456789" className="whatsapp">
  <img src={whatsapp4} alt="WhatsApp"className="whatsapp-icon" /> 
    
      </a>  
      */}


<div className="whatsapp-container">
        
        <motion.div
          className="whatsapp-tooltip"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
      Chat with us on WhatsApp
        </motion.div>

        <motion.a
          href="https://wa.me/5493705013558?text=Hello%20I%20want%20to%20start%20a%20project%20with%20you"
          className="whatsapp-btn"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2
          }}
          whileHover={{ scale: 1.15 }}
        >
          {/* aqui abajo va la imagen y puedo poner texto tambien */}
          <img src={whatsapp4} alt="WhatsApp" />
        </motion.a>

      </div>



    </>
  );
}

export default App;