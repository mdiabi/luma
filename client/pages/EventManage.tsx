import { Calendar, MapPin, Users, Hash, Mail, MessageSquare, Clock, ChevronRight, Search, Bell, Star, Plus, ExternalLink, Eye, RotateCcw, Edit, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function EventManage() {
  // Sample guest data
  const guests = [
    { name: "Hai", email: "hainghiem375@gmail.com", status: "Going", registeredDate: "Aug 18", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/55291c0e8bf212e188d9fb7d751fa9de80ec6ec2?width=40" },
    { name: "Gabe Braden", email: "gabe@gadget.dev", status: "Going", registeredDate: "Aug 18", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/16ef3708bb28e7fdaaa2e75932163dffb45885ea?width=40" },
    { name: "Sertan AVDAN", email: "sertannavdann@gmail.com", status: "Going", registeredDate: "Aug 16", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/eb3cacc33f812f260a2e16504987a22af81d3d0a?width=40" },
    { name: "Jamal", email: "ijami057@gmail.com", status: "Going", registeredDate: "Aug 15", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/9c9d6cb6cfc8183c6bd408557d4327adeac9d276?width=40" },
    { name: "Salim Allal", email: "salim1304.allal@gmail.com", status: "Going", registeredDate: "Aug 15", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/e0b5b80c36a728c9973ee9c526ef98898d542861?width=40" },
    { name: "Ilies Allal", email: "allal.ilies@gmail.com", status: "Going", registeredDate: "Aug 15", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/9463b2d5bf403f68bf6d7fb006a264d8459cc2c9?width=40" },
    { name: "Alecia Maximo", email: "alecia.maximo.givai@gmail.com", status: "Going", registeredDate: "Aug 15", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/bed2dcaf4e4f0826dbce72bf5bc1fe3730b0a593?width=40" },
    { name: "Sanket Pawar", email: "sanketp9499@gmail.com", status: "Going", registeredDate: "Aug 14", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/912ee4817eed646aa6d75abb5fd076c759c29e1e?width=40" },
    { name: "Gabriella Hong", email: "gabriella.i.hong@gmail.com", status: "Going", registeredDate: "Aug 14", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/c2658f3e84b7c564430882a60a56e21f61441ba2?width=40" },
    { name: "Daesol Jung", email: "daesol97@gmail.com", status: "Going", registeredDate: "Aug 14", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/9c9d6cb6cfc8183c6bd408557d4327adeac9d276?width=40" }
  ];

  const hosts = [
    { name: "Neilda Pacquing Gagné", email: "neilda.gagne@gmail.com", role: "Creator", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/53fd467b7b9fad0d2d67e4c089ee2b98b855fdbe?width=40" },
    { name: "Mohamed hatem Diabi", email: "medhatem2@gmail.com", role: "Manager", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/175cc6da927502407993fed239f0b85133fe2e9b?width=40" },
    { name: "Eduardo Bailetti", email: "eduardo.bailetti@carleton.ca", role: "Manager", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/ae58f7709920fcbeefdfc95d3c78a2c2a87b3b4a?width=40" }
  ];

  return (
    <div className="min-h-screen bg-[#F7F8F9]">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 px-3 py-3">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 text-gray-400">
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>
            
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
            <span className="text-sm text-gray-400 hidden sm:block">8:49 AM EDT</span>
            <Button variant="ghost" size="sm" className="text-gray-600">
              Create Event
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Search className="w-4 h-4 text-gray-400" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 relative">
                <Bell className="w-4 h-4 text-gray-400" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
              </Button>
              <Avatar className="w-6 h-6">
                <AvatarImage src="https://api.builder.io/api/v1/image/assets/TEMP/8de865c05bc71d566efedbeebf752235f83aec82?width=48" />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      {/* Gradient Background */}
      <div className="h-45 bg-gradient-to-b from-blue-100/20 via-purple-50/10 to-transparent"></div>

      {/* Main Content */}
      <div className="max-w-[820px] mx-auto px-4 -mt-36 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 opacity-0 animate-in fade-in duration-500">
          <div className="flex items-center justify-center gap-2 mb-3">
            <h1 className="text-[30px] font-semibold text-[#131517]">Founder Pitch Practice</h1>
            <Button size="sm" className="bg-gray-100 text-gray-600 hover:bg-gray-200 h-7 px-3 text-xs">
              Event Page
              <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-100 mb-8">
          <div className="flex items-center gap-8">
            <div className="border-b-2 border-[#131517] pb-2">
              <span className="text-[#131517] text-sm font-medium">Overview</span>
            </div>
            <span className="text-gray-400 text-sm">Guests</span>
            <span className="text-gray-400 text-sm">Registration</span>
            <span className="text-gray-400 text-sm">Blasts</span>
            <span className="text-gray-400 text-sm">Insights</span>
            <span className="text-gray-400 text-sm">More</span>
          </div>
        </div>

        {/* Event Status */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-[19px] font-semibold text-[#131517]">This Event Has Ended</h2>
            <Button size="sm" className="bg-gray-100 text-gray-600 hover:bg-gray-200 h-7 px-3 text-xs">
              Insights
              <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
          </div>
          <p className="text-[#737577] text-sm mb-6">Thank you for hosting. We hope it was a success!</p>

          {/* Event Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Event Recap Card */}
            <div className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl p-4">
              <div className="bg-gray-50 rounded-t-lg px-3 py-2 -mx-4 -mt-4 mb-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-[#737577] text-xs font-semibold uppercase tracking-wide">Event Recap</h3>
                  <Edit className="w-3 h-3 text-gray-400" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-[#131517] text-sm">Wednesday, Aug 20</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-[#131517] text-sm">5:00 PM EDT</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-[#131517] text-sm">Invest Ottawa</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-[#131517] text-sm">16 Guests</span>
                </div>
              </div>
            </div>

            {/* Feedback Card */}
            <div className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl p-4">
              <h3 className="text-[#737577] text-xs font-semibold uppercase tracking-wide mb-4">Feedback</h3>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/7ee2ffcfe0454089090cb3edd24cb7a6d0bb7a08?width=96" alt="Feedback icon" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Awaiting Feedback</p>
                  <p className="text-gray-400 text-xs mt-1">
                    We have sent the feedback email and are awaiting guest response.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Invites Section */}
        <div className="border-t border-gray-100 pt-8 mb-8">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-[19px] font-semibold text-[#131517]">Invites</h2>
            <Button size="sm" className="bg-gray-100 text-gray-600 hover:bg-gray-200 h-7 px-3 text-xs">
              <Plus className="w-3 h-3 mr-2" />
              Invite Guests
            </Button>
          </div>
          <p className="text-[#737577] text-sm mb-6">Invite subscribers, contacts and past guests via email or SMS.</p>

          <div className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-10">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/477c4dc1b959d7ecfc54e2e4614a6d0c85048595?width=71" alt="No invites" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium">No Invites Sent</p>
                <p className="text-gray-400 text-xs">You can invite subscribers, contacts and past guests to the event.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Guests Section */}
        <div className="border-t border-gray-100 pt-8 mb-8">
          <h2 className="text-[19px] font-semibold text-[#131517] mb-4">Guests</h2>

          {/* Guest Statistics */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-normal text-[#3CBD2C]">16</span>
                <span className="text-sm text-[#3CBD2C]">guests</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-gray-400">cap</span>
                <span className="text-2xl font-normal text-gray-400">60</span>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-100 rounded-full h-2 mb-3">
              <div className="bg-[#3CBD2C] h-2 rounded-full" style={{ width: "26.7%" }}></div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#3CBD2C] rounded-full"></div>
              <span className="text-[#3CBD2C] text-xs">16 Going</span>
            </div>
          </div>

          {/* Recent Registrations */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[17px] font-semibold text-[#131517]">Recent Registrations</h3>
              <Button size="sm" className="bg-gray-100 text-gray-600 hover:bg-gray-200 h-7 px-3 text-xs">
                All Guests
                <ChevronRight className="w-3 h-3 ml-2" />
              </Button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl overflow-hidden">
              {guests.map((guest, index) => (
                <div key={index} className={`p-3 ${index !== guests.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 flex-1">
                      <Avatar className="w-5 h-5">
                        <AvatarImage src={guest.avatar} />
                        <AvatarFallback>{guest.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-[#131517] text-sm">{guest.name}</span>
                          <span className="text-gray-400 text-sm truncate">{guest.email}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-[#3CBD2C]/10 text-[#3CBD2C] text-xs px-2 py-1">
                        {guest.status}
                      </Badge>
                      <span className="text-gray-400 text-xs">{guest.registeredDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hosts Section */}
        <div className="border-t border-gray-100 pt-8 mb-8">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-[19px] font-semibold text-[#131517]">Hosts</h2>
            <div className="flex items-center gap-2">
              <Button size="sm" className="bg-gray-100 text-gray-600 hover:bg-gray-200 h-7 px-3 text-xs">
                <Plus className="w-3 h-3 mr-2" />
                Add Host
              </Button>
              <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                <MessageSquare className="w-3 h-3 text-gray-400" />
              </Button>
            </div>
          </div>
          <p className="text-[#737577] text-sm mb-6">Add hosts, special guests, and event managers.</p>

          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl overflow-hidden">
            {hosts.map((host, index) => (
              <div key={index} className="p-4">
                {index > 0 && <div className="border-t border-gray-100 -mx-4 mb-4"></div>}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-1">
                    <Avatar className="w-5 h-5">
                      <AvatarImage src={host.avatar} />
                      <AvatarFallback>{host.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-[#131517] text-sm">{host.name}</span>
                        <span className="text-gray-400 text-sm">{host.email}</span>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs px-2 py-1 ${
                            host.role === 'Creator' 
                              ? 'bg-[#3CBD2C]/10 text-[#3CBD2C]' 
                              : 'bg-orange-100 text-orange-600'
                          }`}
                        >
                          {host.role}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                    <Edit className="w-3 h-3 text-gray-400" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-xs mt-3">
            Learn more about adding hosts / managers ↗
          </p>
        </div>

        {/* Visibility & Discovery Section */}
        <div className="border-t border-gray-100 pt-8 mb-8">
          <div className="mb-2">
            <h2 className="text-[19px] font-semibold text-[#131517]">Visibility & Discovery</h2>
            <p className="text-[#737577] text-sm">Control how people can find your event.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="w-9 h-9">
                <AvatarImage src="https://api.builder.io/api/v1/image/assets/TEMP/5c33b7cfc8fd8a513f1952c53c0ab2aa7e48e3d5?width=72" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-gray-400 text-xs">Managing Calendar</p>
                <p className="text-[#131517] text-sm font-medium">AI Tinkerers - Ottawa</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <div className="w-3.5 h-3.5 bg-[#3CBD2C] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-[#3CBD2C] text-sm font-medium">Public</span>
              </div>
              <span className="text-gray-400 text-xs">
                — This event is listed on the calendar page. Calendar admins have manage access to the event.
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button size="sm" className="bg-gray-100 text-gray-600 hover:bg-gray-200 h-7 px-3 text-xs">
                <Eye className="w-3 h-3 mr-2" />
                Change Visibility
              </Button>
              <Button size="sm" className="bg-gray-100 text-gray-600 hover:bg-gray-200 h-7 px-3 text-xs">
                <RotateCcw className="w-3 h-3 mr-2" />
                Transfer Calendar
              </Button>
            </div>

            {/* Featured Section */}
            <div className="border-t border-gray-100 mt-4 pt-4">
              <p className="text-gray-400 text-xs mb-3">Featured by Luma</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <Hash className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[#131517] text-sm">AI</p>
                    <p className="text-gray-400 text-xs">Category featured event page</p>
                  </div>
                </div>
                <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                  <X className="w-3 h-3 text-gray-400" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
