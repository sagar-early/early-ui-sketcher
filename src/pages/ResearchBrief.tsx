
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";

const ResearchBrief = () => {
  const { slug } = useParams();

  // Mock data - in a real app this would come from an API or CMS
  const researchData = {
    "surmount-1-weight-loss": {
      breadcrumb: "Research > GLP-1 Efficacy > SURMOUNT-1 Trial",
      title: "Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1)",
      bottomLine: "The SURMOUNT-1 trial demonstrated that tirzepatide, a dual GIP/GLP-1 receptor agonist, achieved unprecedented weight loss results. Participants lost an average of 20.9% of their body weight over 72 weeks, with some losing up to 25% or more. This represents the most significant weight loss ever achieved in a clinical trial for obesity treatment.",
      keyFindings: [
        {
          icon: "📊",
          title: "20.9% Average Weight Loss",
          description: "Patients on the 15mg dose lost over one-fifth of their body weight on average."
        },
        {
          icon: "⚖️",
          title: "Superior to All Comparators",
          description: "Results exceeded all previous obesity medications and lifestyle interventions."
        },
        {
          icon: "✅",
          title: "91% Clinical Success Rate",
          description: "9 out of 10 participants achieved clinically meaningful weight loss (≥5%)."
        },
        {
          icon: "❤️",
          title: "Improved Health Markers",
          description: "Significant improvements in blood pressure, cholesterol, and diabetes risk factors."
        }
      ],
      citation: {
        text: "Jastreboff, A. M., et al. (2022). Tirzepatide Once Weekly for the Treatment of Obesity. New England Journal of Medicine, 387(3), 205-216.",
        title: "Tirzepatide Once Weekly for the Treatment of Obesity",
        url: "https://pubmed.ncbi.nlm.nih.gov/35658024/"
      }
    },
    "surmount-4-weight-regain": {
      breadcrumb: "Research > Long-Term Maintenance > SURMOUNT-4 Trial",
      title: "Effect of Continuous vs Withdrawal Tirzepatide Treatment (SURMOUNT-4)",
      bottomLine: "The SURMOUNT-4 study specifically addressed the critical question of weight maintenance after successful weight loss. Participants who continued tirzepatide treatment maintained their weight loss, while those who switched to placebo regained significant weight. This landmark study proves that continuous medical support prevents the weight regain that typically occurs with traditional approaches.",
      keyFindings: [
        {
          icon: "📊",
          title: "Maintained 25% Weight Loss",
          description: "Participants who continued treatment sustained their remarkable weight loss achievements."
        },
        {
          icon: "⚖️",
          title: "14% Weight Regain in Placebo Group",
          description: "Those who stopped treatment regained weight, highlighting the importance of continuous care."
        },
        {
          icon: "✅",
          title: "Long-term Safety Confirmed",
          description: "Extended treatment showed excellent safety profile over 88 weeks."
        },
        {
          icon: "❤️",
          title: "Sustained Health Benefits",
          description: "Metabolic improvements persisted throughout the maintenance phase."
        }
      ],
      citation: {
        text: "Jastreboff, A. M., et al. (2022). Effect of Continuous vs Withdrawal Tirzepatide Treatment on Weight Loss Maintenance. JAMA, 327(6), 534-545.",
        title: "Effect of Continuous vs Withdrawal Tirzepatide Treatment on Weight Loss Maintenance",
        url: "https://pubmed.ncbi.nlm.nih.gov/35103762/"
      }
    }
  };

  const currentData = researchData[slug as keyof typeof researchData] || researchData["surmount-1-weight-loss"];

  return (
    <div className="min-h-screen bg-warm">
      <Header />
      
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 py-4">
        <nav className="text-sm font-satoshi text-primary-shade">
          <Link to="/" className="hover:text-deep-olive">Research</Link>
          <span className="mx-2">&gt;</span>
          <Link to="/" className="hover:text-deep-olive">GLP-1 Efficacy</Link>
          <span className="mx-2">&gt;</span>
          <span>SURMOUNT-1 Trial</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Title and Read Full Paper */}
        <div className="mb-8">
          <h1 className="font-unna text-3xl md:text-4xl text-deep-olive mb-6 leading-tight">
            {currentData.title}
          </h1>
          
          <div className="mb-6">
            <a
              href={currentData.citation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-vibrant-lime text-rich-brown font-satoshi text-base font-bold px-6 py-3 rounded-full hover:bg-darker-lime transition-all duration-200"
            >
              📄 Read Full Paper
            </a>
          </div>
        </div>

        {/* The Bottom Line Section */}
        <section className="mb-8">
          <div className="bg-neutral-gray rounded-lg p-6">
            <h2 className="font-unna text-2xl text-deep-olive mb-4">
              Summary
            </h2>
            <p className="font-satoshi text-base leading-relaxed text-rich-brown">
              {currentData.bottomLine}
            </p>
          </div>
        </section>

        {/* Key Findings Section */}
        <section className="mb-8">
          <h2 className="font-unna text-2xl text-deep-olive mb-6">
            Key Findings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentData.keyFindings.map((finding, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start space-x-3">
                  <span className="text-xl text-muted-lavender flex-shrink-0 mt-1">
                    {finding.icon}
                  </span>
                  <div>
                    <h3 className="font-satoshi text-base font-bold text-rich-brown mb-1">
                      {finding.title}
                    </h3>
                    <p className="font-satoshi text-sm text-rich-brown leading-relaxed">
                      {finding.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Source & Citation Section */}
        <section className="mb-12">
          <div className="bg-light-neutral rounded-lg p-6">
            <h3 className="font-satoshi text-base font-bold text-rich-brown mb-2">Full Citation:</h3>
            <p className="font-satoshi text-sm text-rich-brown">
              {currentData.citation.text}
            </p>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center py-12 bg-light-neutral rounded-lg">
          <h2 className="font-unna text-2xl md:text-3xl text-deep-olive mb-6">
            Ready to start your science-backed journey?
          </h2>
          <button className="bg-deep-olive text-white font-satoshi text-lg font-bold px-12 py-4 rounded-full hover:bg-primary-shade hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl">
            Start EARLY
          </button>
        </section>
      </main>
    </div>
  );
};

export default ResearchBrief;
