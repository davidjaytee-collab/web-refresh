import { Phone, Clock, Shield, Wrench, Wind, Thermometer, Flame, CheckCircle, Facebook, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-hvac.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const services = [
  { icon: Wrench, title: "Repairs", desc: "All makes & models" },
  { icon: Wind, title: "AC Service", desc: "Installation & repair" },
  { icon: Flame, title: "Heating", desc: "Furnace & boiler work" },
  { icon: Thermometer, title: "Freon Leaks", desc: "Leak detection specialists" },
  { icon: Shield, title: "Maintenance", desc: "Preventive agreements" },
  { icon: Clock, title: "24/7 Emergency", desc: "Always available" },
];

const servicesList = [
  "Repairs on all makes & models",
  "Motor Repair & Replacement",
  "Compressor Repair & Replacement",
  "Furnace Repair & Replacement",
  "Freon Leak Specialists",
  "Duct System Repair & Replacement",
  "Service & Maintenance Agreements",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" />
              EPA Certified · Licensed · Bonded
            </span>
            <span className="hidden sm:inline text-primary-foreground/70">H.I.C. License #1256532</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              Staten Island, NY
            </span>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-secondary transition-colors"
            >
              <Facebook className="h-3.5 w-3.5" />
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-primary">
              NY Heating & AC
            </h2>
            <p className="text-xs text-muted-foreground">of Staten Island</p>
          </div>
          <a href="tel:7183567100">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base gap-2 px-6 shadow-lg">
              <Phone className="h-4 w-4" />
              718-356-7100
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="HVAC service" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-36">
          <motion.div
            className="max-w-2xl text-primary-foreground"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-secondary/90 px-4 py-1.5 text-sm font-semibold text-secondary-foreground mb-6">
              <Clock className="h-4 w-4" />
              24/7 Emergency Service
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Your Comfort Is{" "}
              <span className="text-secondary">Our Mission</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-xl">
              Tired of being cold in the winter and warm in the summer? New York Heating & Air Conditioning keeps Staten Island homes comfortable year-round.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a href="tel:7183567100">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg gap-2 px-8 shadow-xl">
                  <Phone className="h-5 w-5" />
                  Call for Free Estimate
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              What We <span className="text-secondary">Do</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Sales, service & installations — fast and reliable, exclusively for Staten Island.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i}
                variants={fadeUp}
              >
                <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-transparent hover:border-secondary/30 bg-card">
                  <CardContent className="p-8 flex items-start gap-5">
                    <div className="rounded-xl bg-accent p-3 text-primary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-1">{s.title}</h3>
                      <p className="text-muted-foreground">{s.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Full Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                Heating & AC Services
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-8">
                Our mission is to find a solution that keeps you comfortable in your home year-round. We provide quality service and treat every customer with courtesy and respect.
              </motion.p>
              <div className="space-y-3">
                {servicesList.map((item, i) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    custom={i}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <Card className="bg-primary text-primary-foreground p-10 rounded-2xl shadow-2xl border-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-full bg-secondary p-3">
                    <Clock className="h-7 w-7 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-extrabold">24/7 Emergency</h3>
                </div>
                <p className="text-primary-foreground/80 text-lg mb-6">
                  Emergencies don't wait for business hours — neither do we. Speak directly to the owner at any time, day or night.
                </p>
                <a href="tel:7183567100">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg gap-2 w-full shadow-lg">
                    <Phone className="h-5 w-5" />
                    718-356-7100
                  </Button>
                </a>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              Why <span className="text-secondary">Choose Us</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Licensed & Bonded", desc: "EPA Certified with full licensing" },
              { icon: MapPin, title: "Local to SI", desc: "Exclusively serving Staten Island" },
              { icon: Clock, title: "24/7 Available", desc: "Speak to the owner anytime" },
              { icon: Wrench, title: "All Brands", desc: "We service every make & model" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i}
                variants={fadeUp}
              >
                <Card className="text-center p-8 hover:shadow-lg transition-shadow bg-card border-0 shadow-sm">
                  <div className="mx-auto rounded-full bg-secondary/10 p-4 w-fit mb-4">
                    <item.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
              Call Today for a Free Estimate
            </motion.h2>
            <motion.p variants={fadeUp} className="text-primary-foreground/75 text-lg mb-8 max-w-lg mx-auto">
              Whether you need a system replacement, emergency repair, or routine maintenance — we're ready to help.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a href="tel:7183567100">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-xl gap-3 px-10 py-6 shadow-2xl">
                  <Phone className="h-6 w-6" />
                  718-356-7100
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-extrabold text-lg mb-3">NY Heating & AC</h3>
              <p className="text-background/60 text-sm">
                EPA Certified · Licensed · Bonded<br />
                H.I.C. License #1256532
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Contact</h4>
              <p className="text-background/60 text-sm">
                Servicing Staten Island, New York<br />
                <a href="tel:7183567100" className="text-secondary hover:underline font-semibold">718-356-7100</a>
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Payment</h4>
              <p className="text-background/60 text-sm">
                We accept Cash & Check
              </p>
            </div>
          </div>
          <div className="border-t border-background/10 mt-8 pt-8 text-center text-background/40 text-sm">
            © {new Date().getFullYear()} New York Heating & Air Conditioning. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
