import { useState, useEffect } from "react";
import { Heart, Copy, Check, X } from "lucide-react";
import { Button } from "./Button.jsx";

const UPI_ID = "sagarkr2138@oksbi"; 
const NAME = "Sagar Kumar";

export function SupportDialog() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const upiLink = `upi://pay?pa=${UPI_ID}&pn=${NAME}&cu=INR`;

  const openUPI = () => {
    window.open(upiLink, "_self");
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const copy = async () => {
    await navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Button
        size="lg"
        onClick={() => setOpen(true)}
        className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition-smooth animate-pulse-glow"
      >
        <Heart className="mr-2 h-4 w-4 fill-current" />
        click to pay
      </Button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full sm:max-w-md rounded-2xl border border-border bg-card text-card-foreground p-6 shadow-glow relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 p-1 rounded-md hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <h2 className="text-2xl font-bold">Consider Supporting ❤️</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Pay via UPI on any Indian banking app.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between gap-2 rounded-lg border border-border bg-muted/50 p-3">
                <code className="text-sm font-mono">{UPI_ID}</code>
                <Button size="sm" variant="ghost" onClick={copy}>
                  {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
                <Button 
                onClick={openUPI}
                className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90" size="lg">
                  Open UPI app
                </Button>

                <div className="flex justify-center pt-4">
                  <img 
                  src="signature.png"
                  alt="UPI QR"
                  className="rounded-xl" />
                </div>

              <p className="text-center text-xs text-muted-foreground">
                Works with GPay, PhonePe, Paytm, BHIM and any UPI app.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
