module.exports = {
  apps : [
    {
      name: "pws",
      script: "/build/index.js",
      watch: true,
      env: {
        "HOST": "127.0.0.1",
        "PORT": "3500",
        "NODE_ENV": "production",
      }
    }
  ]
}
