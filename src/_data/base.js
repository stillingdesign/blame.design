module.exports = {
    url: process.env.URL || "http://localhost:8080",
    domain: "https://saasmarketing.site",
    name: "Acme",

    twitterHandle: "@acme",
    twitterLink: "https://twitter.com/acme",
    githubLink: "https://github.com/acme",
    linkedinLink: "https://www.linkedin.com/company/acme/",

    salesLink: "/request-demo/",
    salesText: "Get a demo",

    signupLink: "/signup/",
    signupText: "Try for free",

    loginLink: "/login/",
    loginText: "Login",

    // Current year
    currentYear() {
        const today = new Date();
        return today.getFullYear();
    }
};