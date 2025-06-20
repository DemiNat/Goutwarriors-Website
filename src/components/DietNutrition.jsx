import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { CheckCircle, XCircle, Apple, Fish, Droplets, Clock } from 'lucide-react';
import dietImage from '../assets/diet_nutrition_image.png';

const DietNutrition = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  const goodFoods = [
    { name: "Low-fat dairy products", benefit: "May help reduce uric acid levels" },
    { name: "Cherries and berries", benefit: "Anti-inflammatory properties" },
    { name: "Whole grains", benefit: "Complex carbohydrates, low purine" },
    { name: "Vegetables (all types)", benefit: "High in nutrients, low in purines" },
    { name: "Nuts and seeds", benefit: "Healthy fats and protein" },
    { name: "Eggs", benefit: "High-quality protein, low purine" },
    { name: "Olive oil", benefit: "Healthy monounsaturated fats" },
    { name: "Coffee", benefit: "May help lower uric acid levels" }
  ];

  const avoidFoods = [
    { name: "Organ meats", reason: "Extremely high in purines" },
    { name: "Red meat (beef, pork, lamb)", reason: "High purine content" },
    { name: "Certain seafood (sardines, anchovies, mackerel)", reason: "Very high in purines" },
    { name: "Sugary drinks and sodas", reason: "High fructose increases uric acid" },
    { name: "Beer", reason: "Contains purines and alcohol" },
    { name: "Excessive alcohol", reason: "Interferes with uric acid elimination" },
    { name: "High-fructose corn syrup", reason: "Rapidly increases uric acid production" },
    { name: "Processed foods", reason: "Often high in purines and additives" }
  ];

  const mealPlans = [
    {
      title: "Mediterranean-Style Day",
      meals: {
        breakfast: "Greek yogurt with berries and walnuts, whole grain toast",
        lunch: "Quinoa salad with vegetables, olive oil dressing, small portion of chicken",
        dinner: "Grilled salmon, roasted vegetables, brown rice",
        snacks: "Apple with almond butter, herbal tea"
      }
    },
    {
      title: "DASH Diet Day",
      meals: {
        breakfast: "Oatmeal with sliced banana and low-fat milk",
        lunch: "Vegetable soup with whole grain roll, side salad",
        dinner: "Baked cod, steamed broccoli, sweet potato",
        snacks: "Low-fat cheese with whole grain crackers"
      }
    },
    {
      title: "Plant-Forward Day",
      meals: {
        breakfast: "Smoothie with spinach, berries, banana, and plant milk",
        lunch: "Lentil and vegetable curry with brown rice",
        dinner: "Stuffed bell peppers with quinoa and vegetables",
        snacks: "Mixed nuts, cherry tomatoes"
      }
    }
  ];

  const hydrationTips = [
    "Aim for 8-10 glasses of water daily",
    "Increase intake during hot weather or exercise",
    "Choose water over sugary beverages",
    "Herbal teas count toward fluid intake",
    "Monitor urine color - pale yellow is ideal",
    "Drink extra water during gout flares"
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-secondary text-white section-padding">
        <div className="container-max">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Diet & Nutrition for Gout
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Discover how the right dietary choices can help you manage gout effectively, 
            reduce flare frequency, and improve your overall health and well-being.
          </p>
        </div>
      </section>

      {/* Hero Image and Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={dietImage} 
                alt="Healthy gout-friendly foods" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">
                The Power of Nutrition in Gout Management
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  While diet alone cannot cure gout, the right nutritional approach can significantly 
                  reduce the frequency and severity of attacks while supporting overall health.
                </p>
                <p>
                  Modern research shows that focusing on overall dietary patterns—rather than just 
                  avoiding high-purine foods—provides the most effective approach to gout management.
                </p>
                <p>
                  The Mediterranean and DASH diets have shown particular promise in reducing gout 
                  risk and supporting long-term health outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="foods">Foods Guide</TabsTrigger>
              <TabsTrigger value="meals">Meal Plans</TabsTrigger>
              <TabsTrigger value="hydration">Hydration</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading flex items-center">
                      <Apple className="mr-2 h-5 w-5 text-secondary" />
                      Key Principles
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-semibold mb-2">Focus on Whole Foods</h4>
                      <p className="text-sm">Emphasize minimally processed, nutrient-dense foods</p>
                    </div>
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-semibold mb-2">Maintain Healthy Weight</h4>
                      <p className="text-sm">Gradual weight loss can significantly reduce uric acid levels</p>
                    </div>
                    <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                      <h4 className="font-semibold mb-2">Stay Hydrated</h4>
                      <p className="text-sm">Adequate fluid intake helps kidneys eliminate uric acid</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading">Dietary Patterns That Help</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Mediterranean Diet</h4>
                      <p className="text-sm text-gray-600">
                        Rich in fruits, vegetables, whole grains, fish, and olive oil. 
                        Studies show 42% reduction in gout risk.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">DASH Diet</h4>
                      <p className="text-sm text-gray-600">
                        Emphasizes fruits, vegetables, low-fat dairy, and lean proteins. 
                        Helps reduce blood pressure and uric acid levels.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Plant-Forward Eating</h4>
                      <p className="text-sm text-gray-600">
                        Increasing plant foods while moderating animal proteins can 
                        help manage uric acid levels effectively.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="foods" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading flex items-center text-green-700">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Foods to Enjoy
                    </CardTitle>
                    <CardDescription>These foods can help manage gout and support overall health</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {goodFoods.map((food, index) => (
                        <div key={index} className="p-3 bg-green-50 border border-green-200 rounded-lg">
                          <h4 className="font-semibold text-sm">{food.name}</h4>
                          <p className="text-xs text-gray-600">{food.benefit}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading flex items-center text-red-700">
                      <XCircle className="mr-2 h-5 w-5" />
                      Foods to Limit or Avoid
                    </CardTitle>
                    <CardDescription>These foods may trigger gout attacks or increase uric acid levels</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {avoidFoods.map((food, index) => (
                        <div key={index} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                          <h4 className="font-semibold text-sm">{food.name}</h4>
                          <p className="text-xs text-gray-600">{food.reason}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="meals" className="mt-8">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="font-heading text-2xl font-bold mb-4">Sample Meal Plans</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    These meal plans demonstrate how to create delicious, gout-friendly meals 
                    that support your health goals while providing variety and satisfaction.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mealPlans.map((plan, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="font-heading text-center">{plan.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Badge variant="secondary" className="mb-2">Breakfast</Badge>
                          <p className="text-sm">{plan.meals.breakfast}</p>
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">Lunch</Badge>
                          <p className="text-sm">{plan.meals.lunch}</p>
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">Dinner</Badge>
                          <p className="text-sm">{plan.meals.dinner}</p>
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">Snacks</Badge>
                          <p className="text-sm">{plan.meals.snacks}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="hydration" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading flex items-center">
                      <Droplets className="mr-2 h-5 w-5 text-blue-500" />
                      Why Hydration Matters
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Proper hydration is crucial for gout management because it helps your 
                      kidneys eliminate uric acid more effectively and prevents the concentration 
                      of uric acid that can lead to crystal formation.
                    </p>
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-semibold mb-2">Benefits of Staying Hydrated:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Helps kidneys flush out uric acid</li>
                        <li>• Prevents uric acid concentration</li>
                        <li>• Reduces risk of kidney stones</li>
                        <li>• Supports overall kidney function</li>
                        <li>• May help prevent gout attacks</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading">Hydration Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {hydrationTips.map((tip, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span className="text-sm">{tip}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        During Flares
                      </h4>
                      <p className="text-sm">
                        Increase water intake to 12-16 glasses per day during active gout 
                        attacks to help flush out uric acid and support recovery.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Ready to Transform Your Diet?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Start implementing these evidence-based nutrition strategies today and take 
            control of your gout management journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Download Meal Planning Guide
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Join Nutrition Support Group
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DietNutrition;

