import { Search, Bell, Star, Calendar, MapPin, Users, ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function Home() {
  // Sample featured events
  const featuredEvents = [
    {
      id: "u438su84",
      title: "AI & Machine Learning Workshop",
      date: "Dec 15",
      time: "2:00 PM",
      location: "Downtown Toronto",
      attendees: 45,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/cedcc5e708ae090ac45d6d68e454ae8996ec17e4?width=400"
    },
    {
      id: "v123abc7",
      title: "Startup Pitch Night",
      date: "Dec 18",
      time: "6:00 PM", 
      location: "Innovation Hub",
      attendees: 32,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/cedcc5e708ae090ac45d6d68e454ae8996ec17e4?width=400"
    },
    {
      id: "w456def9",
      title: "Design Systems Meetup",
      date: "Dec 20",
      time: "7:00 PM",
      location: "Design Studio",
      attendees: 28,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/cedcc5e708ae090ac45d6d68e454ae8996ec17e4?width=400"
    }
  ];

  return (
    <div 
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, rgba(19, 21, 23, 0.00) 0%, #131517 100%)"
      }}
    >
      {/* Navigation */}
      <nav className="bg-transparent relative z-10 px-3 py-4">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 text-white">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <span className="text-white font-semibold text-lg">Luma</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors cursor-pointer">
                <Calendar className="w-4 h-4" />
                <span>Events</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors cursor-pointer">
                <Calendar className="w-4 h-4" />
                <span>Calendars</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors cursor-pointer">
                <Search className="w-4 h-4" />
                <span>Discover</span>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/60 hidden sm:block">8:49 AM EDT</span>
            <Link to="/create">
              <Button className="bg-white text-black hover:bg-white/90 font-medium">
                <Plus className="w-4 h-4 mr-2" />
                Create Event
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="w-8 h-8 text-white/70 hover:text-white hover:bg-white/10">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 text-white/70 hover:text-white hover:bg-white/10 relative">
                <Bell className="w-4 h-4" />
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

      {/* Hero Section */}
      <div className="relative z-10 px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Beautiful events that
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              bring people together
            </span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Create, discover, and attend events that matter. Connect with your community 
            and build meaningful relationships through shared experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/create">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-3">
                <Plus className="w-5 h-5 mr-2" />
                Create Your Event
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 bg-transparent font-semibold px-8 py-3"
            >
              Explore Events
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Events Section */}
      <div className="relative z-10 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Events</h2>
            <p className="text-white/70 text-lg">Discover amazing events happening near you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <Link key={event.id} to={`/${event.id}`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-white/20 text-white border-white/30">
                        {event.date}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    <h3 className="text-white font-semibold text-lg line-clamp-2">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-white/70">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date} at {event.time}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              View All Events
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Why Choose Luma?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto bg-white/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Easy Event Creation</h3>
              <p className="text-white/70">Create beautiful events in minutes with our intuitive interface</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto bg-white/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Community Building</h3>
              <p className="text-white/70">Connect with like-minded people and build lasting relationships</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto bg-white/10 rounded-lg flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Smart Discovery</h3>
              <p className="text-white/70">Find events that match your interests and location perfectly</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to get started?</h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of event organizers who trust Luma to bring their communities together.
          </p>
          
          <Link to="/create">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-4 text-lg">
              <Plus className="w-5 h-5 mr-2" />
              Create Your First Event
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 px-4 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span className="font-semibold">Luma</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="hover:text-white cursor-pointer">Discover</span>
                <span className="hover:text-white cursor-pointer">Pricing</span>
                <span className="hover:text-white cursor-pointer">Help</span>
              </div>
            </div>

            <div className="text-center">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 via-orange-400 to-green-400 bg-clip-text text-transparent font-medium">
                Powered by Luma ↗
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
