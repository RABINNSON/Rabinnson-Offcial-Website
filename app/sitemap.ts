import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.rabinnson.com";

    // Static & Top Level Pages
    const staticPages = [
        "",
        "/about",
        "/contact",
        "/services",
        "/start-generating-your-idea",
        "/start-business",
        "/manage-business",
        "/expand-business",
        "/industry",
        "/platforms",
    ];

    // Who We Are
    const whoWeArePages = [
        "/about/brand",
        "/about/leadership",
        "/about/teams",
        "/about/awards",
        "/about/partners",
        "/about/community",
        "/about/sustainability",
        "/about/inclusion",
        "/about/values",
    ];

    // Manage Business
    const manageBusinessPages = [
        "/manage-business/office/virtual-office",
        "/manage-business/office/coworking-space",
        "/manage-business/office/meeting-room",
        "/manage-business/office/facility-management",
        "/manage-business/people/hiring-recruitment",
        "/manage-business/people/payroll-management",
        "/manage-business/people/people-management",
        "/manage-business/people/project-management",
        "/manage-business/people/employee-engagement",
        "/manage-business/people/employee-finance",
        "/manage-business/product/mvp-designing",
        "/manage-business/product/pmf-planning",
        "/manage-business/product/concept-creation",
        "/manage-business/product/training-assessment",
        "/manage-business/strategy/decision-making",
        "/manage-business/strategy/funding-advisory",
        "/manage-business/strategy/financial-planning",
        "/manage-business/performance/cost-management",
        "/manage-business/performance/cash-flow",
        "/manage-business/performance/budgeting",
        "/manage-business/tax/tax-planning",
        "/manage-business/tax/ca-services",
    ];

    // Services
    const servicesPages = [
        "/services/consulting/business-consulting",
        "/services/consulting/systems-integration",
        "/services/consulting/managed-it-services",
        "/services/consulting/application-services",
        "/services/consulting/infrastructure-services",
        "/services/consulting/business-process-services",
        "/services/technology/artificial-intelligence",
        "/services/technology/data-analytics",
        "/services/technology/cloud-service",
        "/services/technology/cognitive-operations",
        "/services/technology/cybersecurity",
        "/services/technology/enterprise-iot",
        "/services/technology/digital-engineering",
        "/services/technology/network-solutions",
        "/services/technology/sustainability-services",
        "/services/talent/talent-solutions",
        "/services/development/web/static-website",
        "/services/development/web/dynamic-website",
        "/services/development/web/ecommerce-website",
        "/services/development/web/crm-portal",
        "/services/development/mobile/app-development",
        "/services/development/mobile/custom-software",
        "/services/marketing/seo",
        "/services/marketing/sms-email",
        "/services/marketing/whatsapp",
        "/services/marketing/lead-generation",
        "/services/marketing/social-verification",
        "/services/marketing/telecom-display",
        "/services/marketing/information-broadcasting",
        "/services/design/logo-design",
        "/services/design/product-catalogue",
        "/services/design/presentation",
        "/services/design/infographic-video",
        "/services/design/product-video",
        "/services/design/graphic-design",
    ];

    // Industry
    const industryPages = [
        "/industry/financial-services/banking-capital-markets",
        "/industry/financial-services/insurance",
        "/industry/media-education/communications-media-information-services",
        "/industry/media-education/education",
        "/industry/resources-sustainability/environment",
        "/industry/resources-sustainability/energy-resources-utilities",
        "/industry/resources-sustainability/manufacturing",
        "/industry/health-public/healthcare",
        "/industry/health-public/life-sciences",
        "/industry/health-public/public-services",
        "/industry/health-public/retail",
        "/industry/health-public/travel-logistics",
    ];

    // Platforms
    const platformsPages = [
        "/platforms/products/consys",
        "/platforms/products/ytof",
        "/platforms/products/ivr",
        "/platforms/products/ib",
        "/platforms/plans/rewards-hub",
        "/platforms/plans/rewards-123",
        "/platforms/plans/suraksha",
        "/platforms/plans/traveller",
        "/platforms/security/safe-pay",
        "/platforms/security/fraud-alarm",
        "/platforms/payments/auto",
        "/platforms/payments/recharges",
        "/platforms/payments/bills",
    ];

    // Start - Incorporate
    const incorporatePages = [
        "/start/incorporate/sole-proprietorship",
        "/start/incorporate/partnership-registration",
        "/start/incorporate/llp-registration",
        "/start/incorporate/one-person-company-registration",
        "/start/incorporate/section-8-company-ngo",
        "/start/incorporate/trust-registration",
        "/start/incorporate/society-registration",
        "/start/incorporate/nidhi-company-registration",
        "/start/incorporate/dubai-business-registration",
        "/start/incorporate/foreign-subsidiary",
    ];

    // Start - License
    const licensePages = [
        "/start/license/iecregistration",
        "/start/license/fssailicense",
        "/start/license/trade-licenses",
        "/start/license/factory-licenses",
        "/start/license/startup-india-registration",
        "/start/license/msmeregistration",
        "/start/license/isocertification",
        "/start/license/make-in-india",
    ];

    // Start - Tax
    const taxPages = [
        "/start/tax/gstregistration",
        "/start/tax/pantanapplication",
        "/start/tax/registration12a80g",
        "/start/tax/rcmcregistration",
        "/start/tax/shop-establishment",
        "/start/tax/professional-tax",
        "/start/tax/pfregistration",
        "/start/tax/esicregistration",
    ];

    // Start - File
    const filePages = [
        "/start/file/accounting-taxation",
        "/start/file/accounting-book-keeping",
        "/start/file/gst-filings",
        "/start/file/tds-withholding-tax",
        "/start/file/income-tax-returns",
    ];

    // Start - Legal
    const legalPages = [
        "/start/legal/ipr/trademark-registration",
        "/start/legal/ipr/trademark-objection",
        "/start/legal/ipr/patent-registration",
        "/start/legal/ipr/copyright-registration",
        "/start/legal/agreements/code-of-conduct",
        "/start/legal/agreements/company-policy",
        "/start/legal/agreements/employment-agreement",
        "/start/legal/agreements/mou",
        "/start/legal/agreements/letter-of-intent",
        "/start/legal/agreements/customer-vendor-agreement",
        "/start/legal/agreements/terms-of-use",
        "/start/legal/agreements/founders-agreement",
        "/start/legal/agreements/nda",
        "/start/legal/agreements/transfer-pricing-agreement",
        "/start/legal/agreements/privacy-policy",
        "/start/legal/agreements/fair-use-policy",
        "/start/legal/agreements/eula",
        "/start/legal/agreements/developer-owner-agreement",
        "/start/legal/agreements/service-level-agreement",
        "/start/legal/agreements/master-service-agreement",
        "/start/legal/agreements/product-sale-agreement",
    ];

    // Start - Fund
    const fundPages = [
        "/start/fund/fundraising-documentation/vcs-or-hnis",
        "/start/fund/fundraising-documentation/startup-grants-loans",
        "/start/fund/fundraising-documentation/valuation-certificate",
        "/start/fund/fundraising-documentation/financial-projections-services",
        "/start/fund/fundraising-documentation/pitch-deck",
        "/start/fund/fundraising-documentation/dprservices",
        "/start/fund/compliance/secretarial-compliance-fundraising",
        "/start/fund/compliance/fundraising-secretarial-compliance",
        "/start/fund/compliance/term-sheet-and-sha",
        "/start/fund/compliance/due-diligence",
        "/start/fund/advisory/government-grant-advisory-services",
    ];

    // Start - Generate
    const generatePages = [
        "/generate",
    ];

    // Combine all pages
    const allPages = [
        ...staticPages,
        ...whoWeArePages,
        ...manageBusinessPages,
        ...servicesPages,
        ...industryPages,
        ...platformsPages,
        ...incorporatePages,
        ...licensePages,
        ...taxPages,
        ...filePages,
        ...legalPages,
        ...fundPages,
        ...generatePages,
    ];

    return allPages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
    }));
}
