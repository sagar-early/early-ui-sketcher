import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const researchPapers = [
    {
      id: 1,
      title: "GLP-1 Therapies: A Review of Clinical Trials",
      subtitle: "THE JOURNAL OF ENDOCRINOLOGY AND METABOLISM",
      keyFindings: [
        "Semaglutide (Wegovy) resulted in significant weight loss of up to 14.9% in the landmark STEP trials.",
        "Tirzepatide (Zepbound), a dual-action agent, achieved even greater weight loss of up to 26.6% in SURMOUNT trials.",
        "Earlier therapies like Liraglutide (Saxenda) demonstrated weight loss of up to 8%, establishing the foundation for GLP-1 treatment."
      ],
      slug: "glp1-therapies-clinical-trials",
      link: "https://www.e-enm.org/journal/view.php?doi=10.3803/EnM.2024.1940"
    },
    {
      id: 2,
      title: "Tirzepatide Once Weekly for the Treatment of Obesity",
      subtitle: "THE NEW ENGLAND JOURNAL OF MEDICINE",
      keyFindings: [
        "Patients on the highest dose (15mg) lost an average of 20.9% of their starting body weight over 72 weeks.",
        "The 10mg dose group saw an average weight loss of 19.5%, while the 5mg group lost 15.0%.",
        "About half of the individuals on higher doses lost 20% or more of their body weight, a result achieved by only 3% on placebo."
      ],
      slug: "surmount-1-weight-loss",
      link: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038"
    },
    {
      id: 3,
      title: "Sustained Weight Loss with Tirzepatide (3-Year Trial)",
      subtitle: "LILLY RESEARCH",
      keyFindings: [
        "Demonstrated remarkable and sustained weight loss, with patients losing an average of 22.9% over 3 years.",
        "This represents the longest and most sustained weight loss observed in any major obesity medicine trial to date.",
        "This durable weight loss was associated with a 94% reduction in the risk of progressing to type 2 diabetes."
      ],
      slug: "sustained-weight-loss-diabetes-prevention",
      link: "https://investor.lilly.com/node/51561/pdf"
    },
    {
      id: 4,
      title: "Tirzepatide for Weight Reduction in Asian Adults",
      subtitle: "THE SURMOUNT-CN RANDOMIZED CLINICAL TRIAL",
      keyFindings: [
        "Participants lost up to 17.5% of their body weight over 52 weeks, confirming strong efficacy in this population.",
        "A significant 86% of individuals taking Tirzepatide lost at least 5% of their body weight.",
        "The study confirmed Tirzepatide as a powerful option, showing similar effectiveness to global studies."
      ],
      slug: "surmount-cn-asian-adults",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11337071/"
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
      {/* Hero Section with Lab Background Image */}
      <section className="relative py-32 px-6 overflow-hidden min-h-[60vh]">
        {/* Desktop Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
          style={{
            backgroundImage: `url('/lovable-uploads/1c6ac411-d667-48a3-8fe7-8fccb81efd98.png')`
          }}
        ></div>
        
        {/* Mobile Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{
            backgroundImage: `url('/lovable-uploads/e5a03ac4-9fcc-4fef-b259-8617a1623a58.png')`
          }}
        ></div>
        
        {/* Overlays for text readability and mirror effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-warm/80 via-light-neutral/70 to-neutral-gray/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-warm/90 via-transparent to-warm/50"></div>
        
        {/* Mirror effect overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm to-transparent"></div>
        <div class="flex justify-center">
        <div className="relative max-w-4xl mx-auto text-left z-10 pl-8 md:pl-12">
          <p className="font-satoshi text-sm md:text-base text-black mb-3 tracking-wider uppercase">
            RESEARCH
          </p>
          <h1 className="font-unna text-5xl md:text-7xl lg:text-8xl text-black mb-8 leading-tight">
            Early is grounded in science.
          </h1>
          <p className="font-satoshi text-lg md:text-xl lg:text-2xl leading-relaxed text-black max-w-3xl">
            The Early program is built on a deep, biological understanding of weight management. 
            Explore the peer-reviewed research that powers our approach to sustainable weight loss.
          </p>
        </div>
        </div>
      </section>

      {/* Our Most Impactful Studies Section */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-unna text-3xl md:text-4xl text-black mb-4">
              Our Most Impactful Studies
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchPapers.map((paper) => (
              <div
                key={paper.id}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group border hover:border-[#79855F]"
                onClick={() => window.open(paper.link, '_blank')}
              >
                <h3 className="font-unna text-xl md:text-2xl text-black mb-2 group-hover:text-black leading-tight">
                  {paper.title}
                </h3>
                
                <h4 className="font-satoshi text-xs md:text-sm text-black mb-6 tracking-wider uppercase">
                  {paper.subtitle}
                </h4>
                
                <ul className="space-y-4 mb-6">
                  {paper.keyFindings.map((finding, index) => (
                    <li key={index} className="font-satoshi text-sm md:text-base text-black leading-relaxed flex items-start">
                      <span className="inline-block w-2 h-2 bg-[#79855F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {finding}
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-end">
                  <span className="font-satoshi text-base text-[#79855F] hover:text-[#6b7552] transition-colors group-hover:underline">
                    Full Study →
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
