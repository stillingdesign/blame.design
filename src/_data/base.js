module.exports = {
    url: process.env.URL || "http://localhost:8080",
    domain: "https://blame.design",
    name: "Blame",
    env: process.env.ENVIRONMENT || "local",

    twitterHandle: "@goblamedesign",
    twitterLink: "https://twitter.com/blamedesign",
    githubLink: "https://github.com/stillingdesign/blame.design/",
    linkedinLink: "https://www.linkedin.com/company/blame/",
    instagramLink: "https://www.instagram.com/blame_design",

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