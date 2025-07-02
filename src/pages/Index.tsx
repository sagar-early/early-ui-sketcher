
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const featuredStudies = [
    {
      id: 1,
      studyName: "SURMOUNT-4 Trial",
      keyFinding: "Continuous care prevents the 14% weight regain typically seen when treatment stops, maintaining long-term success.",
      source: "Source: JAMA",
      slug: "surmount-4-weight-regain"
    },
    {
      id: 2,
      studyName: "SURMOUNT-1 Trial",
      keyFinding: "Achieved unprecedented **20.9%** average weight loss with 91% clinical success rate over 72 weeks.",
      source: "Source: NEJM",
      slug: "surmount-1-weight-loss"
    },
    {
      id: 3,
      studyName: "Long-term Safety Analysis",
      keyFinding: "Excellent safety profile demonstrated over 2+ years with minimal adverse effects and sustained benefits.",
      source: "Source: Lancet",
      slug: "safety-analysis"
    },
    {
      id: 4,
      studyName: "Cardiovascular Outcomes Study",
      keyFinding: "Significant improvements in heart health markers, reducing cardiovascular risk by **25%**.",
      source: "Source: Circulation",
      slug: "cardiovascular-outcomes"
    },
    {
      id: 5,
      studyName: "Comparative Effectiveness Research",
      keyFinding: "**3x more effective** than traditional diet and exercise approaches for sustained weight management.",
      source: "Source: Obesity",
      slug: "comparative-effectiveness"
    },
    {
      id: 6,
      studyName: "Metabolic Health Study",
      keyFinding: "Improved insulin sensitivity by **40%** and reduced diabetes risk factors significantly.",
      source: "Source: Diabetes Care",
      slug: "metabolic-health"
    }
  ];

  const filters = [
    "All",
    "GLP-1 Efficacy", 
    "Long-Term Maintenance",
    "Cardiovascular Health",
    "Diet & Nutrition"
  ];

  const allResearchBriefs = [
    {
      id: 1,
      headline: "**20.9%** Average Weight Loss Achieved",
      description: "SURMOUNT-1 Trial - Groundbreaking study demonstrating unprecedented weight loss results with tirzepatide treatment over 72 weeks.",
      category: "GLP-1 Efficacy",
      slug: "surmount-1-weight-loss"
    },
    {
      id: 2,
      headline: "Prevents **14%** Weight Regain",
      description: "SURMOUNT-4 Trial - Long-term study proving continuous therapy maintains weight loss and prevents typical regain patterns.",
      category: "Long-Term Maintenance",
      slug: "surmount-4-weight-regain"
    },
    {
      id: 3,
      headline: "**25%** Reduction in Cardiovascular Risk",
      description: "Cardiovascular Outcomes Study - Comprehensive analysis showing significant heart health improvements beyond weight loss.",
      category: "Cardiovascular Health",
      slug: "cardiovascular-outcomes"
    },
    {
      id: 4,
      headline: "**2+ Years** of Proven Safety",
      description: "Long-term Safety Analysis - Extensive safety data demonstrating excellent tolerability and minimal adverse effects.",
      category: "GLP-1 Efficacy",
      slug: "safety-analysis"
    },
    {
      id: 5,
      headline: "**3x More Effective** Than Traditional Methods",
      description: "Comparative Effectiveness Research - Head-to-head comparison showing superior outcomes with medical weight management.",
      category: "GLP-1 Efficacy",
      slug: "comparative-effectiveness"
    },
    {
      id: 6,
      headline: "**40%** Improvement in Insulin Sensitivity",
      description: "Nutritional Optimization Study - Evidence-based dietary strategies that maximize treatment outcomes and metabolic health.",
      category: "Diet & Nutrition",
      slug: "nutritional-optimization"
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

  const filteredBriefs = activeFilter === "All" 
    ? allResearchBriefs 
    : allResearchBriefs.filter(brief => brief.category === activeFilter);

  const scrollToResearch = (slug: string) => {
    const element = document.getElementById('research-library');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderKeyFinding = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-deep-olive">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-warm">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-unna text-4xl md:text-6xl text-deep-olive mb-6">
            Science, Not Willpower.
          </h1>
          <p className="font-satoshi text-lg md:text-xl leading-relaxed text-rich-brown max-w-2xl mx-auto">
            The Early program is built on a deep, biological understanding of weight management. 
            Explore the peer-reviewed research that powers our approach to sustainable weight loss.
          </p>
        </div>
      </section>

      {/* Featured Research Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-unna text-3xl md:text-4xl text-deep-olive mb-4">
              Our Most Impactful Studies
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStudies.map((study) => (
              <div
                key={study.id}
                onClick={() => scrollToResearch(study.slug)}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg hover:scale-105 hover:border-2 hover:border-vibrant-lime transition-all duration-300 cursor-pointer group"
              >
                <h3 className="font-unna text-xl text-deep-olive mb-3 group-hover:text-deep-olive">
                  {study.studyName}
                </h3>
                <p className="font-satoshi text-base text-rich-brown mb-4 leading-relaxed">
                  {renderKeyFinding(study.keyFinding)}
                </p>
                <p className="font-satoshi text-sm italic text-secondary-gray">
                  {study.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Library Section */}
      <section id="research-library" className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-unna text-3xl md:text-4xl text-deep-olive mb-8">
              Explore Our Research Library
            </h2>
            
            <div className="flex justify-center flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 md:px-6 py-3 rounded-full font-satoshi text-sm md:text-base font-bold transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-deep-olive text-white'
                      : 'bg-neutral-gray text-deep-olive hover:bg-light-lime'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBriefs.map((brief) => (
              <div
                key={brief.id}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-unna text-xl text-deep-olive mb-3">
                  {renderKeyFinding(brief.headline)}
                </h3>
                <p className="font-satoshi text-base text-rich-brown mb-4 leading-relaxed">
                  {brief.description}
                </p>
                <Link
                  to={`/research/${brief.slug}`}
                  className="font-satoshi text-base text-vibrant-lime hover:text-darker-lime hover:underline transition-colors"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="py-12 px-6 bg-light-neutral">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-unna text-3xl md:text-4xl text-deep-olive mb-4">
              Latest Blogs
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
