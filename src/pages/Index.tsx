
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const featuredStudies = [
    {
      id: 1,
      question: "Will I Regain the Weight?",
      studyName: "The SURMOUNT-4 Trial",
      keyFinding: "Continuous care prevents weight regain.",
      source: "Source: JAMA",
      slug: "surmount-4-weight-regain"
    },
    {
      id: 2,
      question: "How Much Weight Can I Lose?",
      studyName: "The SURMOUNT-1 Trial",
      keyFinding: "20.9% average weight loss achieved.",
      source: "Source: NEJM",
      slug: "surmount-1-weight-loss"
    },
    {
      id: 3,
      question: "Is This Treatment Safe?",
      studyName: "Long-term Safety Analysis",
      keyFinding: "Excellent safety profile over 2+ years.",
      source: "Source: Lancet",
      slug: "safety-analysis"
    },
    {
      id: 4,
      question: "Will My Health Improve?",
      studyName: "Cardiovascular Outcomes Study",
      keyFinding: "Significant improvements in heart health.",
      source: "Source: Circulation",
      slug: "cardiovascular-outcomes"
    },
    {
      id: 5,
      question: "How Does This Compare?",
      studyName: "Comparative Effectiveness Research",
      keyFinding: "Superior to traditional approaches.",
      source: "Source: Obesity",
      slug: "comparative-effectiveness"
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
      title: "SURMOUNT-1: Tirzepatide for Weight Management",
      summary: "Groundbreaking trial demonstrating 20.9% average weight loss with tirzepatide treatment.",
      category: "GLP-1 Efficacy",
      slug: "surmount-1-weight-loss"
    },
    {
      id: 2,
      title: "SURMOUNT-4: Preventing Weight Regain",
      summary: "Long-term study showing sustained weight loss with continuous GLP-1 therapy.",
      category: "Long-Term Maintenance",
      slug: "surmount-4-weight-regain"
    },
    {
      id: 3,
      title: "Cardiovascular Benefits of GLP-1 Agonists",
      summary: "Comprehensive analysis of heart health improvements beyond weight loss.",
      category: "Cardiovascular Health",
      slug: "cardiovascular-outcomes"
    },
    {
      id: 4,
      title: "Safety Profile of Modern Weight Management",
      summary: "Two-year safety analysis demonstrating excellent tolerability and minimal adverse effects.",
      category: "GLP-1 Efficacy",
      slug: "safety-analysis"
    },
    {
      id: 5,
      title: "Comparative Effectiveness: GLP-1 vs Traditional Methods",
      summary: "Head-to-head comparison showing superior outcomes with medical weight management.",
      category: "GLP-1 Efficacy",
      slug: "comparative-effectiveness"
    },
    {
      id: 6,
      title: "Nutritional Optimization During Treatment",
      summary: "Evidence-based dietary strategies to maximize weight loss outcomes.",
      category: "Diet & Nutrition",
      slug: "nutritional-optimization"
    }
  ];

  const filteredBriefs = activeFilter === "All" 
    ? allResearchBriefs 
    : allResearchBriefs.filter(brief => brief.category === activeFilter);

  const scrollToResearch = (slug: string) => {
    // Smooth scroll to research library section
    const element = document.getElementById('research-library');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-warm">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-unna text-6xl text-deep-olive mb-6">
            Science, Not Willpower.
          </h1>
          <p className="font-satoshi text-xl leading-relaxed text-rich-brown max-w-2xl mx-auto">
            The Early program is built on a deep, biological understanding of weight management. 
            Explore the peer-reviewed research that powers our approach to sustainable weight loss.
          </p>
        </div>
      </section>

      {/* Featured Research Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-unna text-4xl text-deep-olive mb-4">
              Our Most Impactful Studies
            </h2>
          </div>
          
          <div className="grid grid-cols-5 gap-6">
            {featuredStudies.map((study) => (
              <div
                key={study.id}
                onClick={() => scrollToResearch(study.slug)}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg hover:scale-105 hover:border-2 hover:border-vibrant-lime transition-all duration-300 cursor-pointer group"
              >
                <h3 className="font-unna text-xl text-deep-olive mb-3 group-hover:text-deep-olive">
                  {study.question}
                </h3>
                <p className="font-satoshi text-base font-bold text-primary-shade mb-2">
                  {study.studyName}
                </p>
                <p className="font-satoshi text-base text-rich-brown mb-3">
                  {study.keyFinding}
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
      <section id="research-library" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-unna text-4xl text-deep-olive mb-8">
              Explore Our Research Library
            </h2>
            
            <div className="flex justify-center flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-satoshi text-base font-bold transition-all duration-200 ${
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

          <div className="grid grid-cols-3 gap-8">
            {filteredBriefs.map((brief) => (
              <div
                key={brief.id}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-unna text-xl text-deep-olive mb-3">
                  {brief.title}
                </h3>
                <p className="font-satoshi text-base text-rich-brown mb-4 leading-relaxed">
                  {brief.summary}
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
    </div>
  );
};

export default Index;
