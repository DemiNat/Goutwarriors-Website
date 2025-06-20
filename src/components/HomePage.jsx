import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Heart, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import heroImage from '../assets/hero_image_goutwarriors.png';

const HomePage = () => {
  const quickAccessCards = [
    {
      title: "Just Diagnosed?",
      description: "Get the essential information you need to understand your condition and start managing it effectively.",
      icon: BookOpen,
      link: "/understanding-gout",
      cta: "Learn the Basics"
    },
    {
      title: "Dealing with a Flare?",
      description: "Find immediate relief strategies and learn how to prevent future attacks.",
      icon: Heart,
      link: "/understanding-gout#flare-management",
      cta: "Get Relief Now"
    },
    {
      title: "Gout-Friendly Eating",
      description: "Discover foods that help, foods to avoid, and practical meal planning strategies.",
      icon: Users,
      link: "/diet-nutrition",
      cta: "Explore Diet Guide"
    },
    {
      title: "Join Our Community",
      description: "Connect with others who understand your journey and share experiences and tips.",
      icon: MessageCircle,
      link: "/living-with-gout",
      cta: "Join the Discussion"
    }
  ];

  const featuredPosts = [
    {
      title: "5 Surprising Foods That Can Trigger Gout Flares",
      excerpt: "Learn about unexpected dietary triggers that many people don't know about.",
      readTime: "5 min read"
    },
    {
      title: "The Mental Health Side of Gout: You're Not Alone",
      excerpt: "Understanding and addressing the emotional impact of living with gout.",
      readTime: "7 min read"
    },
    {
      title: "New Research: Promising Developments in Gout Treatment",
      excerpt: "Latest scientific breakthroughs offering hope for better gout management.",
      readTime: "6 min read"
    }
  ];

  const communityHighlights = [
    {
      title: "How I Finally Got My Uric Acid Levels Under Control",
      author: "Sarah M.",
      preview: "After years of struggling with frequent attacks, I discovered the key was..."
    },
    {
      title: "Traveling with Gout: My Tips for Staying Healthy on the Road",
      author: "Mike R.",
      preview: "Business travel used to trigger my worst flares. Here's what changed..."
    },
    {
      title: "The Diet Changes That Changed My Life",
      author: "Jennifer L.",
      preview: "I never thought simple dietary adjustments could make such a difference..."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative container-max section-padding text-white">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Take Control of Your Gout Journey
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Evidence-based guidance, supportive community, and practical tools 
              to help you manage gout effectively and live your best life.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Why Choose GoutWarriors?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Living with gout doesn't have to define your life. At GoutWarriors, we believe that 
              with the right knowledge, support, and tools, you can successfully manage your condition 
              and thrive. Our platform combines medical expertise with real-world experience, offering 
              you a comprehensive resource that understands both the clinical and personal aspects of gout management.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Get Started Today
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccessCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card key={index} className="card-hover cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-xl">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="mb-4">
                      {card.description}
                    </CardDescription>
                    <Link to={card.link}>
                      <Button variant="outline" className="w-full">
                        {card.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Stay Informed and Inspired
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="card-hover cursor-pointer">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.readTime}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Real Stories, Real Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityHighlights.map((story, index) => (
              <Card key={index} className="card-hover cursor-pointer">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">{story.title}</CardTitle>
                  <CardDescription>by {story.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{story.preview}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/living-with-gout">
              <Button variant="outline" size="lg">
                Read More Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Stay Connected
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Get weekly tips, latest research updates, and community highlights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900"
            />
            <Button className="bg-secondary hover:bg-secondary/90">
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

