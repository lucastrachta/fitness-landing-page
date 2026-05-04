


import "./App.css";
import { motion } from "framer-motion";





import whatsapp4 from "./assets/whatsapp4.jpg";
 
import buildmuscle2 from "./assets/buildmuscle2.jpg";
import loseweight10 from "./assets/loseweight10.jpg";
import coaching from "./assets/coaching.jpg";
import before3 from "./assets/before3.jpg";
import after9 from "./assets/after9.jpg";

function App() {

  const services = [
    {
      title: "Lose Weight Fast",
      text: "Burn fat and drop your first 3kg in 30 days",
      img: loseweight10
    },
    {
      title: "Build Muscle",
      text: "Gain strength and transform your body",
      img: buildmuscle2
    },
    {
      title: "Personal Coaching",
      text: "Work 1:1 with expert trainers",
      img: coaching
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "$20",
      text: "Gym access",
    },
    {
      name: "Pro",
      price: "$30",
      text: "Classes + nutrition",
      highlight: true
    },
    {
      name: "Elite",
      price: "$50",
      text: "Trainer + full plan"
    }
  ];

  const testimonials = [
    { text: "Lost 10kg in 3 months 🔥", name: "Lucas" },
    { text: "Best decision of my life.", name: "Mike" }
  ];

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <h2>Elite Fitness</h2>
        <a href="https://wa.me/5493705013558?text=Hi%20I%20want%20a%20page%20like%20this" className="btn">
          Join Now
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <motion.div
          className="hero-box"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Lose 3kg in 30 days or your money back</h1>
          <p>Proven training system used by 500+ clients</p>

          <div className="hero-stats">
            <span>🔥 500+ Clients</span>
            <span>⭐ 4.9 Rating</span>
            <span>🏆 5 Years Experience</span>
          </div>

          <span className="hero-badge">
            Only 5 spots available this week
          </span>

          <a href="https://wa.me/5493705013558?text=Hi%20I%20want%20a%20page%20like%20this" className="btn big">
            Start Free Trial
          </a>
        </motion.div>
      </section>


<section className="section">
  <div className="container">
    <div className="card apple center">
      <h2>Why Choose Elite Fitness?</h2>

      <ul className="benefits">
        <li>🔥 Get visible results in just weeks</li>
        <li>💪 Personalized training for your goals</li>
        <li>⚡ Stay motivated with expert coaching</li>
      </ul>
    </div>
  </div>
</section>



      {/* SERVICES */}
      <section className="section" >
        <div className="container">
          <h2>What You Get</h2>

          <div className="grid">
            {services.map((item, i) => (
              <div key={i} className="card apple">
                <img src={item.img} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="section">
        <div className="container">
          <h2>Real Transformations</h2>

          <div className="grid">
            <div className="card apple">
              <img src={before3}  />
              <p>Before</p>
            </div>

            <div className="card apple">
              <img src={after9}  />
              <p>After</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <h2>What Clients Say</h2>

          <div className="grid">
            {testimonials.map((t, i) => (
              <div key={i} className="card apple">
                <p>"{t.text}"</p>
                <span>- {t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section">
        <div className="container">
          <h2>Choose Your Plan</h2>

          <div className="grid">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`card apple ${plan.highlight ? "highlight" : ""}`}
              >
                <h3>{plan.name}</h3>
                <h2>{plan.price}/month</h2>
                <p>{plan.text}</p>

                <span className="urgency">Only 5 spots left</span>

                <a href="https://wa.me/5493705013558?text=Hi%20I%20want%20a%20page%20like%20this" className="btn">
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="section">
        <div className="container">
          <h2>100% Risk-Free</h2>
          <p>If you don’t see results in 30 days, we refund you.</p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta">
        <div className="container">
          <h2>Ready to transform your body?</h2>
          <p>Join today and get your first week free</p>

          <a href="https://wa.me/5493705013558?text=Hi%20I%20want%20a%20page%20like%20this" className="btn big">
            Claim Free Week
          </a>
        </div>
      </section>

      {/* WHATSAPP */}
      <div className="whatsapp-container">
        <div className="whatsapp-tooltip">
          Chat with us
        </div>

        <a href="https://wa.me/5493705013558?text=Hi%20I%20want%20a%20page%20like%20this" className="whatsapp-btn">
          <img src={whatsapp4} alt="WhatsApp" />
        </a>
      </div>
    </>
  );
}

export default App;







//PRIMERA VERSIÓN DE LA LANDING MEJORADA CON IA QUE LA COMENTO Y LA ULTIMA VERSION
// (SEGUNDA) ES LA QUE ESTA SIN COMENTAR Y SE VE EN VERCEL  

// import "./App.css";
// import { motion } from "framer-motion";
// import personaltrainer2 from "./assets/personaltrainer2.jpg";
// import personaltrainer3 from "./assets/personaltrainer3.jpg";
// import gym5 from "./assets/gym5.jpg";
// import gym6 from "./assets/gym6.webp";
// import gym9 from "./assets/gym9.jpg";
// import whatsapp4 from "./assets/whatsapp4.jpg";

// function App() {

//   const plans = [
//     {
//       name: "Starter",
//       price: "$20",
//       text: "Gym access + locker included"
//     },
//     {
//       name: "Pro",
//       price: "$30",
//       text: "Classes + nutrition plan",
//       highlight: true
//     },
//     {
//       name: "Elite",
//       price: "$50",
//       text: "Personal trainer + custom plan"
//     }
//   ];

//   const services = [
//     {
//       title: "Personal Training",
//       text: "Get faster results with expert guidance",
//       img: personaltrainer2
//     },
//     {
//       title: "Weight Loss",
//       text: "Lose weight and feel confident in weeks",
//       img: gym9
//     },
//     {
//       title: "Muscle Gain",
//       text: "Build muscle and transform your physique",
//       img: personaltrainer3
//     }
//   ];

//   const images = [gym5, gym6];

//   const testimonials = [
//     { text: "I lost 10kg in just 12 weeks. Best decision ever.", name: "Lucas" },
//     { text: "Results in 30 days. Trainers are amazing.", name: "Mike" }
//   ];

//   return (
//     <>
//       {/* NAV */}
//       <nav className="nav">
//         <h2>Elite Fitness</h2>
//         <a href="https://wa.me/5493705013558?text=I%20want%20to%20join%20the%20gym" className="btn">
//           Join Now
//         </a>
//       </nav>

//       {/* HERO */}
//       <section className="hero">
//         <motion.div
//           className="hero-box"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1>Lose your first 3kg in 30 days</h1>
//           <p>Join Elite Fitness and start your transformation today</p>

//           <span className="hero-badge">
//             🔥 Limited spots available this month
//           </span>

//           <motion.a
//             href="https://wa.me/5493705013558?text=I%20want%20to%20start%20my%20transformation"
//             className="btn big"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Claim Your Free Trial
//           </motion.a>
//         </motion.div>
//       </section>

//       {/* SERVICES */}
//       <motion.section
//         className="section"
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <div className="container">
//           <h2>Programs That Get Results</h2>

//           <div className="grid">
//             {services.map((item, i) => (
//               <motion.div
//                 key={i}
//                 className="card apple"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <img src={item.img} />
//                 <h3>{item.title}</h3>
//                 <p>{item.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* GYM IMAGES */}
//       <motion.section className="section">
//         <div className="container">
//           <h2>Our Gym</h2>

//           <div className="grid">
//             {images.map((img, i) => (
//               <div key={i} className="card apple">
//                 <img src={img} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* PRICING */}
//       <motion.section className="section">
//         <div className="container">
//           <h2>Choose Your Plan</h2>

//           <div className="grid">
//             {plans.map((plan, i) => (
//               <motion.div
//                 key={i}
//                 className={`card apple ${plan.highlight ? "highlight" : ""}`}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <h3>{plan.name}</h3>
//                 <h2>{plan.price}/month</h2>
//                 <p>{plan.text}</p>

//                 <span className="urgency">Only 5 spots left</span>

//                 <a
//                   href="https://wa.me/5493705013558?text=I%20want%20this%20plan"
//                   className="btn"
//                 >
//                   Start My Transformation
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* TESTIMONIALS */}
//       <motion.section className="section">
//         <div className="container">
//           <h2>Real Results</h2>

//           <div className="grid">
//             {testimonials.map((item, i) => (
//               <div key={i} className="card apple">
//                 <p>"{item.text}"</p>
//                 <span>- {item.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* CTA FINAL */}
//       <section className="cta">
//         <div className="container">
//           <h2>Start your transformation today</h2>
//           <p>Join now and get your first week free</p>

//           <a
//             href="https://wa.me/5493705013558?text=I%20want%20to%20start"
//             className="btn big"
//           >
//             Claim Free Week
//           </a>
//         </div>
//       </section>

//       {/* WHATSAPP FLOAT */}
//       <div className="whatsapp-container">
//         <div className="whatsapp-tooltip">
//           Chat with us on WhatsApp
//         </div>

//         <a
//           href="https://wa.me/5493705013558"
//           className="whatsapp-btn"
//         >
//           <img src={whatsapp4} alt="WhatsApp" />
//         </a>
//       </div>
//     </>
//   );
// }

// export default App;