import { Head } from '@inertiajs/react'
import { Badge } from '~/components/elements/badge'
import Navbar from './landing/navbar'
import {
  BarChart,
  Check,
  Flame,
  Github,
  Rocket,
  Send,
  Shield,
  Twitter,
  Users,
  X,
  Zap,
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/elements/accordion'
import { userTestimonials } from '~/utils/user_testimonials'

export default function LandingPage() {
  return (
    <>
      <Head title="Landing page" />

      {/* Sticky CTA that follows user scroll */}
      <div className="fixed bottom-6 left-0 right-0 z-30 flex justify-center pointer-events-none cursor-pointer">
        <a
          href="/sign-in"
          className="animate-bounce-subtle shadow-lg flex items-center bg-violet-700 hover:bg-violet-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 pointer-events-auto"
        >
          <span className="mr-2">Get Started Now</span>
          <Rocket size={16} />
        </a>
      </div>

      <div className="relative landing">
        <div
          className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
          style={{
            backgroundColor: 'hsla(222,13%,10%,1)',
            backgroundImage: `
              radial-gradient(at 66% 26%, hsla(222,12%,10%,1) 0px, transparent 50%),
              radial-gradient(at 73% 90%, hsla(222,12%,10%,1) 0px, transparent 50%),
              radial-gradient(at 14% 77%, hsla(222,12%,10%,1) 0px, transparent 50%),
              radial-gradient(at 45% 42%, hsla(222,12%,10%,1) 0px, transparent 50%),
              radial-gradient(at 67% 52%, hsla(228,12%,24%,0.63) 0px, transparent 50%),
              radial-gradient(at 37% 26%, hsla(258,34%,20%,0.64) 0px, transparent 50%),
              radial-gradient(at 7% 49%, hsla(240,39%,20%,0.63) 0px, transparent 50%),
              radial-gradient(at 9% 29%, hsla(224,34%,20%,0.81) 0px, transparent 50%),
              radial-gradient(at 80% 25%, hsla(240,39%,20%,0.57) 0px, transparent 50%),
              radial-gradient(at 85% 53%, hsla(222,27%,31%,0.98) 0px, transparent 50%)
            `,
          }}
        />

        <header className="px-6 w-full fixed top-0 z-10 md:backdrop-blur-sm">
          <Navbar />
        </header>

        {/* headline */}
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center pt-[150px] md:pt-[250px]">
          <Badge
            variant="outline"
            className="font-medium mb-6 text-sm px-4 py-2 bg-white/5 border-white/10"
          >
            <Flame size={16} className="mr-2 text-orange-400" />
            Unlock New Possibilities
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 mt-4 text-center">
            Effortless
            <br />
            App Launch
          </h1>
          <p className="md:text-base text-md text-center max-w-xs mx-auto md:max-w-full text-foreground/50 font-light">
            Simplify your launch process and amplify your impact from day one.
          </p>
          {/* Badge users used it */}
          <div className="flex items-center mt-6 bg-white/10 rounded-full px-5 py-2">
            <Users size={16} className="text-violet-400 mr-2" />
            <p className="text-sm text-white/70">
              <span className="font-bold text-white">100+</span> developers already using BoilerChs
            </p>
          </div>
        </div>

        {/* cta */}
        <div className="mt-8 flex justify-center">
          <a
            href="/sign-in"
            className="cursor-pointer px-8 py-2 rounded-xl bg-violet-800 hover:bg-violet-500 text-white font-semibold text-lg transition"
          >
            Get started for free
          </a>
        </div>

        {/* image presentation */}
        <div className="relative w-full max-w-5xl mx-auto mt-22 md:mt-44 pb-22 px-8 md:px-0">
          <div
            className="absolute -inset-2 rounded-2xl bg-gradient-to-t from-zinc-700 via-blue-800 to-violet-900 opacity-40 blur-2xl"
            aria-hidden="true"
          ></div>
          <div className="relative flex flex-col overflow-hidden border border-zinc-700 rounded-2xl bg-zinc-900 shadow-xl">
            <div className="aspect-video flex items-center justify-center bg-zinc-800/70">
              {/* replace span with your image */}
              <span className="text-zinc-400 text-sm">Project preview coming soon…</span>
            </div>
          </div>
        </div>

        {/* features */}
        <section className="w-full bg-white pt-24 md:pt-24 -mt-8 md:mt-0" id="features">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="font-medium mb-4 text-sm px-4 py-2 bg-violet-100 border-violet-200 text-violet-800"
              >
                Why Choose Us
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">
                Powerful Features for Modern Apps
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Everything you need to build, launch, and scale your application with confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-xl p-8 transition-all duration-300 border border-neutral-100 group flex flex-col items-start">
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-100 text-violet-700 group-hover:bg-violet-700 group-hover:text-white transition-colors duration-300">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Instant Project Setup</h3>
                <p className="text-neutral-600 mb-6">
                  Start your SaaS in minutes with a ready-to-use AdonisJS, Inertia, and React stack.
                  No tedious configuration—just code and launch.
                </p>
                <ul className="space-y-2.5 text-neutral-800/90 mt-auto">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-600 flex-shrink-0">✓</span>
                    <span>Zero config CLI</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-600 flex-shrink-0">✓</span>
                    <span>Prebuilt Docker & Mailpit</span>
                  </li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-8 transition-all duration-300 border border-neutral-100 group flex flex-col items-start">
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-100 text-violet-700 group-hover:bg-violet-700 group-hover:text-white transition-colors duration-300">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Authentication & Social Login</h3>
                <p className="text-neutral-600 mb-6">
                  Secure session-based authentication, Google login, and password reset
                  flows—production-ready from day one.
                </p>
                <ul className="space-y-2.5 text-neutral-800/90 mt-auto">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-600 flex-shrink-0">✓</span>
                    <span>Session & Google OAuth</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-600 flex-shrink-0">✓</span>
                    <span>Reset password flow</span>
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl p-8 transition-all duration-300 border border-neutral-100 group flex flex-col items-start">
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-100 text-violet-700 group-hover:bg-violet-700 group-hover:text-white transition-colors duration-300">
                  <BarChart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">UI & Auth Pages Included</h3>
                <p className="text-neutral-600 mb-6">
                  Modern, modular sign up, sign in, and password reset pages built with shadcn/ui
                  and Tailwind CSS.
                </p>
                <ul className="space-y-2.5 text-neutral-800/90 mt-auto">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-600 flex-shrink-0">✓</span>
                    <span>shadcn/ui components</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-600 flex-shrink-0">✓</span>
                    <span>Modular auth flows</span>
                  </li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl p-8 transition-all duration-300 border border-neutral-100 group flex flex-col items-start">
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-100 text-violet-700 group-hover:bg-violet-700 group-hover:text-white transition-colors duration-300">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Mailer & Email Templates</h3>
                <p className="text-neutral-600 mb-6">
                  Resend integration, MJML templates, and Mailpit for local development—send
                  beautiful emails effortlessly.
                </p>
                <ul className="space-y-2.5 text-neutral-800/90 mt-auto">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-600 flex-shrink-0">✓</span>
                    <span>Resend & SMTP ready</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-600 flex-shrink-0">✓</span>
                    <span>MJML email templates</span>
                  </li>
                </ul>
              </div>

              {/* Card 5 - Support */}
              <div className="bg-gradient-to-br from-violet-600 to-violet-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 text-white group flex flex-col items-start">
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 text-white">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Premium Support</h3>
                <p className="text-white/80 mb-6">
                  Get expert help when you need it with our dedicated support team.
                </p>
                <ul className="space-y-2.5 text-white/90 mt-auto">
                  <li className="flex items-center">
                    <span className="mr-2 text-white flex-shrink-0">✓</span>
                    <span>24/7 technical assistance</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-white flex-shrink-0">✓</span>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-white flex-shrink-0">✓</span>
                    <span>Priority bug fixes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full flex justify-center items-center py-24 bg-white -mt-8 md:mt-0">
          <div className="h-1 w-24 bg-neutral-200 rounded-full opacity-80" />
        </div>

        {/* FAQ Section */}
        <section className="w-full bg-white -mt-8 md:mt-0" id="faq">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col items-center mb-10">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-violet-100 mb-4">
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="text-violet-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M12 14a4 4 0 10-4-4"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold text-black mb-2 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-600 text-center max-w-xl">
                Everything you need to know to get started with BoilerChs. If you can’t find an
                answer, feel free to contact our team.
              </p>
            </div>
            <div className="space-y-6 text-black">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed adipisci fugit
                    dolore consequuntur eveniet, rem cum esse tempore doloremque nihil est, facere
                    ad consequatur quaerat at ducimus, blanditiis cupiditate enim.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Lorem ipsum, dolor sit.</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates voluptatum
                    animi reiciendis ut maxime perspiciatis, nihil rerum sapiente error cupiditate,
                    officiis a molestias architecto. Vel adipisci est dolor sunt dicta!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eaque
                    similique. Eligendi inventore perferendis.
                  </AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                    Quod, cumque! Quasi, doloremque. Quisquam, voluptatibus. Quod, cumque! Quasi,
                    doloremque.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <div className="w-full flex justify-center items-center py-24 bg-white -mt-8 md:mt-0">
          <div className="h-1 w-24 bg-neutral-200 rounded-full opacity-80" />
        </div>

        {/* Testimonials section */}
        <section className="w-full bg-white" id="testimonials">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <Badge
                variant="outline"
                className="font-medium mb-4 text-sm px-4 py-2 bg-violet-100 border-violet-200 text-violet-800"
              >
                Testimonials
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">
                What our users say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {userTestimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-neutral-100 flex flex-col"
                >
                  <div className="font-bold text-black text-lg mb-1">{testimonial.name}</div>
                  <div className="text-violet-700 text-sm mb-3">{testimonial.headline}</div>
                  <div className="text-neutral-700 text-base">{testimonial.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="w-full flex justify-center items-center py-24 bg-white -mt-8 md:mt-0">
          <div className="h-1 w-24 bg-neutral-200 rounded-full opacity-80" />
        </div>

        {/* Pricing Section */}
        <section className="w-full bg-white -mt-8 md:mt-0" id="pricing">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="font-medium mb-4 text-sm px-4 py-2 bg-violet-100 border-violet-200 text-violet-800"
              >
                Pricing
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">
                Plans for every need
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Choose the plan that fits your needs. All plans include access to our core features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col h-full">
                  <div className="border-b border-neutral-200 pb-6 mb-6 h-40">
                    <h3 className="text-lg font-semibold text-neutral-500 mb-4">FREE</h3>
                    <div className="flex items-baseline mb-1">
                      <span className="text-5xl font-bold text-neutral-900">€0</span>
                      <span className="ml-2 text-neutral-500 font-medium">forever</span>
                    </div>
                    <p className="text-sm text-neutral-500 mb-6">
                      Perfect for personal projects and learning
                    </p>
                  </div>
                  <div className="flex-grow">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-violet-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">1 Lorem</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-violet-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Lorem</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-violet-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Lorem</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-violet-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Lorem</span>
                      </li>
                      <li className="flex items-start">
                        <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-400">Lorem</span>
                      </li>
                      <li className="flex items-start">
                        <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-400">Lorem</span>
                      </li>
                      <li className="flex items-start">
                        <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-400">Lorem</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <button className="cursor-pointer w-full py-3 px-4 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-medium transition-colors duration-300">
                      Start for free
                    </button>
                  </div>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-violet-500 hover:shadow-xl transition-shadow duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-violet-600 text-white text-xs font-bold uppercase py-1 px-4 rounded-full">
                  Recommended
                </div>
                <div className="flex flex-col h-full">
                  <div className="border-b border-neutral-200 pb-6 mb-6 h-40">
                    <h3 className="text-lg font-semibold text-violet-600 mb-4">PRO</h3>
                    <div className="flex items-baseline mb-1">
                      <span className="text-5xl font-bold text-neutral-900">€199</span>
                      <span className="ml-2 text-neutral-500 font-medium">per year</span>
                    </div>
                    <p className="text-sm text-neutral-500 mb-1">or €19.99 per month</p>
                    <p className="text-sm text-violet-600 font-medium">
                      Save 20% with annual billing
                    </p>
                  </div>
                  <div className="flex-grow">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-violet-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Unlimited lorem</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-violet-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Lorem</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-violet-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Lorem</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-violet-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Lorem</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-violet-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Lorem</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-violet-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Lorem</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-violet-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">Lorem</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <button className="cursor-pointer w-full py-3 px-4 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-medium transition-colors duration-300">
                      Subscribe now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full flex justify-center items-center py-24 bg-white -mt-8 md:mt-0">
          <div className="h-1 w-24 bg-neutral-200 rounded-full opacity-80" />
        </div>

        <section className="w-full bg-white pb-24 -mt-8 md:mt-0" id="about">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-extrabold text-black mb-4">About</h2>
            <p className="text-neutral-700 text-lg">
              Hello, I’m Alexandre 🇫🇷, a fullstack developer who loves building projects that make
              life easier for creators.
            </p>
          </div>
        </section>

        <footer className="bg-black text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Stay Connected */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Stay Connected</h3>
                <p className="text-gray-400 mb-6">
                  Join our newsletter for the latest updates and exclusive offers.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-900 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-violet-500"
                  />
                  <button className="bg-violet-600 hover:bg-violet-700 p-4 rounded-r-lg transition-colors cursor-pointer">
                    <Send size={20} />
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-400 hover:text-violet-400 transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      className="text-gray-400 hover:text-violet-400 transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="text-gray-400 hover:text-violet-400 transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="text-gray-400 hover:text-violet-400 transition-colors"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
                <address className="not-italic text-gray-400">
                  <p>Email: hello@applaunch.fr</p>
                </address>
              </div>

              {/* Follow Us */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
                <div className="flex space-x-4 mb-8">
                  <a
                    href="https://x.com/AlexandreChsDev"
                    target="_blank"
                    className="bg-gray-800 p-2 rounded-full hover:bg-violet-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://github.com/Alexandre-Chs"
                    target="_blank"
                    className="bg-gray-800 p-2 rounded-full hover:bg-violet-600 transition-colors"
                    aria-label="Github"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} BoilerChs. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
