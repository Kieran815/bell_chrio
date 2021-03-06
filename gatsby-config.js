module.exports = {
  pathPrefix: "/wang_chiro",
  siteMetadata: {
    title: "Wang Chiropractic",
    contact: {
      phone: "555-555-5555",
      email: "info@example.com",
    },
    menuLinks: [
      {
        name: "About",
        link: "/team",
      },
    ],
    mobileMenuLinks: [
      {
        name: "Services",
        link: "/wang_chiro/services",
      },
      {
        name: "Shop",
        link: "/wang_chiro/items",
      },
      {
        name: "Meet Our Team",
        link: "/wang_chiro/team",
      },
    ],
    serviceLinks: [
      {
        name: "View All Services",
        link: "/wang_chiro/services",
      },
      {
        name: "Primary Care Services",
        link: "/wang_chiro/services/primary_care",
      },
      {
        name: "Decompression",
        link: "/wang_chiro/services/decompression",
      },
      {
        name: "Testosterone  Replacement Therapy",
        link: "/wang_chiro/services/low_t_therapy",
      },
      {
        name: "Car Accidents",
        link: "/wang_chiro/services/accident",
      },
      {
        name: "Medical Certification",
        link: "/wang_chiro/services/med_cert_eval",
      },

      {
        name: "Telemedicine",
        link: "/wang_chiro/services/telemedicine",
      },

      {
        name: "Decompression",
        link: "/wang_chiro/services/decompression",
      },

      {
        name: "DOT Physicals",
        link: "/wang_chiro/services/DOT_physicals",
      },
    ],
    itemLinks: [
      {
        name: "View All Health & Wellness Products",
        link: "/wang_chiro/items",
      },
      {
        name: "Neuro-Pro 250",
        link: "/wang_chiro/items/np_250",
      },
      {
        name: "Neuro-Pro 500",
        link: "/wang_chiro/items/np_500",
      },
      {
        name: "Neuro-Pro CoCo 500",
        link: "/wang_chiro/items/np_coco_500",
      },
      {
        name: "Neuro-Pro 1000",
        link: "/wang_chiro/items/np_1000",
      },
      {
        name: "Neuro-Pro CoCo 1000",
        link: "/wang_chiro/items/np_coco_1000",
      },
      {
        name: "Neuro-Pro 3000",
        link: "/wang_chiro/items/np_3000",
      },
      {
        name: "Neuro-Pro 6000",
        link: "/wang_chiro/items/np_6000",
      },
      {
        name: "Neuro-Pro Gold Capsules (30 ct)",
        link: "/wang_chiro/items/np_cap_gold",
      },
      {
        name: "Neuro-Pro Platinum Capsules (30 ct)",
        link: "/wang_chiro/items/np_cap_plat",
      },
      {
        name: "Neuro-Pro Night Capsules (30 ct)",
        link: "/wang_chiro/items/np_cap_night",
      },
      {
        name: "Bath Bombs",
        link: "/wang_chiro/items/bath_bombs_150",
      },
      {
        name: "Neuro-Pro Massage Lotion 1000",
        link: "/wang_chiro/items/np_lotion_1000",
      },
      {
        name: "Neuro-Pro Massage Oil 1000",
        link: "/wang_chiro/items/np_massage_oil_1000",
      },
      {
        name: "Neuro-Pro Pet 500",
        link: "/wang_chiro/items/np_pet_500",
      },
      {
        name: "Neuro-Pro Pet 1000",
        link: "/wang_chiro/items/np_pet_1000",
      },
      {
        name: "Neuro-Pro Farm",
        link: "/wang_chiro/items/np_pet_farm",
      },
    ],
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-stylus",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
  ],
}
