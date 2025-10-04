import WaitlistForm from "@/components/WaitlistForm";
import FloatingMerch from "@/components/FloatingMerch";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background font-nohemi overflow-hidden">
      {/* Floating merchandise background */}
      <FloatingMerch />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="w-full py-8 px-6 animate-fade-in">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              NOLABELS
            </h1>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Main message */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
                Beyond
                <br />
                Definition
              </h2>
              <p className="text-lg md:text-xl font-medium text-muted-foreground max-w-2xl mx-auto tracking-wide">
                A movement transcending boundaries.
                <br />
                No limits. No categories. Just you.
              </p>
            </div>

            {/* Waitlist form */}
            <div className="pt-8" style={{ animationDelay: '0.4s' }}>
              <WaitlistForm />
            </div>

            {/* Subtext */}
            <p className="text-sm font-medium text-muted-foreground animate-fade-in tracking-widest uppercase" style={{ animationDelay: '0.6s' }}>
              Launching Soon
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full py-8 px-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-muted-foreground">
            <p>© 2025 NOLABELS. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-foreground transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
