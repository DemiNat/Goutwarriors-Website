import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { AlertCircle, Heart, Stethoscope, TrendingUp } from 'lucide-react';

const UnderstandingGout = () => {
  const stages = [
    {
      title: "Asymptomatic Hyperuricemia",
      description: "Elevated uric acid levels without symptoms",
      icon: TrendingUp,
      details: "This stage can persist for years without causing noticeable problems, but uric acid crystals are gradually accumulating in joints and tissues."
    },
    {
      title: "Acute Intermittent Gout",
      description: "Sudden, severe attacks separated by symptom-free periods",
      icon: AlertCircle,
      details: "Characterized by intense pain, swelling, and redness, typically affecting one joint at a time, most commonly the big toe."
    },
    {
      title: "Chronic Tophaceous Gout",
      description: "Advanced stage with visible crystal deposits",
      icon: Heart,
      details: "Large deposits of uric acid crystals (tophi) form in and around joints, causing chronic pain and potential joint damage."
    }
  ];

  const symptoms = [
    "Sudden, severe joint pain (often in the big toe)",
    "Swelling and inflammation",
    "Red or purple skin discoloration",
    "Warmth in the affected area",
    "Extreme tenderness to touch",
    "Limited range of motion"
  ];

  const riskFactors = [
    "Male gender (3x more likely than women)",
    "Age (men over 40, women after menopause)",
    "Family history of gout",
    "Obesity and metabolic syndrome",
    "High blood pressure",
    "Kidney disease",
    "Certain medications (diuretics, aspirin)",
    "Diet high in purines",
    "Excessive alcohol consumption",
    "Dehydration"
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-white section-padding">
        <div className="container-max">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Understanding Gout
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl">
            Gout is a complex form of inflammatory arthritis that affects millions worldwide. 
            Learn about the causes, symptoms, and progression of this condition to better 
            manage your health journey.
          </p>
        </div>
      </section>

      {/* What is Gout */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">What is Gout?</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Gout is far more than just a painful joint condition—it's a complex metabolic 
                  disorder caused by the buildup of uric acid in the blood, leading to the formation 
                  of needle-sharp crystals in and around joints.
                </p>
                <p>
                  When uric acid levels remain elevated over time, the excess begins to crystallize, 
                  forming monosodium urate crystals that deposit in joints, tendons, and surrounding 
                  tissues. These crystals trigger intense inflammatory responses that result in the 
                  excruciating pain, swelling, and redness characteristic of gout attacks.
                </p>
                <p>
                  Understanding gout as a metabolic condition rather than just joint pain is crucial 
                  for effective long-term management and prevention of complications.
                </p>
              </div>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="font-heading text-xl font-semibold mb-4">Key Facts About Gout</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Affects over 8 million Americans</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Most common inflammatory arthritis in men</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Highly treatable with proper management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Can be prevented with lifestyle changes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            Recognizing Gout Symptoms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center">
                  <Stethoscope className="mr-2 h-5 w-5 text-primary" />
                  Common Symptoms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {symptoms.map((symptom, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Important Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm">
                    <strong>Timing:</strong> Gout attacks often begin suddenly at night or early morning, 
                    reaching peak intensity within 12-24 hours.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm">
                    <strong>Duration:</strong> Untreated episodes typically last 7-14 days before 
                    gradually resolving, even without treatment.
                  </p>
                </div>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm">
                    <strong>Recovery:</strong> Between attacks, patients usually experience complete 
                    resolution of symptoms and normal joint function.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stages of Gout */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            Stages of Gout Progression
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stages.map((stage, index) => {
              const IconComponent = stage.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-heading">{stage.title}</CardTitle>
                    <CardDescription>{stage.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{stage.details}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-heading text-lg font-semibold mb-2">Good News!</h3>
            <p className="text-gray-700">
              The progression through these stages is not inevitable. With appropriate treatment, 
              people diagnosed at any stage can achieve excellent control of their symptoms and 
              prevent advancement to more severe forms of the disease.
            </p>
          </div>
        </div>
      </section>

      {/* Risk Factors */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            Risk Factors for Gout
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {riskFactors.map((factor, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-gray-700">{factor}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              While some risk factors like genetics and age cannot be changed, many others can be 
              modified through lifestyle changes, making gout a highly preventable and manageable condition.
            </p>
          </div>
        </div>
      </section>

      {/* Diagnosis */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            Getting Diagnosed
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Diagnostic Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Joint Fluid Analysis (Gold Standard)</h4>
                  <p className="text-sm text-gray-600">
                    Examination of joint fluid under polarized light microscopy to identify 
                    characteristic uric acid crystals.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Blood Tests</h4>
                  <p className="text-sm text-gray-600">
                    Measuring serum uric acid levels, though normal levels don't rule out gout 
                    and high levels don't confirm it.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Imaging Studies</h4>
                  <p className="text-sm text-gray-600">
                    X-rays, ultrasound, or dual-energy CT scans can detect crystal deposits 
                    and joint damage.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">When to See a Doctor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Badge variant="destructive" className="mb-4">Seek Immediate Care If:</Badge>
                  <ul className="space-y-2 text-sm">
                    <li>• Sudden, severe joint pain with fever</li>
                    <li>• Joint appears infected (very red, hot, swollen)</li>
                    <li>• Unable to bear weight or use the joint</li>
                    <li>• Symptoms don't improve after 2-3 days</li>
                  </ul>
                  <div className="mt-6">
                    <Badge variant="secondary" className="mb-4">Schedule Appointment For:</Badge>
                    <ul className="space-y-2 text-sm">
                      <li>• Recurrent joint pain and swelling</li>
                      <li>• Family history of gout</li>
                      <li>• Multiple risk factors present</li>
                      <li>• Questions about prevention</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnderstandingGout;

