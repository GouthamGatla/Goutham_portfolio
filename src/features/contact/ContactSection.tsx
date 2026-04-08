import { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import { FadeIn } from "@/shared/components/animations/FadeIn";
import { Button } from "@/shared/components/ui/Button";
import { Card, CardContent } from "@/shared/components/ui/Card";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    // IMPORTANT: Replace with your actual Web3Forms Access Key
    formData.append("access_key", "3eaf096b-93cd-4c27-b5de-8ccac204ca21");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        console.error("Error submitting form", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Interested in collaborating, or just want to discuss building scalable frontends? Drop me a line.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <FadeIn direction="right">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground">Get in touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a question or an opportunity, my inbox is always open. Let's make an impact together.
              </p>

              <div className="space-y-6 mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                    <a href="mailto:gouthamgatla888@gmail.com" className="text-lg font-semibold text-foreground hover:text-indigo-400 transition-colors interactive">
                      gouthamgatla888@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                    <p className="text-lg font-semibold text-foreground">
                      Hyderabad, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="left" delay={0.2}>
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-8">I'll get back to you as soon as possible.</p>
                    <Button onClick={() => setSubmitted(false)} variant="outline" className="interactive">
                      Send another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                        <input
                          id="name"
                          name="name"
                          required
                          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all interactive"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all interactive"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                      <input
                        id="subject"
                        name="subject"
                        required
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all interactive"
                        placeholder="Opportunity / Inquiry"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all interactive resize-none"
                        placeholder="Tell me about your project or role..."
                      />
                    </div>
                    <Button type="submit" variant="premium" className="w-full interactive flex justify-center gap-2 h-12 text-lg disabled:opacity-70" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"} <Send className="w-5 h-5" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
