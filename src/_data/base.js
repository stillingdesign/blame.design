module.exports = {
    url: process.env.URL || "http://localhost:8080",
    domain: "https://blame.design",
    name: "Blame",

    twitterHandle: "@goblamedesign",
    twitterLink: "https://twitter.com/blamedesign",
    githubLink: "https://github.com/stillingdesign",
    linkedinLink: "https://www.linkedin.com/company/blamedesign/",

    salesLink: "/start/",
    salesText: "Start a project",

    signupLink: "/signup/",
    signupText: "Join Blame",

    loginLink: "/login/",
    loginText: "Login",

    // Current year
    currentYear() {
        const today = new Date();
        return today.getFullYear();
    }
};