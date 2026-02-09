import { useState } from "react";
import { Calendar, Phone, User, Mail, X, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "@/hooks/use-toast";

const BookAppointment = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Appointment Requested!",
      description: "We'll call you back shortly to confirm your appointment.",
    });
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
    }, 2500);
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
            {/* Header */}
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

            {/* Body */}
            <div className="p-5">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-6"
                >
                  <div className="mx-auto rounded-full bg-secondary/10 p-4 w-fit mb-4">
                    <CalendarCheck className="h-8 w-8 text-secondary" />
                  </div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Request Sent!</h4>
                  <p className="text-muted-foreground text-sm">We'll contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">
                      Full Name
                    </Label>
                    <div className="relative mt-1">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="name" required placeholder="John Doe" className="pl-9" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-xs font-semibold text-muted-foreground">
                      Phone Number
                    </Label>
                    <div className="relative mt-1">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="phone" type="tel" required placeholder="(718) 555-0100" className="pl-9" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-xs font-semibold text-muted-foreground">
                      Email (optional)
                    </Label>
                    <div className="relative mt-1">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="email" type="email" placeholder="john@example.com" className="pl-9" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="service" className="text-xs font-semibold text-muted-foreground">
                      Service Needed
                    </Label>
                    <div className="relative mt-1">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Textarea
                        id="service"
                        required
                        placeholder="e.g. AC not cooling, furnace repair..."
                        className="pl-9 min-h-[70px] resize-none"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-lg"
                  >
                    Request Appointment
                  </Button>
                  <p className="text-[11px] text-muted-foreground text-center">
                    We'll call you back to confirm a time.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
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
