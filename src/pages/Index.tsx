
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const researchPapers = [
    {
      id: 1,
      title: "GLP-1 Therapies: A New Horizon in Obesity Management",
      keyFindings: [
        "GLP-1 based therapies like Semaglutide (Wegovy) and Liraglutide (Saxenda) have shown significant weight loss of up to 14.9% and 8% respectively in major clinical trials.",
        "Newer dual-action therapies like Tirzepatide (Zepbound) are setting higher benchmarks, achieving weight loss of up to 26.6% in trials.",
        "Beyond weight loss, these medications demonstrate proven benefits for heart health and improving key metabolic factors like blood sugar."
      ],
      slug: "glp1-therapies-obesity-management"
    },
    {
      id: 2,
      title: "Tirzepatide Once Weekly for the Treatment of Obesity",
      keyFindings: [
        "Patients taking the 15mg dose of Tirzepatide lost an average of 20.9% of their body weight over 72 weeks, compared to just 3.1% with a placebo.",
        "Nearly 9 out of 10 participants lost at least 5% of their body weight, and about half of those on higher doses lost 20% or more.",
        "The treatment also led to significant improvements in blood glucose, cholesterol, and other important health markers."
      ],
      slug: "surmount-1-weight-loss"
    },
    {
      id: 3,
      title: "Sustained Weight Loss with Tirzepatide and Diabetes Prevention",
      keyFindings: [
        "In a groundbreaking 3-year trial, patients treated with Tirzepatide achieved remarkable and sustained weight loss, with an average loss of 22.9% at the highest dose.",
        "The results represent the longest and most sustained weight loss from any obesity medicine trial to date, demonstrating long-term effectiveness.",
        "Critically, treatment was associated with a 94% reduction in the risk of developing type 2 diabetes compared to placebo."
      ],
      slug: "sustained-weight-loss-diabetes-prevention"
    },
    {
      id: 4,
      title: "Tirzepatide for Weight Reduction in Chinese Adults With Obesity (SURMOUNT-CN)",
      keyFindings: [
        "This study confirmed Tirzepatide's powerful effects in a specific population, with Chinese adults losing up to 17.5% of their body weight over 52 weeks.",
        "86% of participants achieved a clinically meaningful weight loss of at least 5%, reinforcing the drug's reliability across different populations.",
        "The treatment also significantly reduced waist size and improved health markers crucial for populations with high metabolic risk."
      ],
      slug: "surmount-cn-chinese-adults"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to GLP-1 Medications",
      excerpt: "Everything you need to know about how these medications work and what to expect.",
      author: "Dr. Sarah Chen",
      date: "Dec 15, 2024",
      image: "/api/placeholder/300/200",
      slug: "glp1-complete-guide"
    },
    {
      id: 2,
      title: "Optimizing Your Diet During Treatment",
      excerpt: "Evidence-based meal planning strategies for maximum weight loss results.",
      author: "Dr. Michael Rodriguez",
      date: "Dec 10, 2024",
      image: "/api/placeholder/300/200",
      slug: "optimizing-diet-treatment"
    },
    {
      id: 3,
      title: "Exercise Guidelines for Sustainable Results",
      excerpt: "The right approach to physical activity that complements your treatment plan.",
      author: "Dr. Lisa Thompson",
      date: "Dec 5, 2024",
      image: "/api/placeholder/300/200",
      slug: "exercise-guidelines"
    },
    {
      id: 4,
      title: "Meal Planning Made Simple",
      excerpt: "Practical tips and recipes for maintaining healthy eating habits long-term.",
      author: "Dr. James Wilson",
      date: "Nov 28, 2024",
      image: "/api/placeholder/300/200",
      slug: "meal-planning-simple"
    }
  ];

  return (
    <div className="min-h-screen bg-warm">
      {/* Hero Section with Background Image */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background with mirror effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-warm via-light-neutral to-neutral-gray opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-warm/80 via-transparent to-warm/60"></div>
        
        {/* Mirror effect overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm to-transparent"></div>
        
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="font-unna text-4xl md:text-6xl text-deep-olive mb-6">
            Science, Not Willpower.
          </h1>
          <p className="font-satoshi text-lg md:text-xl leading-relaxed text-rich-brown max-w-2xl mx-auto">
            The Early program is built on a deep, biological understanding of weight management. 
            Explore the peer-reviewed research that powers our approach to sustainable weight loss.
          </p>
        </div>
      </section>

      {/* Our Most Impactful Studies Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-unna text-3xl md:text-4xl text-deep-olive mb-4">
              Our Most Impactful Studies
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchPapers.map((paper) => (
              <div
                key={paper.id}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group border hover:border-vibrant-lime"
                onClick={() => window.open('#', '_blank')}
              >
                <h3 className="font-unna text-xl md:text-2xl text-deep-olive mb-6 group-hover:text-deep-olive leading-tight">
                  {paper.title}
                </h3>
                
                <ul className="space-y-4 mb-6">
                  {paper.keyFindings.map((finding, index) => (
                    <li key={index} className="font-satoshi text-sm md:text-base text-rich-brown leading-relaxed flex items-start">
                      <span className="inline-block w-2 h-2 bg-vibrant-lime rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {finding}
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-end">
                  <span className="font-satoshi text-base text-vibrant-lime hover:text-darker-lime transition-colors group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Blogs Section */}
      <section className="py-16 px-6 bg-light-neutral">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-unna text-3xl md:text-4xl text-deep-olive mb-4">
              Research Blogs
            </h2>
            <p className="font-satoshi text-lg text-rich-brown">
              Insights, tips, and expert guidance for your weight management journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="h-48 bg-neutral-gray flex items-center justify-center">
                  <span className="text-secondary-gray font-satoshi text-sm">Blog Image</span>
                </div>
                <div className="p-6">
                  <h3 className="font-unna text-lg text-deep-olive mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-satoshi text-sm text-rich-brown mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-secondary-gray font-satoshi">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-deep-olive text-white font-satoshi text-base font-bold px-8 py-3 rounded-full hover:bg-primary-shade transition-all duration-200">
              More Blogs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
