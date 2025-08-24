import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Users,
  Upload,
  Clock,
  ArrowLeft,
  Eye,
  EyeOff,
  Image,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

export default function EventCreate() {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    capacity: "",
    isPublic: true,
    category: "",
    tags: [] as string[],
    coverImage: null as File | null,
  });

  const [newTag, setNewTag] = useState("");

  const handleInputChange = (
    field: string,
    value: string | boolean | File | null,
  ) => {
    setEventData((prev) => ({ ...prev, [field]: value }));
  };

  const addTag = () => {
    if (newTag.trim() && !eventData.tags.includes(newTag.trim())) {
      setEventData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setEventData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Event data:", eventData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen" style={{ background: "#521616" }}>
      {/* Header */}
      <div className="border-b border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white hover:bg-white/10 p-2"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <h1 className="text-2xl font-semibold text-white">
                Create Event
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                Save Draft
              </Button>
              <Button
                type="submit"
                form="event-form"
                className="bg-white text-[#521616] hover:bg-white/90 font-medium"
              >
                Create Event
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <form id="event-form" onSubmit={handleSubmit} className="space-y-8">
          {/* Cover Image Upload */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
            <Label className="text-white font-medium mb-4 block">
              Event Cover Image
            </Label>
            <div className="border-2 border-dashed border-white/30 rounded-lg p-8 text-center hover:border-white/50 transition-colors cursor-pointer">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Upload className="w-6 h-6 text-white/70" />
                </div>
                <div>
                  <p className="text-white/90 font-medium">
                    Upload cover image
                  </p>
                  <p className="text-white/60 text-sm">
                    Recommended size: 1920x1080px
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  <Image className="w-4 h-4 mr-2" />
                  Choose File
                </Button>
              </div>
            </div>
          </div>

          {/* Basic Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 space-y-6">
            <h2 className="text-lg font-semibold text-white">
              Basic Information
            </h2>

            {/* Event Title */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-white font-medium">
                Event Title *
              </Label>
              <Input
                id="title"
                placeholder="Enter event title"
                value={eventData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-white/30"
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-white font-medium">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Describe your event..."
                value={eventData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-white/30 min-h-[120px]"
                rows={5}
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label className="text-white font-medium">Category</Label>
              <Select
                onValueChange={(value) => handleInputChange("category", value)}
              >
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="networking">Networking</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                  <SelectItem value="conference">Conference</SelectItem>
                  <SelectItem value="social">Social</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <Label className="text-white font-medium">Tags</Label>
              <div className="flex flex-wrap gap-2 mb-3">
                {eventData.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-white/20 text-white hover:bg-white/30 pr-1"
                  >
                    {tag}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 ml-2 w-4 h-4 hover:bg-white/20"
                      onClick={() => removeTag(tag)}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Add a tag"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addTag())
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-white/30"
                />
                <Button
                  type="button"
                  onClick={addTag}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  Add
                </Button>
              </div>
            </div>
          </div>

          {/* Date & Time */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 space-y-6">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Date & Time
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-white font-medium">
                  Date *
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={eventData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className="bg-white/10 border-white/20 text-white focus:ring-white/30"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time" className="text-white font-medium">
                  Time *
                </Label>
                <Input
                  id="time"
                  type="time"
                  value={eventData.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  className="bg-white/10 border-white/20 text-white focus:ring-white/30"
                  required
                />
              </div>
            </div>
          </div>

          {/* Location & Capacity */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 space-y-6">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Location & Capacity
            </h2>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="location" className="text-white font-medium">
                  Location *
                </Label>
                <Input
                  id="location"
                  placeholder="Enter event location or 'Online'"
                  value={eventData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-white/30"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="capacity" className="text-white font-medium">
                  Capacity
                </Label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                  <Input
                    id="capacity"
                    type="number"
                    placeholder="Max attendees"
                    value={eventData.capacity}
                    onChange={(e) =>
                      handleInputChange("capacity", e.target.value)
                    }
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-white/30 pl-10"
                    min="1"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Privacy & Visibility */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 space-y-6">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              {eventData.isPublic ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
              Privacy & Visibility
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-white font-medium">Public Event</Label>
                  <p className="text-white/60 text-sm">
                    Allow anyone to discover and register for this event
                  </p>
                </div>
                <Switch
                  checked={eventData.isPublic}
                  onCheckedChange={(checked) =>
                    handleInputChange("isPublic", checked)
                  }
                  className="data-[state=checked]:bg-white data-[state=unchecked]:bg-white/20"
                />
              </div>

              {!eventData.isPublic && (
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-white/70 text-sm">
                    <EyeOff className="w-4 h-4 inline mr-2" />
                    Private events can only be accessed via direct link or
                    invitation.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button - Mobile */}
          <div className="md:hidden">
            <Button
              type="submit"
              className="w-full bg-white text-[#521616] hover:bg-white/90 font-medium py-3"
            >
              Create Event
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
