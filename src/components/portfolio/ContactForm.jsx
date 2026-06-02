import { useState } from "react";
import { Send } from "lucide-react";
import { supabase } from "../../lib/supabase";

const initial = { name: "", mobile: "", email: "", description: "" };

function validate(v) {
  const errs = {};
  if (!v.name.trim()) errs.name = "Name is required";
  if (!/^[+\d\s-]{7,20}$/.test(v.mobile.trim()))
    errs.mobile = "Enter a valid mobile number";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    errs.email = "Invalid email";
  if (!v.description.trim()) errs.description = "Description is required";
  return errs;
}

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const update = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    setStatus("");
    const { error } = await supabase
      .from("contact_submissions")
      .insert([values]);
    if (error) {
      setStatus("Could not send your message. Please try again.");
      setSubmitting(false);
      return;
    }
    setStatus("Thanks! Your message has been saved.");
    setValues(initial);
    setSubmitting(false);
  };

  return (
    <section id="contact-form" className="relative py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Drop me a <span className="text-gradient">Message</span>
          </h2>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-2xl border border-border bg-card/60 backdrop-blur-md p-6 md:p-8 shadow-elegant space-y-5"
        >
          <div className="space-y-2">
            <label htmlFor="cf-name" className="text-sm font-medium">Name</label>
            <input
              id="cf-name"
              value={values.name}
              onChange={update("name")}
              placeholder="Full name"
              maxLength={100}
              className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="cf-mobile" className="text-sm font-medium">Mobile number</label>
              <input
                id="cf-mobile"
                type="tel"
                value={values.mobile}
                onChange={update("mobile")}
                placeholder="+91-XXXXXXXXXX"
                maxLength={20}
                className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
              />
              {errors.mobile && <p className="text-xs text-destructive">{errors.mobile}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="cf-email" className="text-sm font-medium">Email</label>
              <input
                id="cf-email"
                type="email"
                value={values.email}
                onChange={update("email")}
                placeholder="you@email.com"
                maxLength={255}
                className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="cf-description" className="text-sm font-medium">Description</label>
            <textarea
              id="cf-description"
              value={values.description}
              onChange={update("description")}
              placeholder="Fill Free to Share Your Thoughts"
              rows={5}
              maxLength={1000}
              className="w-full rounded-md border border-input bg-background p-3 text-sm"
            />
            {errors.description && (
              <p className="text-xs text-destructive">{errors.description}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 h-10 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {submitting ? "Sending…" : "Submit"}
          </button>

          {status && (
            <p className="text-sm text-center text-muted-foreground">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
