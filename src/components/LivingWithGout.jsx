import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Quote, Heart, Users, MessageCircle, Star, ArrowRight } from 'lucide-react';

const LivingWithGout = () => {
  const personalStories = [
    {
      name: "Sarah Martinez",
      age: 52,
      profession: "Marketing Executive",
      title: "From Denial to Empowerment",
      quote: "I kept thinking that if I just ignored it, it would go away. I didn't want to accept that I had a chronic condition.",
      story: "Sarah's journey from denial to acceptance took several months and multiple gout attacks. The turning point came when she experienced a particularly severe attack affecting multiple joints.",
      outcome: "Today, three years after her diagnosis, Sarah has achieved excellent control of her gout and hasn't had an attack in over 18 months.",
      keyLearning: "Gout taught me to prioritize my health and listen to my body. In some ways, it's made me a healthier person overall."
    },
    {
      name: "Michael Thompson",
      age: 45,
      profession: "Construction Worker",
      title: "Overcoming Stigma and Building Resilience",
      quote: "When I told my coworkers I had gout, the jokes started immediately. They called it the 'rich man's disease'.",
      story: "Michael faced unique challenges managing his gout diagnosis in a physically demanding job while dealing with workplace stigma and misconceptions.",
      outcome: "Michael has been attack-free for over two years and has become an advocate for gout awareness in his community.",
      keyLearning: "I want other working people to know that gout doesn't have to end your career or define your life."
    },
    {
      name: "Jennifer Chen",
      age: 38,
      profession: "Mother of Two",
      title: "Managing Gout as a Young Mother",
      quote: "You can't schedule a gout attack around your children's needs. I had to learn to ask for help.",
      story: "Jennifer's first gout attack occurred just six months after the birth of her second child, creating unique challenges in balancing her health needs with parenting responsibilities.",
      outcome: "Jennifer has successfully integrated gout management into her family life and has been attack-free for 14 months.",
      keyLearning: "Gout taught me that taking care of myself isn't selfish—it's essential for being the mother my children need."
    }
  ];

  const copingStrategies = [
    {
      title: "Build Your Support Network",
      description: "Connect with family, friends, and other people with gout who understand your journey.",
      icon: Users
    },
    {
      title: "Educate Yourself",
      description: "Understanding your condition empowers you to make informed decisions about your care.",
      icon: Heart
    },
    {
      title: "Develop Coping Skills",
      description: "Learn stress management techniques and develop strategies for dealing with flares.",
      icon: Star
    },
    {
      title: "Stay Connected",
      description: "Join support groups, online communities, or local organizations for ongoing support.",
      icon: MessageCircle
    }
  ];

  const dailyLivingTips = [
    {
      category: "Work Life",
      tips: [
        "Keep comfortable shoes at your workplace",
        "Inform your supervisor about your condition",
        "Plan for potential sick days during flares",
        "Stay hydrated throughout the workday"
      ]
    },
    {
      category: "Travel",
      tips: [
        "Pack medications in carry-on luggage",
        "Research medical facilities at your destination",
        "Stay hydrated during flights",
        "Plan for dietary restrictions when eating out"
      ]
    },
    {
      category: "Social Events",
      tips: [
        "Communicate dietary needs to hosts",
        "Bring gout-friendly dishes to share",
        "Limit alcohol consumption",
        "Have an exit strategy if you feel unwell"
      ]
    },
    {
      category: "Exercise",
      tips: [
        "Choose low-impact activities during flares",
        "Stay hydrated before, during, and after exercise",
        "Listen to your body and rest when needed",
        "Work with a physical therapist if needed"
      ]
    }
  ];

  const mentalHealthResources = [
    "Individual counseling with chronic illness specialists",
    "Support groups for people with arthritis",
    "Online communities and forums",
    "Mindfulness and meditation apps",
    "Stress management workshops",
    "Family counseling to improve communication"
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-accent text-white section-padding">
        <div className="container-max">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Living with Gout
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Discover how others have successfully navigated their gout journey and find 
            the support, strategies, and inspiration you need to thrive with this condition.
          </p>
        </div>
      </section>

      {/* Personal Stories */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            Real Stories, Real Inspiration
          </h2>
          <div className="space-y-12">
            {personalStories.map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-muted/30">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-heading text-xl">{story.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {story.name}, {story.age} - {story.profession}
                      </CardDescription>
                    </div>
                    <Quote className="h-8 w-8 text-primary opacity-50" />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                      <blockquote className="text-lg italic text-gray-700 border-l-4 border-primary pl-4">
                        "{story.quote}"
                      </blockquote>
                      <p className="text-gray-600">{story.story}</p>
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h4 className="font-semibold mb-2">Outcome:</h4>
                        <p className="text-sm">{story.outcome}</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">Key Learning:</h4>
                      <p className="text-sm italic">"{story.keyLearning}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coping Strategies */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            Building Resilience and Coping Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {copingStrategies.map((strategy, index) => {
              const IconComponent = strategy.icon;
              return (
                <Card key={index} className="text-center card-hover">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-lg">{strategy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{strategy.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Daily Living Tips */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            Practical Tips for Daily Living
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dailyLivingTips.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="font-heading">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mental Health Support */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">
                Mental Health and Emotional Well-being
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Living with gout can take an emotional toll. The unpredictability of attacks, 
                  lifestyle changes, and social stigma can contribute to stress, anxiety, and depression.
                </p>
                <p>
                  It's important to recognize that these feelings are normal and that seeking 
                  support for your mental health is just as important as managing the physical 
                  aspects of gout.
                </p>
                <p>
                  Remember that taking care of your emotional well-being isn't just beneficial 
                  for your mental health—it can also help reduce inflammation and improve your 
                  overall gout management.
                </p>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Mental Health Resources</CardTitle>
                <CardDescription>Support options for emotional well-being</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {mentalHealthResources.map((resource, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <span className="text-sm">{resource}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button className="w-full">
                    Find Mental Health Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Support */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Join Our Supportive Community
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with others who understand your journey. Share experiences, 
              ask questions, and find the support you need to thrive with gout.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-heading">Discussion Forums</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Join conversations about treatment experiences, dietary tips, and daily living strategies.
                </p>
                <Button variant="outline" className="w-full">
                  Join Forums
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="font-heading">Support Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Participate in virtual or local support groups led by healthcare professionals.
                </p>
                <Button variant="outline" className="w-full">
                  Find Groups
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="font-heading">Peer Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Connect one-on-one with experienced community members for personalized support.
                </p>
                <Button variant="outline" className="w-full">
                  Get Matched
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            You're Not Alone in This Journey
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Join thousands of others who are successfully managing gout and living full, 
            active lives. Your story of resilience can inspire others too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Share Your Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Join Community Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LivingWithGout;

