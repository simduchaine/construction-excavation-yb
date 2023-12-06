import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: process.env.TINACMS_CLIENT_ID, // Get this from tina.io
  token: process.env.TINACMS_TOKEN, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    }
  },
  schema: {
    collections: [
      {
        name: "services",
        label: "Services",
        path: "content/services",
        fields: [
          {
            name: 'Icon',
            type: 'image',
            label: 'Icone',
          },
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isBody: true,
          }
        ],
      },
      {
        name: "temoignages",
        label: "Témoignages",
        path: "content/temoignages",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Nom",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "city",
            label: "Ville",
            required: true,
          },
          {
            type: "rich-text",
            name: "temoignage",
            label: "Témoignage",
            isBody: true,
          }
        ],
      },
      {
        name: "realisations",
        label: "Réalisations",
        path: "content/realisations",
        fields: [
          {
            name: 'image',
            type: 'image',
            label: 'Photo',
          },
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isBody: true,
          },
          {
            type: 'string',
            name: 'categorie',
            label: 'Catégorie',
            list: true,
            options: [
              {
                value: "toiture",
                label: "Toiture"
              },
              {
                value: "terasse",
                label: "Terasse et Patio"
              },
              {
                value: "revetement",
                label: "Revêtement Extérieur"
              },
              {
                value: "renovation",
                label: "Rénovation Résidentielle"
              },
              {
                value: "paysagement",
                label: "Paysagement"
              },
              {
                value: "apres-sinistre",
                label: "Construction après sinistre"
              }
            ]
          }
        ],
      },
    ],
  },
});
