module.exports = {
  apps: [
    {
      name: "frontend",
      script: "npm",
      args: "run start",
      watch: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
