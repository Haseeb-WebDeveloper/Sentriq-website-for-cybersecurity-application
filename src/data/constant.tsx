import { Shield, Zap, Bell, Handshake, DollarSign, Lock, CheckCircle } from "lucide-react";

export const features = [
    {
      icon: Shield,
      title: "Real-time Protection",
      description: "Engage in real-time, natural conversations to receive expert cybersecurity guidance tailored to your needs."
    },
    {
      icon: Shield,
      title: "24/7 Cybersecurity Support", 
      description: "Always available to provide instant advice and recommendations, eliminating the need for scheduled consultations."
    },
    {
      icon: Zap,
      title: "Risk Assessments ",
      description: "Get personalized tips for securing home networks, devices, and meeting compliance standards like NIST CSF, GDPR, and more."
    },
    {
      icon: Bell,
      title: "Custom Alerts and Notifications",
      description: "Stay informed with real-time alerts about security risks and compliance gaps to take timely action."
    },
    {
      icon: Handshake,
      title: "Seamless Human Escalations",
      description: "For complex issues, easily escalate to certified human consultants with all context passed along for a smooth experience."
    },
    {
      icon: DollarSign,
      title: "Affordable and Accessible Cybersecurity",
      description: "Expert-level cybersecurity at a fraction of traditional costs, making it easy for SMBs and individuals to secure their digital environments."
    }
  ];
  


export const plans = [
    {
      name: 'Basic',
      price: '9.99',
      description: 'Perfect for personal use and small devices',
      features: [
        'Real-time threat monitoring',
        'Basic AI analysis',
        'Email notifications',
        '24/7 system scanning',
        'Up to 2 devices'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '19.99',
      description: 'Ideal for professionals and small teams',
      features: [
        'Everything in Basic',
        'Advanced AI detection',
        'Priority response',
        'Custom security rules',
        'Up to 5 devices',
        'Premium support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '49.99',
      description: 'For organizations requiring maximum security',
      features: [
        'Everything in Pro',
        'Custom AI training',
        'API access',
        'Dedicated support team',
        'Unlimited devices',
        'Advanced analytics',
        'Custom integration'
      ],
      popular: false
    }
  ];

export const formContent = {
  title: "Your Cybersecurity Consultant, On Demand",
  description: "SentrIQ is an AI-powered cybersecurity assistant that acts like a 24/7 consultant—providing expert guidance, risk assessments, and compliance support tailored to your small business needs.",
  benefits: [
    {
      icon: Shield,
      title: "24/7 Expert Guidance",
      description: "Get instant access to AI-powered cybersecurity expertise anytime, anywhere"
    },
    {
      icon: Lock,
      title: "Tailored Solutions",
      description: "Receive personalized security recommendations for your specific business needs"
    },
    {
      icon: CheckCircle,
      title: "Compliance Support",
      description: "Stay compliant with industry standards and regulations effortlessly"
    }
  ],
  industries: [
    "Technology",
    "Healthcare",
    "Finance",
    "Retail",
    "Manufacturing",
    "Professional Services",
    "Education",
    "Non-Profit",
    "Other"
  ]
};