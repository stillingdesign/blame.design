const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const mdPrism = require('markdown-it-prism');
const mdAnchor = require('markdown-it-anchor');
const slugify = require("slugify");
const Normalizer = require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (eleventyConfig) => {

    // Markdown setup and plugins

    const nw = new Normalizer({
        'remove-trailing': true,
        'remove-indent': true,
        'left-trim': true,
        'right-trim': true,
        'spaces-to-tabs': 4,
        'remove-initial-line-feed': true,
    });
    
    const linkAfterHeader = mdAnchor.permalink.linkAfterHeader({
        class: "anchor",
        symbol: "<span hidden>#</span>",
        style: "aria-labelledby",
    });

    const mdAnchorOptions = {
        level: [2, 3],
        tabIndex: false,
        slugify: (str) => slugify(str, {
            lower: true,
            strict: true,
            remove: /["1234567890]/g,
        }),
        permalink: mdAnchor.permalink.linkInsideHeader({
            class: 'anchor',
            symbol: '<span hidden></span>',
        })
    }

    const md = new markdownIt({
        html: true,
        linkify: true,
        typographer: true,
    });
    md.use(mdPrism);
    md.use(mdAnchor, mdAnchorOptions);

    eleventyConfig.setLibrary('md', md);
    eleventyConfig.addFilter('markdown', (value) => {
        return md.render(value);
    });

    // Watch Targets
    eleventyConfig.addWatchTarget("src/assets/sass");
    eleventyConfig.addWatchTarget("src/assets/javascript");

    // Pass throughs
    eleventyConfig.addPassthroughCopy('src/manifest.webmanifest');
    eleventyConfig.addPassthroughCopy('src/_redirects');
    eleventyConfig.addPassthroughCopy({"src/assets/fonts": "assets/fonts"});
    eleventyConfig.addPassthroughCopy({"src/assets/images": "assets/images"});

    // Filters

    eleventyConfig.addFilter("dateShort", (dateObj) => { return DateTime.fromISO(dateObj).toLocaleString(DateTime.DATE_SHORT); });
    eleventyConfig.addFilter("dateFull", (dateObj) => { return DateTime.fromISO(dateObj).toLocaleString(DateTime.DATE_FULL); });
    eleventyConfig.addFilter("limit", function(array, limit) { return array.slice(0, limit); });

    // Remove current post from results

    eleventyConfig.addFilter('removeCurrent', function(collection, title) {
        const filtered = collection.filter(item => item.data.title !== title)
        return filtered;
    });

    // Output
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }

};