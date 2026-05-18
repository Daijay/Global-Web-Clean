import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Global Bridge Learning Initiative</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>
      <div className="min-h-[60vh] w-full flex items-center justify-center bg-background">
        <Card className="w-full max-w-md mx-4 shadow-sm border-muted">
          <CardContent className="pt-8 pb-8 text-center space-y-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-destructive/10 text-destructive rounded-full flex items-center justify-center">
                <AlertCircle className="h-8 w-8" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold font-serif mb-2 text-foreground">404</h1>
              <h2 className="text-xl font-medium text-foreground">Page Not Found</h2>
            </div>
            <p className="text-muted-foreground text-sm">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <div className="pt-4">
              <Link href="/" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90 hover-elevate">
                Return Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
