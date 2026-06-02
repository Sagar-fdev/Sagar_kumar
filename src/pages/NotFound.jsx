import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <Link to="/" className="text-primary mt-4 inline-block">← Back home</Link>
      </div>
    </div>
  );
}
