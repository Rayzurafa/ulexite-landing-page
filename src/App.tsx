import { ArrowRight, Sparkles, MessageCircle, Lightbulb, Handshake, ArrowRight as ArrowForward, Bot, FileText, TrendingUp, Search, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [openSolution, setOpenSolution] = useState<number>(0);
  const [openStoryModal, setOpenStoryModal] = useState<number | null>(null);
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState<boolean>(false);
  const [showTermsOfService, setShowTermsOfService] = useState<boolean>(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{ date: string; time: string; email: string }>({ date: '', time: '', email: '' });
  
  // Scroll to top when modals open
  useEffect(() => {
    if (showPrivacyPolicy || showTermsOfService) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showPrivacyPolicy, showTermsOfService]);
  
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    fullName: '',
    companyName: '',
    email: '',
    message: '',
    agreeToPolicy: false
  });

  const getNextDays = () => {
    const days = [];
    const today = new Date();
    let currentDay = 1;

    while (days.length < 9) {
      const date = new Date(today);
      date.setDate(today.getDate() + currentDay);

      if (date.getDay() !== 0) {
        days.push(date);
      }

      currentDay++;
    }

    return days;
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const formatDateValue = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const stories = [
    {
      id: 0,
      icon: MessageCircle,
      category: "Customer Support AI",
      title: "Support That Never Stops Working",
      name: "Ryan's Home Services",
      story: "Every morning started the same way for Ryan. Fifteen missed calls before his coffee got cold. The same questions repeating: What's your availability? How much for a water heater? Do you work weekends? His team of eighteen was drowning in inquiries while actual emergencies waited in the queue.\n\nHe took six months of real customer conversations and fed them into an AI system. Not to replace his team, but to handle what didn't need them. The change was immediate. Customers got responses at 2 AM, on holidays, during lunch rushes. The AI understood when someone was genuinely frustrated versus just curious, and passed complex issues to the team with full context.\n\nThree months in, call volume dropped 60%. Response time went from hours to seconds. But the real shift was in his team. They stopped firefighting and had space to actually solve problems. Support became this quiet, reliable thing running in the background, always on, never burning anyone out."
    },
    {
      id: 1,
      icon: TrendingUp,
      category: "Sales & Marketing AI",
      title: "More Bookings, Less Chasing Clients",
      name: "Sara's Aesthetic Clinic",
      story: "Sara's aesthetic clinic had great procedures and glowing reviews, but bookings were a struggle. People would inquire, express interest, then vanish. Her team would follow up with generic emails and voicemails. Most never responded. The problem wasn't the service, it was that awkward gap between curiosity and commitment where potential clients just drifted away.\n\nThe AI system she implemented just paid attention. When someone inquired about a treatment, it noted their concerns and budget signals, then started a personalized conversation. Not robotic templates, actual helpful content. If someone seemed worried about results looking 'fake,' they'd get real patient examples and consultation details. Abandoned bookings got gentle nudges with answers timed perfectly.\n\nBooking rates doubled in three months. But more importantly, the people who showed up were ready. They'd been educated and their concerns addressed. Sara's team stopped chasing leads and started having real conversations with people who actually wanted to be there."
    },
    {
      id: 2,
      icon: FileText,
      category: "Document Processing AI",
      title: "Paperwork Processed While You Sleep",
      name: "Marco's Construction Firm",
      story: "Marco loved building things. He didn't love the mountains of paperwork. Contracts, change orders, invoices, permits, each project generated hundreds of pages. His team spent more time shuffling paper than managing construction. A single invoice could take twenty minutes to process. Mistakes were constant: wrong figures, missing signatures, overlooked deadlines.\n\nThe AI document processor changed everything. He fed it examples of every document type, showed it what mattered, and let it learn. Contracts triggered automatic data extraction. Invoices were validated against purchase orders. Change orders were cross-checked. Permit documents organized by deadline. What used to take hours now took seconds.\n\nThe backlog vanished in two weeks. Errors dropped to near zero. When auditors showed up, everything was already structured and searchable, turning a week-long nightmare into an afternoon. Projects moved faster because paperwork stopped being the bottleneck. Growth finally felt manageable instead of terrifying."
    },
    {
      id: 3,
      icon: Search,
      category: "Knowledge Base AI",
      title: "Every Answer at Your Fingertips",
      name: "Gianni's Logistics Firm",
      story: "Gianni's logistics company had fifteen years of accumulated knowledge scattered everywhere. Shipping protocols in old manuals, client requirements in email threads, carrier contacts in spreadsheets, compliance rules in people's memories. When staff needed answers, they'd walk around asking for an hour or make costly guesses. New hires took months to learn the ropes.\n\nThe AI knowledge base connected everything into one intelligent system. Shipping protocols, email histories, spreadsheets, regulatory documents, recorded meetings, all searchable in plain language. Now when someone needed to know something, they just asked: 'What's our fastest option for temperature-sensitive shipment to Munich?' Instant answer with sources.\n\nShipping errors dropped 40% in the first month. New hires went from six months to three weeks to get productive. The company's fifteen years of expertise finally worked for everyone, not just the veterans who'd been there since the beginning."
    }
  ];

  const solutions = [
    {
      id: 0,
      icon: MessageCircle,
      title: "Customer Support",
      desc: "Handle customer inquiries instantly with AI that understands context and sentiment. Available 24/7, it resolves common issues automatically across voice and chat channels and escalates complex cases to your team only when human expertise is truly needed."
    },
    {
      id: 1,
      icon: TrendingUp,
      title: "Sales & Marketing",
      desc: "Qualify leads, personalize outreach, and automate follow-ups at scale. AI handles repetitive marketing tasks and keeps your pipeline full of high-quality prospects. Your team focuses on closing deals, not chasing cold leads."
    },
    {
      id: 2,
      icon: FileText,
      title: "Document Processing",
      desc: "Extract data from invoices, contracts, forms, and receipts in seconds. AI reads, understands, and organizes information automatically. Eliminate manual data entry and reduce human error in your document workflows completely."
    },
    {
      id: 3,
      icon: Search,
      title: "Knowledge Base",
      desc: "Search your entire company's knowledge instantly. AI finds answers from docs, emails, chat history, and databases. Ask questions in plain English and get accurate results in seconds. No more digging through folders or Slack threads."
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const animation = element.dataset.animation;
          const delay = element.dataset.delay;

          if (delay) {
            element.classList.add(`animation-delay-${delay}`);
          }
          if (animation) {
            element.classList.add(animation);
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logovitter_(1).png" alt="Ulexite" className="h-6 sm:h-8 w-auto" />
          </div>
          <button 
            onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#8fff00] text-black px-4 sm:px-6 py-2 text-sm sm:text-base rounded-md font-semibold hover:bg-[#7ae600] transition-all"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden sm:min-h-[calc(100vh-80px)] sm:flex sm:items-center">
        {/* Desktop background elements */}
        <div className="hidden sm:block absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#8fff00]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-20 w-80 h-80 bg-[#8fff00]/3 rounded-full blur-3xl"></div>
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(143,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(143,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="sm:grid sm:grid-cols-12 sm:gap-8 sm:items-center">
            {/* Left column - Content */}
            <div className="sm:col-span-7 lg:col-span-6">
              <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#8fff00]/10 to-[#8fff00]/5 backdrop-blur-sm border border-[#8fff00]/30 rounded-full shadow-[0_0_20px_rgba(143,255,0,0.15)] hover:shadow-[0_0_30px_rgba(143,255,0,0.25)] hover:border-[#8fff00]/50 transition-all duration-300 animate-fade-in">
                <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-[#8fff00]" />
                <span className="text-[#8fff00] text-xs sm:text-sm font-semibold">AI Implementation Made Simple</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold mb-4 sm:mb-6 leading-[1.1] tracking-tight animate-fade-in-up animation-delay-200">
                Your AI Department.{' '}
                <span className="bg-gradient-to-r from-[#8fff00] via-[#a0ff40] to-[#8fff00] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Without Hiring One.
                </span>
              </h1>
              <p className="sm:hidden text-base text-gray-400 mb-6 leading-relaxed animate-fade-in animation-delay-400">
                We help traditional businesses actually use AI to cut costs and boost revenue.
                No hype, no complicated tech jargon, just practical tools that seamlessly integrate with your existing workflow and deliver measurable results.
              </p>
              <p className="hidden sm:block text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed animate-fade-in animation-delay-400">
                We help traditional businesses <span className="text-white font-semibold">actually use AI</span> to cut costs and boost revenue.
                No hype, no complicated tech jargon, just practical tools that seamlessly <span className="text-white font-semibold">integrate</span> with your <span className="text-white font-semibold">existing workflow</span> and deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8 animate-fade-in animation-delay-600">
                <button 
                  onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#8fff00] text-black px-6 sm:px-10 py-3 sm:py-5 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#7ae600] transition-all flex items-center justify-center gap-2 group"
                >
                  Book Your Free Consultation
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Desktop trust indicators */}
              <div className="hidden sm:flex items-center gap-6 text-sm text-gray-500 animate-fade-in animation-delay-800">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8fff00] to-[#7ae600] border-2 border-black"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 border-2 border-black"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8fff00]/70 to-[#7ae600]/70 border-2 border-black"></div>
                  </div>
                  <span>Trusted by 50+ businesses</span>
                </div>
                <div className="w-px h-6 bg-gray-800"></div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#8fff00]" />
                  <span>2-week implementation</span>
                </div>
              </div>
            </div>
            
            {/* Right column - Visual element (Desktop only) */}
            <div className="hidden sm:block sm:col-span-5 lg:col-span-6 animate-fade-in animation-delay-400">
              <div className="relative">
                {/* Floating cards with stats */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-[#8fff00]/10 to-transparent border border-[#8fff00]/30 rounded-2xl p-6 backdrop-blur-sm hover:border-[#8fff00]/50 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-3">
                      <TrendingUp className="w-8 h-8 text-[#8fff00]" />
                      <span className="text-3xl font-bold text-[#8fff00]">+285%</span>
                    </div>
                    <p className="text-gray-400 text-sm">Average revenue growth with AI implementation</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#8fff00]/10 to-transparent border border-[#8fff00]/30 rounded-2xl p-6 backdrop-blur-sm hover:border-[#8fff00]/50 transition-all duration-300 transform hover:-translate-y-1 ml-8">
                    <div className="flex items-start justify-between mb-3">
                      <Bot className="w-8 h-8 text-[#8fff00]" />
                      <span className="text-3xl font-bold text-[#8fff00]">60%</span>
                    </div>
                    <p className="text-gray-400 text-sm">Reduction in operational costs</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#8fff00]/10 to-transparent border border-[#8fff00]/30 rounded-2xl p-6 backdrop-blur-sm hover:border-[#8fff00]/50 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-3">
                      <Lightbulb className="w-8 h-8 text-[#8fff00]" />
                      <span className="text-3xl font-bold text-[#8fff00]">2 Weeks</span>
                    </div>
                    <p className="text-gray-400 text-sm">From consultation to first results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Growth Graph */}
          <div className="sm:hidden mt-11 scroll-animate" data-animation="animate-fade-in-up" data-delay="800">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold leading-tight">
              <span className="text-white">Yearly Business Growth:</span><br />
              <span className="text-[#8fff00]">AI</span> <span className="text-white">vs Traditional</span>
            </h3>
          </div>
          
          <svg viewBox="0 0 340 150" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            {/* Background gradient area */}
            <defs>
              <linearGradient id="aiGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8fff00" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#8fff00" stopOpacity="0"/>
              </linearGradient>
            </defs>
            
            {/* Horizontal grid */}
            <line x1="20" y1="130" x2="320" y2="130" stroke="#ffffff12" strokeWidth="1"/>
            <line x1="20" y1="95" x2="320" y2="95" stroke="#ffffff06" strokeWidth="1" strokeDasharray="3 3"/>
            <line x1="20" y1="60" x2="320" y2="60" stroke="#ffffff06" strokeWidth="1" strokeDasharray="3 3"/>
            <line x1="20" y1="25" x2="320" y2="25" stroke="#ffffff06" strokeWidth="1" strokeDasharray="3 3"/>
            
            {/* Traditional business line (slow growth with subtle curve) */}
            <path
              d="M 20 120 Q 57 117, 95 113 T 170 107 Q 207 105, 245 103 T 320 99"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeDasharray="330"
              strokeDashoffset="330"
              className="animate-draw-line"
              style={{ animationDelay: '0.4s' }}
            />
            
            {/* AI-powered business line (exponential growth with dynamic curves) */}
            <path
              d="M 20 120 Q 50 110, 95 95 T 170 60 Q 205 43, 245 30 T 320 15"
              fill="none"
              stroke="#8fff00"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeDasharray="380"
              strokeDashoffset="380"
              className="animate-draw-line"
              style={{ animationDelay: '0.4s' }}
            />
            
            {/* Glow effect for AI line */}
            <path
              d="M 20 120 Q 50 110, 95 95 T 170 60 Q 205 43, 245 30 T 320 15"
              fill="none"
              stroke="#8fff00"
              strokeWidth="8"
              opacity="0.2"
              strokeLinecap="round"
              strokeDasharray="380"
              strokeDashoffset="380"
              className="animate-draw-line"
              style={{ animationDelay: '0.4s' }}
            />
            
            {/* Fill under AI line */}
            <path
              d="M 20 120 Q 50 110, 95 95 T 170 60 Q 205 43, 245 30 T 320 15 L 320 130 L 20 130 Z"
              fill="url(#aiGradient)"
            />
            
            {/* Starting point marker */}
            <circle cx="20" cy="120" r="4" fill="#ffffff" opacity="0.7"/>
            
            {/* End point - Traditional (appears after line animation) */}
            <circle cx="320" cy="99" r="3.5" fill="#ffffff" opacity="0" className="animate-fade-in" style={{ animationDelay: '2.4s' }}/>
            <text x="260" y="93" fill="#ffffff" fontSize="11" fontWeight="600" opacity="0" className="animate-fade-in" style={{ animationDelay: '2.4s' }}>+45%</text>
            
            {/* End point - AI (appears after line animation) */}
            <circle cx="320" cy="15" r="4.5" fill="#8fff00" opacity="0" className="animate-fade-in" style={{ animationDelay: '2.4s' }}/>
            <text x="255" y="12" fill="#8fff00" fontSize="12" fontWeight="700" opacity="0" className="animate-fade-in" style={{ animationDelay: '2.4s' }}>+285%</text>
          </svg>
        </div>
      </section>

      {/* Simple Approach Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
            {/* Left: Content */}
            <div className="scroll-animate" data-animation="animate-slide-in-left">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-8 leading-tight">
                AI Doesn't Have to Be{' '}
                <span className="text-[#8fff00]">Complicated.</span>
              </h2>

              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
                <p>
                  You already know AI could help your business. The problem isn't understanding why it matters,
                  it's figuring out where to start and who to trust. Most consultants will sell you expensive reports.
                  We build the actual tools and make sure they work in your day to day operations.
                </p>

                <p>
                  We start by looking at what you're already doing, find the bottlenecks costing you time or money,
                  and implement solutions that fit right into your existing workflow. You stay in control of your business
                  while we handle the technical side. Simple as that.
                </p>
              </div>
            </div>

            {/* Right: Image/Visual */}
            <div className="relative scroll-animate" data-animation="animate-slide-in-right" data-delay="200">
              <div className="aspect-square rounded-2xl overflow-hidden bg-black">
                <img src="/o (3).png" alt="AI Implementation" className="w-full h-full object-cover object-left scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Waiting Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
            {/* Left: Image */}
            <div className="relative scroll-animate order-2 md:order-1" data-animation="animate-slide-in-left">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src="/o (2).png" alt="Cost of Waiting" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="scroll-animate order-1 md:order-2" data-animation="animate-slide-in-right" data-delay="200">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-8 leading-tight">
                The Real Cost of{' '}
                <span className="text-[#8fff00]">Sleeping on AI.</span>
              </h2>

              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
                <p>
                  While you're thinking about it, your competitors are already cutting costs and scaling faster.
                  Every month you wait is another month paying for manual work that could be automated.
                  Another month watching qualified leads slip through because your team is stretched too thin.
                </p>

                <p>
                  The businesses winning right now aren't the ones with the biggest teams or the largest budgets.
                  They're the ones who stopped waiting for the perfect moment and started putting AI to work.
                  The gap between them and everyone else? It's getting wider every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16 scroll-animate" data-animation="animate-fade-in-up">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
              What We Actually Build
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-8 scroll-animate" data-animation="animate-fade-in-up" data-delay="200">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <div
                  key={solution.id}
                  className="bg-[#8fff00] rounded-xl p-5 sm:p-8 flex flex-col"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-black/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-black" />
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold text-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {solution.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                    {solution.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-16 scroll-animate" data-animation="animate-fade-in-up">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-3 sm:mb-4">
              What's Possible <span className="text-[#8fff00]">When You Stop Waiting</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              See what happens when traditional businesses implement AI the right way.
            </p>
          </div>

          {/* Story Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
            {stories.map((story, index) => {
              const imageMap = [3, 2, 1, 4];
              return (
                <div
                  key={story.id}
                  className="scroll-animate group"
                  data-animation="animate-fade-in-up"
                  data-delay={`${(index + 1) * 100}`}
                >
                  <div
                    className="relative h-[28rem] sm:h-96 rounded-2xl overflow-hidden border-2 border-[#8fff00]/60 transition-all duration-300"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(/${imageMap[index]}.png)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="relative h-full flex flex-col justify-between p-6">
                      <div></div>

                      <div>
                        <h3 className="text-2xl font-bold text-white leading-tight mb-4 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {story.title}
                        </h3>

                        <button
                          onClick={() => setOpenStoryModal(story.id)}
                          className="w-full bg-[#8fff00] text-black py-3 rounded-lg font-semibold hover:bg-[#7ae600] transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                          Read Story
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal */}
        {openStoryModal !== null && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setOpenStoryModal(null)}
          >
            <div
              className="bg-gradient-to-br from-[#8fff00]/10 to-transparent border-2 border-[#8fff00]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-5xl w-full relative bg-black/80 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenStoryModal(null)}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 flex items-center justify-center"
              >
                <span className="text-[#8fff00] text-3xl font-bold" style={{ lineHeight: '1' }}>×</span>
              </button>

              <div>
                {(() => {
                  const story = stories[openStoryModal];
                  return (
                    <>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 text-center pr-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {story.title}
                      </h3>
                      <p className="text-base sm:text-xl text-[#8fff00]/70 mb-6 sm:mb-8 text-center">
                        {story.name}
                      </p>
                      <div className="text-left space-y-4 sm:space-y-6">
                        {story.story.split('\n\n').map((paragraph, idx) => (
                          <p key={idx} className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-black via-[#8fff00]/5 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-16 scroll-animate" data-animation="animate-fade-in-up">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-3 sm:mb-4">
              Questions You're <span className="text-[#8fff00]">Probably Asking</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-400 px-4">
              Straight answers to the most common concerns we hear.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="scroll-animate" data-animation="animate-fade-in-up" data-delay="100">
              <div className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/20 rounded-xl p-4 sm:p-6 hover:border-[#8fff00]/40 transition-all duration-300">
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  How long does implementation actually take?
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Most projects go live in 1 to 4 weeks, depending on complexity. We start with a pilot that shows results fast, then scale from there. You're not waiting months to see if this works. You'll know quickly.
                </p>
              </div>
            </div>

            <div className="scroll-animate" data-animation="animate-fade-in-up" data-delay="200">
              <div className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/20 rounded-xl p-4 sm:p-6 hover:border-[#8fff00]/40 transition-all duration-300">
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  What if my team doesn't know anything about AI?
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Perfect. That's exactly who we work with. We build tools that your team can use without needing to understand the tech behind them. Training is included, and we stick around to make sure adoption actually happens.
                </p>
              </div>
            </div>

            <div className="scroll-animate" data-animation="animate-fade-in-up" data-delay="300">
              <div className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/20 rounded-xl p-4 sm:p-6 hover:border-[#8fff00]/40 transition-all duration-300">
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Will this work with our existing systems?
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Yes. We integrate with what you already have: your CRM, databases, workflows, whatever. No rip and replace, no forcing you onto new platforms. The AI works behind the scenes with your current tools.
                </p>
              </div>
            </div>

            <div className="scroll-animate" data-animation="animate-fade-in-up" data-delay="400">
              <div className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/20 rounded-xl p-4 sm:p-6 hover:border-[#8fff00]/40 transition-all duration-300">
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  What's this going to cost me?
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  It depends on what you're building and how complex your needs are. Most clients see full ROI in approximately 3 months. We'll give you exact numbers after the discovery phase. No surprises, no hidden fees.
                </p>
              </div>
            </div>

            <div className="scroll-animate" data-animation="animate-fade-in-up" data-delay="500">
              <div className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/20 rounded-xl p-4 sm:p-6 hover:border-[#8fff00]/40 transition-all duration-300">
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  What happens after launch?
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  We don't just build it and leave. We monitor performance, optimize based on real data, and provide ongoing support. Your AI gets better over time because we're actively improving it based on how your team uses it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="booking-section" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-black via-[#8fff00]/5 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-16 scroll-animate" data-animation="animate-fade-in-up">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-3 sm:mb-4">
              Ready to <span className="text-[#8fff00]">Get Started?</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-400 px-4">
              Book a free consultation and let's talk about what AI can do for your business.
            </p>
          </div>

          <form 
            name="booking" 
            method="POST" 
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={(e) => {
              e.preventDefault();
              if (bookingStep === 3 && bookingData.fullName && bookingData.companyName && bookingData.email && bookingData.agreeToPolicy) {
                // Encode form data for Netlify
                const encode = (data: Record<string, string>) => {
                  return Object.keys(data)
                    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                    .join('&');
                };

                fetch('/', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: encode({
                    'form-name': 'booking',
                    'fullName': bookingData.fullName,
                    'companyName': bookingData.companyName,
                    'email': bookingData.email,
                    'date': bookingData.date,
                    'time': bookingData.time,
                    'message': bookingData.message
                  })
                })
                .then(() => {
                  // Save booking details before clearing
                  setConfirmedBooking({
                    date: bookingData.date,
                    time: bookingData.time,
                    email: bookingData.email
                  });
                  setShowConfirmation(true);
                  setBookingStep(1);
                  setBookingData({ date: '', time: '', fullName: '', companyName: '', email: '', message: '', agreeToPolicy: false });
                })
                .catch((error) => {
                  console.error('Form submission error:', error);
                  alert('There was an error submitting your booking. Please try again.');
                });
              }
            }}
            className="bg-gradient-to-br from-[#8fff00]/10 to-transparent border-2 border-[#8fff00]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 scroll-animate" 
            data-animation="animate-fade-in-up" 
            data-delay="200"
          >
            {/* Hidden input for Netlify Forms */}
            <input type="hidden" name="form-name" value="booking" />
            {/* Honeypot field */}
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            
            <div className="flex items-center justify-center mb-8 sm:mb-12">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center font-bold text-base sm:text-lg transition-all ${
                    bookingStep >= step
                      ? 'bg-[#8fff00] text-black'
                      : 'bg-[#8fff00]/20 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-12 sm:w-16 md:w-24 h-1 mx-1 sm:mx-2 transition-all ${
                      bookingStep > step
                        ? 'bg-[#8fff00]'
                        : 'bg-[#8fff00]/20'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>

            {bookingStep === 1 && (
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Pick a Date
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 text-center mb-4 sm:mb-6">When would you like to talk?</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                    {getNextDays().map((date) => {
                      const dateValue = formatDateValue(date);
                      return (
                        <button
                          key={dateValue}
                          type="button"
                          onClick={() => setBookingData({...bookingData, date: dateValue})}
                          className={`py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold text-sm sm:text-base transition-all ${
                            bookingData.date === dateValue
                              ? 'bg-[#8fff00] text-black'
                              : 'bg-black/50 border-2 border-[#8fff00]/30 text-white hover:border-[#8fff00]'
                          }`}
                        >
                          {formatDate(date)}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => bookingData.date && setBookingStep(2)}
                  disabled={!bookingData.date}
                  className="w-full bg-[#8fff00] text-black py-4 rounded-lg font-semibold text-lg hover:bg-[#7ae600] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {bookingStep === 2 && (
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Choose a Time
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 text-center mb-4 sm:mb-6">What time works best for you? (EST)</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                    {['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setBookingData({...bookingData, time})}
                        className={`py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold text-sm sm:text-base transition-all ${
                          bookingData.time === time
                            ? 'bg-[#8fff00] text-black'
                            : 'bg-black/50 border-2 border-[#8fff00]/30 text-white hover:border-[#8fff00]'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setBookingStep(1)}
                    className="w-full border-2 border-[#8fff00]/30 text-white py-4 rounded-lg font-semibold text-lg hover:border-[#8fff00] transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => bookingData.time && setBookingStep(3)}
                    disabled={!bookingData.time}
                    className="w-full bg-[#8fff00] text-black py-4 rounded-lg font-semibold text-lg hover:bg-[#7ae600] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    Continue
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {bookingStep === 3 && (
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Tell Us About Yourself
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 text-center mb-4 sm:mb-6">We'll use this to prepare for our conversation</p>

                  <div className="space-y-4">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={bookingData.fullName}
                      onChange={(e) => setBookingData({...bookingData, fullName: e.target.value})}
                      className="w-full bg-black/50 border-2 border-[#8fff00]/30 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-500 focus:border-[#8fff00] focus:outline-none transition-all"
                    />
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      value={bookingData.companyName}
                      onChange={(e) => setBookingData({...bookingData, companyName: e.target.value})}
                      className="w-full bg-black/50 border-2 border-[#8fff00]/30 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-500 focus:border-[#8fff00] focus:outline-none transition-all"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={bookingData.email}
                      onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                      className="w-full bg-black/50 border-2 border-[#8fff00]/30 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-500 focus:border-[#8fff00] focus:outline-none transition-all"
                    />
                    {/* Hidden fields for date and time */}
                    <input type="hidden" name="date" value={bookingData.date} />
                    <input type="hidden" name="time" value={bookingData.time} />
                    <textarea
                      name="message"
                      placeholder="Tell us briefly what you're looking to achieve (optional)"
                      value={bookingData.message}
                      onChange={(e) => setBookingData({...bookingData, message: e.target.value})}
                      rows={4}
                      className="w-full bg-black/50 border-2 border-[#8fff00]/30 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-500 focus:border-[#8fff00] focus:outline-none transition-all resize-none"
                    />
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={bookingData.agreeToPolicy}
                        onChange={(e) => setBookingData({...bookingData, agreeToPolicy: e.target.checked})}
                        className="mt-1 w-5 h-5 rounded border-2 border-[#8fff00] bg-black checked:bg-[#8fff00] checked:border-[#8fff00] focus:outline-none focus:ring-2 focus:ring-[#8fff00]/50 cursor-pointer transition-all appearance-none flex items-center justify-center"
                        style={{
                          backgroundImage: bookingData.agreeToPolicy ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E")` : 'none',
                          backgroundSize: '70%',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      />
                      <span className="text-gray-400 text-sm sm:text-base group-hover:text-gray-300 transition-colors">
                        I agree to the <button type="button" onClick={(e) => { e.preventDefault(); setShowPrivacyPolicy(true); }} className="text-[#8fff00] hover:underline">Privacy Policy</button> and <button type="button" onClick={(e) => { e.preventDefault(); setShowTermsOfService(true); }} className="text-[#8fff00] hover:underline">Terms of Service</button>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setBookingStep(2)}
                    type="button"
                    className="w-full border-2 border-[#8fff00]/30 text-white py-4 rounded-lg font-semibold text-lg hover:border-[#8fff00] transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!bookingData.fullName || !bookingData.companyName || !bookingData.email || !bookingData.agreeToPolicy}
                    className="w-full bg-[#8fff00] text-black py-4 rounded-lg font-semibold text-lg hover:bg-[#7ae600] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    Book Call
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => {
            setShowConfirmation(false);
            setBookingStep(1);
            setBookingData({ date: '', time: '', fullName: '', companyName: '', email: '', message: '', agreeToPolicy: false });
          }}
        >
          <div
            className="bg-gradient-to-br from-[#8fff00]/10 to-transparent border-2 border-[#8fff00]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-2xl w-full relative bg-black/80"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto bg-[#8fff00] rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-10 sm:w-12 h-10 sm:h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                You're All Set!
              </h3>

              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                We've received your booking request for <span className="text-[#8fff00] font-semibold">{new Date(confirmedBooking.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span> at <span className="text-[#8fff00] font-semibold">{confirmedBooking.time}</span>.
              </p>

              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                We'll send a confirmation email to <span className="text-white break-all">{confirmedBooking.email}</span> with all the details and a calendar invite.
              </p>

              <button
                onClick={() => {
                  setShowConfirmation(false);
                  setBookingStep(1);
                  setBookingData({ date: '', time: '', fullName: '', companyName: '', email: '', message: '', agreeToPolicy: false });
                }}
                className="bg-[#8fff00] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#7ae600] transition-all"
              >
                Perfect, Thanks!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-b from-black to-black/95">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-8">
            {/* Logo */}
            <div className="flex items-center md:w-1/3">
              <img src="/logovitter_(1).png" alt="Ulexite" className="h-7 sm:h-9 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-xs sm:text-sm md:w-1/3 text-center">
              © 2026 Ulexite. All rights reserved.
            </div>

            {/* Policy Links */}
            <div className="flex gap-4 sm:gap-6 md:w-1/3 justify-center md:justify-end">
              <button 
                onClick={() => setShowPrivacyPolicy(true)}
                className="text-gray-400 hover:text-[#8fff00] transition-all text-sm relative group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8fff00] group-hover:w-full transition-all duration-300"></span>
              </button>
              <span className="text-gray-700">|</span>
              <button 
                onClick={() => setShowTermsOfService(true)}
                className="text-gray-400 hover:text-[#8fff00] transition-all text-sm relative group"
              >
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8fff00] group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Full-Screen Modal */}
      {showPrivacyPolicy && (
        <div className="hide-scrollbar-mobile fixed inset-0 bg-black z-[100] overflow-y-auto w-full h-full">
          <div className="min-h-screen w-full">
            {/* Header */}
            <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                <img src="/logovitter_(1).png" alt="Ulexite" className="h-6 sm:h-8 w-auto" />
                <button 
                  onClick={() => setShowPrivacyPolicy(false)}
                  className="bg-[#8fff00] text-black px-4 sm:px-6 py-2 text-sm sm:text-base rounded-md font-semibold hover:bg-[#7ae600] transition-all flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Close
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="pt-8 sm:pt-12 pb-12 sm:pb-20 px-0 sm:px-6">
              <div className="max-w-4xl mx-auto px-4 sm:px-0">
                <div className="mb-8 sm:mb-12">
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Privacy Policy</h1>
                  <p className="text-sm sm:text-base text-gray-500">Last updated: January 13, 2026</p>
                </div>

                <div className="space-y-6 sm:space-y-12 text-sm sm:text-base text-gray-300 leading-relaxed">
                  <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8">
                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Introduction</h2>
                    <p>At Ulexite ("we", "us", or "our"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website and use our services.</p>
                  </section>

                  <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8">
                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Information We Collect</h2>
                    <p className="mb-3 sm:mb-4">When you book a consultation with us, we collect the following information:</p>
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span><strong className="text-white">Full Name:</strong> To identify you and personalize our communication</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span><strong className="text-white">Company Name:</strong> To understand your business context</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span><strong className="text-white">Email Address:</strong> To send you booking confirmations and communicate with you</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span><strong className="text-white">Preferred Date and Time:</strong> To schedule your consultation</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span><strong className="text-white">Optional Message:</strong> Any additional information you choose to share about your needs</span></li>
                    </ul>
                  </section>

                  <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8">
                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">How We Use Your Information</h2>
                    <p className="mb-3 sm:mb-4">We use the information we collect to:</p>
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span>Schedule and confirm your consultation appointments</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span>Send you calendar invites and meeting reminders</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span>Prepare for our conversations by understanding your business needs</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span>Follow up with you regarding our services</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span>Improve our services and website functionality</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span>Comply with legal obligations</span></li>
                    </ul>
                  </section>

                  <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8">
                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Data Storage and Security</h2>
                    <p>We take data security seriously. Your information is stored securely and is only accessible to authorized personnel who need it to provide our services. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
                  </section>

                  <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8">
                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Data Sharing</h2>
                    <p className="mb-3 sm:mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span>With service providers who assist us in operating our website and conducting our business (e.g., email services, calendar tools)</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span>When required by law or to protect our rights</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span>With your explicit consent</span></li>
                    </ul>
                  </section>

                  <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8">
                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Your Rights</h2>
                    <p className="mb-3 sm:mb-4">You have the right to:</p>
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span>Access the personal data we hold about you</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span>Request correction of inaccurate data</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span>Request deletion of your data</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span>Object to processing of your data</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span>Withdraw consent at any time</span></li>
                    </ul>
                  </section>

                  <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8">
                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Contact Us</h2>
                    <p className="mb-3 sm:mb-4">If you have any questions about this privacy policy or how we handle your data, please contact us at:</p>
                    <div className="bg-black/30 rounded-lg p-3 sm:p-4 border border-[#8fff00]/20">
                      <p className="flex items-center gap-2 text-sm sm:text-base">
                        <span className="text-white break-all">hello@ulexiteai.com</span>
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Full-Screen Modal */}
      {showTermsOfService && (
        <div className="hide-scrollbar-mobile fixed inset-0 bg-black z-[100] overflow-y-auto w-full h-full">
          <div className="min-h-screen w-full">
            {/* Header */}
            <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                <img src="/logovitter_(1).png" alt="Ulexite" className="h-6 sm:h-8 w-auto" />
                <button 
                  onClick={() => setShowTermsOfService(false)}
                  className="bg-[#8fff00] text-black px-4 sm:px-6 py-2 text-sm sm:text-base rounded-md font-semibold hover:bg-[#7ae600] transition-all flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Close
                </button>
              </div>
            </div>

            {/* Content - Simplified Terms */}
            <div className="pt-8 sm:pt-12 pb-12 sm:pb-20 px-0 sm:px-6">
              <div className="max-w-4xl mx-auto px-4 sm:px-0">
                <div className="mb-8 sm:mb-12">
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Terms of Service</h1>
                  <p className="text-sm sm:text-base text-gray-500">Last updated: January 13, 2026</p>
                </div>

                <div className="space-y-6 sm:space-y-12 text-sm sm:text-base text-gray-300 leading-relaxed">
                  <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8">
                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Acceptance of Terms</h2>
                    <p>By accessing or using the Ulexite website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                  </section>

                  <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8">
                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Services Description</h2>
                    <p>Ulexite provides AI implementation and consulting services for businesses. We offer consultations, strategy development, and implementation support to help businesses integrate AI solutions.</p>
                  </section>

                  <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8">
                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">User Obligations</h2>
                    <p className="mb-3 sm:mb-4">When using our services, you agree to:</p>
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span>Provide accurate and complete information</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span>Use our services only for lawful purposes</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span>Not interfere with or disrupt our services</span></li>
                      <li className="flex items-start gap-3"><span className="text-[#8fff00] mt-1">→</span><span>Respect intellectual property rights</span></li>
                    </ul>
                  </section>

                  <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8">
                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Intellectual Property</h2>
                    <p>All content on this website, including text, graphics, logos, and software, is the property of Ulexite and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.</p>
                  </section>

                  <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8">
                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Limitation of Liability</h2>
                    <p>Ulexite shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our liability is limited to the maximum extent permitted by law.</p>
                  </section>

                  <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8">
                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Modifications to Terms</h2>
                    <p>We reserve the right to modify these Terms of Service at any time. We will notify users of significant changes by posting an updated version on this page. Your continued use of our services after such modifications constitutes acceptance of the updated terms.</p>
                  </section>

                  <section className="bg-gradient-to-br from-[#8fff00]/5 to-transparent border border-[#8fff00]/10 rounded-xl sm:rounded-2xl p-5 sm:p-8">
                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Contact Information</h2>
                    <p className="mb-3 sm:mb-4">For questions about these Terms of Service, please contact us at:</p>
                    <div className="bg-black/30 rounded-lg p-3 sm:p-4 border border-[#8fff00]/20">
                      <p className="flex items-center gap-2 text-sm sm:text-base">
                        <span className="text-white break-all">hello@ulexiteai.com</span>
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
