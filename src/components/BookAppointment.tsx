import { useState } from "react";
import { Phone, User, Mail, X, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";

const BUSINESS_EMAIL = "info@newyorkheatingsi.com";

const BookAppointment = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Appointment Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email || "N/A"}\n\nService Needed:\n${service}`
    );
    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-4 w-[340px] rounded-2xl border bg-card shadow-2xl overflow-hidden"
          >
            <div className="bg-primary px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary-foreground">
                <CalendarCheck className="h-5 w-5" />
                <h3 className="font-bold text-lg">Book Appointment</h3>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">Full Name</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="name" required placeholder="John Doe" className="pl-9" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone" className="text-xs font-semibold text-muted-foreground">Phone Number</Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="phone" type="tel" required placeholder="(718) 555-0100" className="pl-9" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">Email (optional)</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="john@example.com" className="pl-9" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="service" className="text-xs font-semibold text-muted-foreground">Service Needed</Label>
                  <div className="relative mt-1">
                    <Textarea
                      id="service"
                      required
                      placeholder="e.g. AC not cooling, furnace repair..."
                      className="min-h-[70px] resize-none"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-lg"
                >
                  Send via Email
                </Button>
                <p className="text-[11px] text-muted-foreground text-center">
                  Opens your email app with the details pre-filled.
                </p>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="ml-auto flex items-center gap-2 rounded-full bg-secondary px-5 py-3.5 text-secondary-foreground font-bold shadow-2xl hover:bg-secondary/90 transition-colors"
      >
        <CalendarCheck className="h-5 w-5" />
        Book Now
      </motion.button>
    </div>
  );
};

export default BookAppointment;
