import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  ExternalLink,
  Users,
  Hash,
  Mail,
  MessageSquare,
  Clock,
  ChevronRight,
  Search,
  Bell,
  Star,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function EventPreview() {
  const { eventId } = useParams<{ eventId: string }>();

  return (
    <div className="min-h-screen bg-[#F7F8F9]">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 px-3 py-3">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-5 h-5 text-gray-400">
                <Star className="w-5 h-5 fill-current" />
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Calendar className="w-4 h-4" />
                <span>Events</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Calendar className="w-4 h-4" />
                <span>Calendars</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Search className="w-4 h-4" />
                <span>Discover</span>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 hidden sm:block">
              8:53 AM EDT
            </span>
            <Link to="/create">
              <Button variant="ghost" size="sm" className="text-gray-600">
                <Plus className="w-4 h-4 mr-2" />
                Create Event
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Search className="w-4 h-4 text-gray-400" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 relative">
                <Bell className="w-4 h-4 text-gray-400" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
              </Button>
              <Avatar className="w-6 h-6">
                <AvatarImage src="https://api.builder.io/api/v1/image/assets/TEMP/5ded6ff63b6a200988f65efc38d272b4e8ce2625?width=48" />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-[960px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[330px_1fr] gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Event Image */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/cedcc5e708ae090ac45d6d68e454ae8996ec17e4?width=660"
                  alt="Cover Image for Founder Pitch Practice"
                  className="w-full h-[330px] object-cover"
                />
              </div>

              {/* Manage Access Banner */}
              <div className="mt-4 bg-blue-50/80 backdrop-blur-sm border border-blue-200/30 rounded-xl p-3 flex items-center justify-between">
                <p className="text-[#2F7CA9] text-sm">
                  You have manage access
                  <br />
                  for this event.
                </p>
                <Link to="/event/manage">
                  <Button
                    size="sm"
                    className="bg-[#007AD6] hover:bg-[#0066BB] text-white h-7 px-3 text-xs"
                  >
                    Manage
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Organizer Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://api.builder.io/api/v1/image/assets/TEMP/aa2eb8375238f8a9e72d80ba148a071ef7df0ce8?width=64" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-xs text-[#004D8D]/80 mb-0.5">
                    Presented by
                  </p>
                  <div className="flex items-center gap-1">
                    <p className="text-[#000061] text-sm font-medium">
                      AI Tinkerers - Ottawa
                    </p>
                    <ChevronRight className="w-4 h-4 text-[#000061]/36" />
                  </div>
                </div>
                <div className="w-7 h-7 bg-[#00325966]/4 rounded-full flex items-center justify-center">
                  <Users className="w-3.5 h-3.5 text-[#000061]/64" />
                </div>
              </div>

              {/* Description */}
              <div className="relative">
                <div className="h-17 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none z-10"></div>
                  <p className="text-[#004D8D]/80 text-sm leading-relaxed">
                    We host cool AI events in Ottawa. Our promise is to provide
                    a stage for open-source AI developers to share code and the
                    lessons they've learned from experimentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Hosted By */}
            <div className="space-y-4">
              <div className="border-b border-[#000061]/8 pb-2">
                <h3 className="text-[#004D8D]/80 text-sm font-medium">
                  Hosted By
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src="https://api.builder.io/api/v1/image/assets/TEMP/02d12c4f5b7ce3a5ca586879945405eabd09354a?width=48" />
                      <AvatarFallback>NP</AvatarFallback>
                    </Avatar>
                    <span className="text-[#000061] text-sm font-medium">
                      Neilda Pacquing Gagné
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="w-7 h-7">
                      <MessageSquare className="w-4 h-4 text-[#000061]/36" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-7 h-7">
                      <ExternalLink className="w-4 h-4 text-[#000061]/36" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src="https://api.builder.io/api/v1/image/assets/TEMP/64c0c98ad37d8cac7cb97343e4c1fa8e86384e1d?width=48" />
                      <AvatarFallback>MD</AvatarFallback>
                    </Avatar>
                    <span className="text-[#000061] text-sm font-medium">
                      Mohamed hatem Diabi
                    </span>
                  </div>
                  <Button variant="ghost" size="icon" className="w-7 h-7">
                    <ExternalLink className="w-4 h-4 text-[#000061]/36" />
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src="https://api.builder.io/api/v1/image/assets/TEMP/1a7ed3bc6c8623d3a5ffd6ce6fd3ece55be017bd?width=48" />
                      <AvatarFallback>EB</AvatarFallback>
                    </Avatar>
                    <span className="text-[#000061] text-sm font-medium">
                      Eduardo Bailetti
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Attendees */}
            <div className="space-y-4">
              <div className="border-b border-[#000061]/8 pb-2">
                <h3 className="text-[#004D8D]/80 text-sm font-medium">
                  16 Went
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <Avatar key={i} className="w-6 h-6 border-2 border-white">
                        <AvatarImage
                          src={`https://api.builder.io/api/v1/image/assets/TEMP/${i === 1 ? "3617c61b4fb3f807a65bc365a42f0fe8dedd0468" : i === 2 ? "98661c64b6c2d159b9eceac3c59a03ccbc23a755" : i === 3 ? "f9ff2b6c7cc360eff7fed28db3ca03e8b9ac0f37" : i === 4 ? "1003a2f04b6acf54dbd7c28c7c38fd8a45230077" : i === 5 ? "068b2f6881ba2d59f9c99caebf4615e709026ab4" : "e9f5a6fba84319fa0ebd7ce2bc4842b7c14c97ca"}?width=48`}
                        />
                        <AvatarFallback>{i}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>
                <p className="text-[#004D8D]/80 text-sm">
                  Alecia Maximo, Sanket Pawar and 14 others
                </p>
              </div>
            </div>

            {/* Contact Host */}
            <div className="text-center">
              <Button variant="ghost" className="text-[#000061]/36 text-sm">
                Contact the Host
              </Button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="text-[#000061]/36 border-[#000061]/8"
              >
                <Hash className="w-3 h-3 mr-1" />
                AI
              </Badge>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Event Title and Details */}
            <div className="space-y-5">
              <h1 className="text-[#000061] text-[44px] font-semibold leading-[55px]">
                Founder Pitch Practice
              </h1>
              <div className="text-sm text-gray-500 mb-2">
                Event ID: {eventId || 'u438su84'}
              </div>

              <div className="space-y-3">
                {/* Date */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#000061]/8 rounded-lg flex flex-col items-center justify-center">
                    <div className="bg-[#000061]/8 px-2 py-0.5 text-[8px] font-semibold text-[#004D8D]/80 uppercase tracking-wide rounded-t">
                      AUG
                    </div>
                    <div className="text-[#004D8D]/80 text-base font-medium leading-none">
                      20
                    </div>
                  </div>
                  <div>
                    <p className="text-[#000061] text-sm font-medium">
                      Wednesday, August 20
                    </p>
                    <p className="text-[#004D8D]/80 text-sm">
                      5:00 PM - 6:00 PM
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#000061]/8 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#004D8D]/80" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-[#000061] text-sm font-medium">
                        Invest Ottawa
                      </p>
                      <ExternalLink className="w-4 h-4 text-[#004D8D]/80 opacity-50" />
                    </div>
                    <p className="text-[#004D8D]/80 text-sm">Ottawa, Ontario</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration */}
            <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl p-4 shadow-sm">
              <div className="bg-[#00325966]/4 rounded-t-lg px-4 py-2 -mx-4 -mt-4 mb-3">
                <h3 className="text-[#004D8D]/80 text-sm font-medium">
                  Registration
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 border-b border-[#000061]/8">
                  <Calendar className="w-7 h-7 p-1.5 bg-[#00325966]/4 rounded-lg text-[#000061]/48" />
                  <div>
                    <p className="text-[#000061] text-sm font-medium">
                      Past Event
                    </p>
                    <p className="text-[#004D8D]/80 text-sm">
                      This event ended 2 days ago.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-[#000061] text-sm">
                    Welcome! To join the event, please register below.
                  </p>

                  <div className="flex items-center gap-2">
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://api.builder.io/api/v1/image/assets/TEMP/7e3911c656db44cca16de88f6e0ad41c885bf69e?width=40" />
                      <AvatarFallback>MD</AvatarFallback>
                    </Avatar>
                    <div>
                      <span className="text-[#000061] text-sm font-medium">
                        Mohamed hatem Diabi
                      </span>
                      <span className="text-[#004D8D]/80 text-sm ml-1">
                        medhatem2@gmail.com
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-[#007AD6] hover:bg-[#0066BB] text-white">
                    Register
                  </Button>
                </div>
              </div>
            </div>

            {/* About Event */}
            <div className="space-y-4">
              <div className="border-b border-[#000061]/8 pb-2">
                <h3 className="text-[#004D8D]/80 text-sm font-medium">
                  About Event
                </h3>
              </div>

              <div className="space-y-4 text-[#000061] text-sm leading-relaxed">
                <p>
                  Join a collaborative session designed to help you clarify,
                  simplify, and strengthen how you talk about what you're
                  building.
                </p>

                <p>
                  You'll pitch your project twice in small rotating groups, get
                  actionable feedback from peers, and leave with sharper
                  storytelling skills and fresh inspiration.
                </p>

                <div>
                  <p className="font-semibold mb-2">Why join</p>
                  <p>
                    ✓ Practice explaining your project in just 4 minutes
                    <br />
                    ✓ Get thoughtful, constructive feedback from other builders
                    <br />
                    ✓ Learn from 6+ real startup pitches
                    <br />✓ Discover new ways to communicate your vision
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">How it works</p>
                  <p>
                    → Small groups of 4<br />
                    → 4-minute pitch + 5 minutes of feedback
                    <br />
                    → Rotate and repeat
                    <br />→ Bonus tips from Eduardo Bailetti on effective
                    pitching
                  </p>
                </div>

                <p>
                  Whether you're refining your narrative or just starting out,
                  this is a great space to learn, connect, and grow alongside
                  other founders and builders.
                </p>

                <p className="font-semibold text-base">
                  Come with an idea. Leave with clarity.
                </p>
              </div>
            </div>

            {/* Messages/Blasts */}
            <div className="space-y-4">
              <div className="border-b border-[#000061]/8 pb-2">
                <h3 className="text-[#004D8D]/80 text-sm font-medium">
                  Blasts
                </h3>
              </div>

              <div className="space-y-6">
                {/* First Message */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-4 h-4">
                      <AvatarImage src="https://api.builder.io/api/v1/image/assets/TEMP/ce4874dc8da8260d702ad8d71fb58a152114722d?width=32" />
                      <AvatarFallback>MD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <span className="text-[#000061] text-sm font-medium">
                        Mohamed hatem Diabi
                      </span>
                    </div>
                    <span className="text-[#004D8D]/80 text-xs">
                      Yesterday, 7:14 PM
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[#000061] text-base font-semibold">
                      Pitch Practice Recap
                    </h4>
                    <div className="text-[#000061] text-sm space-y-3 leading-relaxed">
                      <p>Hi everyone,</p>
                      <p>
                        Huge thanks for joining our Pitch Practice with Eduardo
                        yesterday. As promised, here are Eduardo's top notes
                        distilled for you:
                      </p>
                      <p>
                        <strong>1) Customer-centric thinking</strong>
                      </p>
                      <p>
                        Be clear on who pays vs. who uses. Solve the payer's
                        problem.
                      </p>
                      <p>
                        Make the pain believable, quantify it, and tie your
                        solution to what they care about.
                      </p>
                      <p>
                        Explain implementation from the customer's view and say
                        things that build trust.
                      </p>
                      <p>
                        <strong>2) Storytelling & narrative</strong>
                      </p>
                      <p>
                        Use a simple structure: Past → Present → Future or What
                        → So What → Now What.
                      </p>
                      <p>
                        Nail the opening and keep attention (5s → 30s → 2m →
                        5m).
                      </p>
                      <p>
                        <strong>3) Credibility</strong>
                      </p>
                      <p>Proof wins: tests, pilots, customers, metrics.</p>
                      <p>
                        <strong>4) Delivery</strong>
                      </p>
                      <p>
                        Show passion. Use your hands; scan the room with your
                        eyes.
                      </p>
                      <p>
                        <strong>5) Business logic</strong>
                      </p>
                      <p>
                        Position against real alternatives (including "do
                        nothing").
                      </p>
                      <p>
                        <strong>6) Feedback culture</strong>
                      </p>
                      <p>
                        When asking for feedback, expose weaknesses so you can
                        get help.
                      </p>
                      <p className="pt-6">See you at the next one!</p>
                      <p>Best,</p>
                      <p>Hatem & Eduardo</p>
                    </div>
                  </div>
                </div>

                {/* Second Message */}
                <div className="border-t border-[#000061]/8 pt-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-4 h-4">
                        <AvatarImage src="https://api.builder.io/api/v1/image/assets/TEMP/0c4c8eb29e007331ef6c7dd58457428438c8fda4?width=32" />
                        <AvatarFallback>EB</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <span className="text-[#000061] text-sm font-medium">
                          Eduardo Bailetti
                        </span>
                      </div>
                      <span className="text-[#004D8D]/80 text-xs">
                        Aug 19, 7:07 PM
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-[#000061] text-base font-semibold">
                        Preparation Help - Download the Venture Concept Template
                      </h4>
                      <div className="text-[#000061] text-sm space-y-3 leading-relaxed">
                        <p>
                          Looking forward to seeing you tomorrow for the
                          "Founder Pitch Practice"!
                        </p>
                        <p>
                          To help prepare, download the Venture Concept Template
                          available here:
                        </p>
                        <div className="border-b border-[#007AD6]/20 pb-1">
                          <p className="text-[#2F7CA9] text-sm leading-relaxed">
                            https://docs.google.com/presentation/d/13KUoVu1b36eXhNnwoT9BpWcMUG
                            <br />
                            m0p3bn/edit?
                            <br />
                            usp=sharing&ouid=111672543501948406786&rtpof=true&sd=true
                          </p>
                        </div>
                        <p>
                          The template is meant to be a tool to help you capture
                          and organize your thoughts about your new venture, and
                          to nudge you on some things that you may have not yet
                          considered. Fill it in and work to make your messaging
                          clear.
                        </p>
                        <p>
                          This will help you tell your story. Clear ideas result
                          in clear communication!
                        </p>
                        <p>See you tomorrow!</p>
                        <p>Eduardo Bailetti</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Third Message */}
                <div className="border-t border-[#000061]/8 pt-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-4 h-4">
                        <AvatarImage src="https://api.builder.io/api/v1/image/assets/TEMP/ce4874dc8da8260d702ad8d71fb58a152114722d?width=32" />
                        <AvatarFallback>MD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <span className="text-[#000061] text-sm font-medium">
                          Mohamed hatem Diabi
                        </span>
                      </div>
                      <span className="text-[#004D8D]/80 text-xs">
                        Aug 19, 11:16 AM
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-[#000061] text-base font-semibold">
                        Event Alert: Founder Pitch Practice is Happening
                        tomorrow
                      </h4>
                      <div className="text-[#000061] text-sm space-y-3 leading-relaxed">
                        <p>Hey everyone</p>
                        <p>
                          We are hosting a new pitch practice tomorrow
                          (Wednesday, Aug 20 ) during our CoHacking session
                        </p>
                        <p>It's a great chance to:</p>
                        <p>
                          - Practice explaining your project in 4 minutes
                          <br />
                          - Get constructive feedback from the group
                          <br />- Hear what others are building and get inspired
                        </p>
                        <p>Join here:</p>
                        <p className="text-[#000061]">https://lu.ma/bz156w2n</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-4">
              <div className="border-b border-[#000061]/8 pb-2">
                <h3 className="text-[#004D8D]/80 text-sm font-medium">
                  Location
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-[#000061] text-sm font-medium">
                    Invest Ottawa
                  </p>
                  <p className="text-[#004D8D]/80 text-sm">
                    7 Bayview Station Rd, Ottawa, ON K1Y 2C5, Canada
                  </p>
                </div>

                {/* Map Placeholder */}
                <div className="h-[200px] bg-[#E5E3DF] rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#877776] to-[#E5E3DF] opacity-30"></div>
                  <div className="absolute bottom-2 left-2 bg-white rounded px-3 py-1 shadow text-xs text-[#0CABF7]">
                    View larger map
                  </div>
                  <div className="absolute bottom-4 right-16">
                    <div className="text-[10px] text-black/60 space-x-2">
                      <span>Keyboard shortcuts</span>
                      <span>Map data ©2025 Google</span>
                      <span>Terms</span>
                      <span>Report a map error</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-[#000061]/8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#000061]/36" />
              </Link>
              <div className="flex items-center gap-4 text-[#000061]/36">
                <span>Discover</span>
                <span>Pricing</span>
                <span>Help</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#000061]/36" />
              <MessageSquare className="w-4 h-4 text-[#000061]/36" />
              <ExternalLink className="w-4 h-4 text-[#000061]/36" />
              <MessageSquare className="w-4 h-4 text-[#000061]/36" />
            </div>
          </div>

          <div className="mt-4 text-center">
            <div className="text-sm font-medium bg-gradient-to-r from-purple-500 via-blue-500 via-orange-500 to-green-500 bg-clip-text text-transparent">
              Host your event with Luma ↗
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
