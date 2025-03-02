module.exports = {
  schema: [
    {
      "https://your-graphql-endpoint.com/graphql": {
        headers: {
          Authorization: "Bearer YOUR_ACCESS_TOKEN"
        }
      }
    }
  ],
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"]
    }
  }
};
