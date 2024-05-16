---json
{
    "layout": "layouts/_blog-post.njk",
    "seoTitle": "Guide: How to design with scrappy data",
    "seoDescription": "A how-to on analytics data for SaaS marketing websites from some guy who barely passed highschool algebra",
    "ogTitle": "Guide: How to design with scrappy data",
    "ogDesc": "A how-to on analytics data for SaaS marketing websites from some guy who barely passed highschool algebra",
    "ogImage": "/assets/images/og/scrappy-data.jpg",
    "igImage": "/assets/images/blog/scrappy-data-ig.jpg",
    "ogImageAlt": "a man wearing a red striped button up, jeans, and a hat sitting in front of a computer in a dark room filled with plants trying to type code",
    "headline": "How to design with scrappy data",
    "headlineDisplay": "<span class=''>How to design</span> <span class='space:nowrap color:primary-rg'>with scrappy data</span>",
    "description": "A how-to on analytics data for SaaS marketing websites<br class='hidden sm:block'> from some guy who barely passed highschool algebra",
    "summary": "This article advocates for designers to learn coding and adopt a generalist approach, integrating skills like marketing and project management to enhance project execution and value. It challenges traditional specialization, arguing that a broader skill set makes one indispensable and improves outcomes.",
    "date": "",
    "date": "2024-05-07",
    "duration": "12 min read",
    "category": "methods",
    "author": "Mike Stilling",
    "heroPath": "scrappy-data",
    "imageSource": "MidJourney",
    "fauxSocial": "🤷 This guy who doesn't know math just taught me about data...",
    "source": "scrappy-data.md",
    "changefreq": "monthly",
    "tocLabel": "In this article:",
    "toc": [
        {
            "title": "Introduction",
            "link": "#content-start",
            "tag": "p"
        },
        {
            "title": "The importance",
            "link": "#why-knowing-how-to-getread-data-is-important",
            "tag": "h2",
            "items": [
                {
                    "title": "Marketing funnels",
                    "link": "#understand-the-funnel",
                    "tag": "h3"
                },
                {
                    "title": "User Acquisition",
                    "link": "#understand-user-acquisition",
                    "tag": "h3"
                },
                {
                    "title": "Business impact",
                    "link": "#understand-impact",
                    "tag": "h3"
                },
                {
                    "title": "Own your role",
                    "link": "#own-your-role",
                    "tag": "h3"
                }
            ]
        },
        {
            "title": "Get the data",
            "link": "#get-meaningful-data-from-your-work",
            "tag": "h2",
            "items": [
                {
                    "title": "Choose a tool",
                    "link": "#choosing-an-analytics-tool",
                    "tag": "h3"
                },
                {
                    "title": "Decide what's needed",
                    "link": "#determining-what-data-you-need",
                    "tag": "h3"
                },
                {
                    "title": "Implementation",
                    "link": "#implementing-custom-analytics",
                    "tag": "h3"
                }
            ]
        },
        {
            "title": "Start designing",
            "link": "#start-designing-with-data",
            "tag": "h2"
        }
    ]
}
---

Kicking off this article with a little bit of honesty - I'm not a data scientist. In fact, my math skills might leave a lot to be desired. <span class="space:nowrap">I barely</span> made it through high school geometry, so my methods for analyzing data might not be textbook.

Just like my unconventional background, I've noticed that many of the companies I've worked for haven't exactly been champions of data collection or analysis. Finding and surfacing any relevant data tends to be a task in itself. Oddly enough, in a world that's all about "data-driven decision making", data often still seems like a mystery.

But here's the thing, most people tend to rely on data someone else has collected, interpreted, or mentioned, without really knowing how to capture it for their own specific needs. Well, we're about to change that, starting now—at least for folks working on marketing websites.

## Why knowing how to get/read data is important

I've been there too. My work used to be guided by a quick Google search, leading me to websites like [Nielsen Norman](https://www.nngroup.com/). To really get a grip on how <span class="space:nowrap">my own</span> work was performing, I had to rely on an engineer or a marketer <span class="space:nowrap">to hunt</span> down data and share their insights. More often than not, the data <span class="space:nowrap">I needed</span> just wasn’t available, or it was too high-level to directly tie back <span class="space:nowrap">to my</span> design decisions.

After working in a few roles where I was responsible for both the design and development of companies’ marketing websites, I started realizing, “Hey, this data shit isn’t that hard…” especially with the right tools. The process of implementing and collecting analytical data also taught me <span class="space:nowrap">a few things.</span>

### Understand the funnel

As a designer or developer, our work on marketing touch points is part of <span class="space:nowrap">a bigger picture:</span> the marketing and sales funnel. Understanding where our work fits in this process and how people reach that point can give us lots of useful information.

For example, imagine we're asked to redesign a product page because it's outdated and no longer aligns with the product. Before we start, it would be useful to know how and why people come to this page. It's likely that most visitors arrive in a similar way, so our design should primarily cater <span class="space:nowrap">to these users.</span>

The marketing and sales process can be divided into stages like the top (ToFu), middle (MoFu), and bottom (BoFu). As someone moves through these stages, they become more aware, informed, and motivated to achieve a company's goal, like making a purchase.

<div class="relative w:100p flex flex:col align-items:center gap:8 font:sans font:lg medium sm:text:center my:32">
    <div class="flex align-items:center w:100p">
        <div class="flex-shrink:0 py:8 radius:md bg:sheet-5 border:1 border:black border-opacity:10 w:100p max-w:224 pl:12 sm:pl:0">
            Top of funnel
        </div>
        <div class="w:100p border-t:1 border:black border-opacity:10 border:dashed"></div>
        <div class="font:mono font:xs uppercase tracking:loosest mb:2 color:ink-1 pl:12 flex-shrink:0">
            Aware
        </div>
    </div>
    <div class="flex align-items:center w:100p">
        <div class="flex-shrink:0 py:8 radius:md bg:sheet-5 border:1 border:black border-opacity:10 w:100p max-w:192 pl:12 sm:pl:0 sm:ml:16">
            Middle of funnel
        </div>
        <div class="w:100p border-t:1 border:black border-opacity:10 border:dashed"></div>
        <div class="font:mono font:xs uppercase tracking:loosest mb:2 color:ink-1 pl:12 flex-shrink:0">
            Interested
        </div>
    </div>
    <div class="flex align-items:center w:100p">
        <div class="flex-shrink:0 py:8 radius:md bg:sheet-5 border:1 border:black border-opacity:10 w:100p max-w:160 pl:12 sm:pl:0 sm:ml:32">
            Bottom of funnel
        </div>
        <div class="w:100p border-t:1 border:black border-opacity:10 border:dashed"></div>
        <div class="font:mono font:xs uppercase tracking:loosest mb:2 color:ink-1 pl:12 flex-shrink:0">
            Desiring
        </div>
    </div>
    <div class="flex align-items:center w:100p">
        <div class="flex-shrink:0 py:8 radius:md bg:sheet-5 border:1 border:black border-opacity:10 w:100p max-w:128 pl:12 sm:pl:0 sm:ml:48">
            Conversion
        </div>
        <div class="w:100p border-t:1 border:black border-opacity:10 border:dashed"></div>
        <div class="font:mono font:xs uppercase tracking:loosest mb:2 color:ink-1 pl:12 flex-shrink:0">
            Sold
        </div>
    </div>
</div>

Each stage relies on different **channels** to communicate with users categorized within these buckets. If you're not familiar with the term, **channels are the ways users get to your website**. Before the internet, these were things like print, billboards, radio, and TV. Now, they're mostly digital:

<div class="relative w:100p mt:32 mb:48">
    <ul class="relative flex flex:col gap:8 w:100p">
        <li class="relative w:100p bg:sheet-5 border:1 border:black border-opacity:10 py:8 sm:py:16 px:12 sm:px:24 radius:md">
            <h4 class="medium font:sans font:lg leading:150">
                Organic search
            </h4>
            <p class="font:md leading:150 opacity:70">
                Traffic from a search engine <span class="space:nowrap">(without seeing a paid search ad).</span>
            </p>
        </li>
        <li class="relative w:100p bg:sheet-5 border:1 border:black border-opacity:10 py:8 sm:py:16 px:12 sm:px:24 radius:md">
            <h4 class="medium font:sans font:lg leading:150">
                Paid Search
            </h4>
            <p class="font:md leading:150 opacity:70">
                Traffic from a paid ad on a <span class="space:nowrap">search engine.</span>
            </p>
        </li>
        <li class="relative w:100p bg:sheet-5 border:1 border:black border-opacity:10 py:8 sm:py:16 px:12 sm:px:24 radius:md">
            <h4 class="medium font:sans font:lg leading:150">
                Organic Social
            </h4>
            <p class="font:md leading:150 opacity:70">
                Traffic from a social media post <span class="space:nowrap">or page (that wasn't paid for).</span>
            </p>
        </li>
        <li class="relative w:100p bg:sheet-5 border:1 border:black border-opacity:10 py:8 sm:py:16 px:12 sm:px:24 radius:md">
            <h4 class="medium font:sans font:lg leading:150">
                Paid Social
            </h4>
            <p class="font:md leading:150 opacity:70">
                Traffic from a paid ad on <span class="space:nowrap">a social media platform.</span>
            </p>
        </li>
        <li class="relative w:100p bg:sheet-5 border:1 border:black border-opacity:10 py:8 sm:py:16 px:12 sm:px:24 radius:md">
            <h4 class="medium font:sans font:lg leading:150">
                Referral
            </h4>
            <p class="font:md leading:150 opacity:70">
                Traffic to your site <span class="space:nowrap">from other websites.</span>
            </p>
        </li>
        <li class="relative w:100p bg:sheet-5 border:1 border:black border-opacity:10 pt:8 sm:pt:16 radius:md">
            <h4 class="medium font:sans font:lg leading:150 px:12 sm:px:24">
                Direct
            </h4>
            <p class="font:md leading:150 opacity:70 px:12 sm:px:24">
                Traffic to your site that <span class="space:nowrap">directly typed in the URL.</span>
            </p>
            <p class="px:12 sm:px:24 py:8 mt:8 sm:mt:16 font:xs border-t:1 border:black border-opacity:10 bg:sheet-4 radius-b:md">
                Note: If this percentage is extremely high, your <span class="space:nowrap">data collection or filtering is probably wonky.</span>
            </p>
        </li>
        <li class="relative w:100p bg:sheet-5 border:1 border:black border-opacity:10 py:8 sm:py:16 px:12 sm:px:24 radius:md">
            <h4 class="medium font:sans font:lg leading:150">
                Email
            </h4>
            <p class="font:md leading:150 opacity:70">
                Traffic to your site from email <span class="space:nowrap">campaigns. Super boring. 😂</span>
            </p>
        </li>
    </ul>
</div>

### Understand user acquisition

Most analytics tools, with no customization, capture channel data. This data is readily available. If not, it can be accessed by simply creating an account with an analytics tool and applying their script to your site. Knowing our way around these tools allows us to determine user motives. For instance, if users land on a product page through organic search, analyzing specific search terms can help reveal user intent.

<div class="relative flex flex:col radius:md border:1 border:black border-opacity:10 font:sm sm:font:md font:sans my:32 overflow:hidden bg:sheet-5">
    <div class="flex align-items:center justify-content:between px:12 sm:px:24 color:ink-1 medium py:8 bg:sheet-3 border-b:1 border:black border-opacity:10">
        <div>
            Top  search queries
        </div>
        <div class="flex gap:16 text:center">
            <div class="w:72 sm:w:128">
                Clicks
            </div>
            <div class="w:72 sm:w:128">
                Impressions
            </div>
        </div>
    </div>
    <div class="flex align-items:center justify-content:between px:12 sm:px:24 py:8 border-b:1 border:black border-opacity:10">
        <div>
            Coding for designers
        </div>
        <div class="flex gap:16 text:center">
            <div class="w:72 sm:w:128">
                10,000
            </div>
            <div class="w:72 sm:w:128">
                50,000
            </div>
        </div>
    </div>
    <div class="flex align-items:center justify-content:between px:12 sm:px:24 py:8 border-b:1 border:black border-opacity:10">
        <div>
            Should I know code
        </div>
        <div class="flex gap:16 text:center">
            <div class="w:72 sm:w:128">
                9,000
            </div>
            <div class="w:72 sm:w:128">
                40,000
            </div>
        </div>
    </div>
    <div class="flex align-items:center justify-content:between px:12 sm:px:24 py:8 border-b:1 border:black border-opacity:10">
        <div>
            Interactive prototyping
        </div>
        <div class="flex gap:16 text:center">
            <div class="w:72 sm:w:128">
                8,000
            </div>
            <div class="w:72 sm:w:128">
                30,000
            </div>
        </div>
    </div>
    <div class="flex align-items:center justify-content:between px:12 sm:px:24 py:8 border-b:1 border:black border-opacity:10">
        <div>
            Level up design skills
        </div>
        <div class="flex gap:16 text:center">
            <div class="w:72 sm:w:128">
                7,000
            </div>
            <div class="w:72 sm:w:128">
                20,000
            </div>
        </div>
    </div>
    <div class="flex align-items:center justify-content:between px:12 sm:px:24 py:8">
        <div>
            How to become staff
        </div>
        <div class="flex gap:16 text:center">
            <div class="w:72 sm:w:128">
                6,000
            </div>
            <div class="w:72 sm:w:128">
                15,000
            </div>
        </div>
    </div>
</div>

Search is usually linked to the ToFu. In a MoFu/BoFu example, let's assume most traffic to a product page comes from LinkedIn (paid social), [retargeting](https://mailchimp.com/resources/what-is-retargeting/) those who have visited our website. Most ads contain links with [UTMs](https://blog.hubspot.com/marketing/what-are-utm-tracking-codes-ht) which allow us to identify which ads drive most traffic, along with their copy, and imagery.

Intent is typically motivated by a question, interest, or problem. By addressing this and showing how our product/service solves it, we increase the chances of users accomplishing our intended goal (conversion). This isn't complex, but how often is it accounted for in your design process?

<div class="relative flex flex:col align-items:center w:100p mt:32 mb:48 font:sans font:md">
    <div class="flex align-items:center py:8 pl:12 pr:24 bg:sheet-5 border:1 border:black border-opacity:10 radius:full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" class="w:16"> <path fill="#000" fill-rule="evenodd" d="M9.97 11.03a5 5 0 1 1 1.06-1.06l2.75 2.75a.75.75 0 1 1-1.06 1.06l-2.75-2.75ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd"/></svg>
        <div class="pl:8 tracking:normal">
            How to build interactive prototypes?
        </div>
    </div>
    <div class="border-l:1 border:black border:dashed border-opacity:10 h:32"></div>
    <div class="relative w:100p max-w:448 flex flex:col bg:sheet-5 border:1 border:black border-opacity:10 p:16 radius:md">
        <div class="font:xs medium opacity:60 italic">
            Search results
        </div>
        <div class="flex align-items:center justify-content:start gap:8 mb:8 border-t:1 border:black border-opacity:10 mt:12 pt:12">
            <div class="w:28 h:28 flex align-items:center justify-content:center bg:primary-rg radius:full color:white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="16" height="16" class="w:16 h:auto mb:2"><title>Pear Icon</title><path fill-rule="evenodd" d="M10.51 0a2.72 2.72 0 0 1-2.3 3.27A2.72 2.72 0 0 1 10.52 0Zm-.09 11.28a2.26 2.26 0 0 0 2.54 2.25 5.04 5.04 0 0 1-1.01 1.66c-.75.82-1.92 1-2.94.62a2.45 2.45 0 0 0-1.7 0c-1.02.38-2.2.2-2.93-.62a5.1 5.1 0 0 1-1.34-3.72c.06-1.66.66-2.45 1.24-3.22.6-.77 1.17-1.53 1.17-3.15 0-.54.24-1.03.62-1.36.41-.36 1-.41 1.52-.24.16.05.31.08.48.1h.18c.17-.02.33-.05.48-.1a1.56 1.56 0 0 1 1.52.24c.38.33.63.82.63 1.36 0 1.62.57 2.38 1.16 3.15.19.25.38.5.55.78-1.2.04-2.17 1-2.17 2.25Z" clip-rule="evenodd"/></svg>
            </div>
            <div class="leading:120 tracking:normal">
                <div class="font:sm medium">
                    Prototypr
                </div>
                <div class="font:xs opacity:60">
                    https://www.prototypr.com
                </div>
            </div>
        </div>
        <div class="color:primary-rg medium leading:130 tracking:normal mb:2">
            Prototypr: Build interactive <span class="space:nowrap">prototypes in just two clicks</span>
        </div>
        <div class="tracking:normal leading:150 opacity:70">
            Prototypr seamlessly plugs into your design workflows allowing you to create engaging experiences, faster. 
        </div>
    </div>
</div>

### Understand impact

We’ve assumed that whatever page we’re looking into the source data on is *worth our time.* But **what if it's not?** How can we know? Data on page views and new users per page is all easily available too, just like the source data.

Let's say we're working on a product page. But then we notice that this page only gets 1/10th of the traffic of another equally outdated page. This is where we need to decide what's more important—**setting priorities.**

The page with more visitors can have a bigger impact on our business. More visitors mean more chances to convert them into customers—more conversions, more profit.

We should also think about why the less-visited page isn't as popular. Let's check the source data again. If the low traffic isn't intentional, maybe we should still prioritize this page. But first, we need to focus on attracting more visitors, not just improving the design.

### Own your role

Clearly, even basic knowledge of analytics can be a game changer. Through it, we evolve from task executors to data-driven problem solvers with technical skills to boot. We can now incite, prioritize, and inform our own work with clear purpose and logic.

We've covered the basics and most of the steps before a user interacts with our work. Awesome! But, how do we use data to understand how users interact with the work itself? How can we tell if our effort has improved conversion rates? Which part of our work caused this?

We're going to explore these questions below. Get ready, it's going to get a bit more technical.

## Get meaningful data from your work

Standard metrics from common analytics tools often fall short. Meanwhile, most teams rely on this data because they're unfamiliar with customized ways to gather deeper insights—influencing our work initiatives in wonky ways.

Insufficient data often leads to an unnecessary accumulation of analytics tools, too. Instead of getting the most out of a single, streamlined tool, teams pile on new ones that capture different data.

Each added tool slows down site load times, worsening user experience. These are usually not lightweight scripts. A typical SaaS marketing site might load scripts from Google Analytics, various social tracking pixels, HotJar, HubSpot, G2, and Amplitude. This not only slows loading but also complicates data analysis across multiple tools — a poor experience even for backend users.

So, let’s change that.

### Choosing an analytics tool

Everything I’ll be covering below is easily achievable with [custom events in Google Analytics](https://developers.google.com/analytics/devguides/collection/ga4/events?client_type=gtag). However, it’s worth noting that there are better tools out there. Although Google Analytics is free, it can be confusing and overwhelming.

I've been using [Plausible Analytics](https://plausible.io/) lately. Its dashboard is user-friendly and easy to navigate. Adding custom events is usually as easy as adding [a CSS class](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors). It does cost a bit, but it's not pricey. I think it's worth it.

<img src="/assets/images/blog/scrappy-data-plausible.webp" width="672" height="431" alt="Plausible Analaytics Dashboard" class="radius:md sm:radius:xl"/>

With that said, there are loads of analytics tools out there. It is worthwhile to peak around and find which one you prefer. When evaluating tools, a few things that I like to keep in mind are:

1. <mark>**Ease of use**</mark><br/>
Whether it’s understanding the data or how to collect it—choosing <span class="space:nowrap">a tool</span> that makes this stuff as simple as possible is a no-brainer.
2. <mark>**Script size**</mark><br/>
Analytics tool vary in “file size” — try keeping these third-party scripts as small as possible to prevent delaying page load speeds.
3. <mark>**Privacy first**</mark><br/>
I prefer using tools that prevent the need for a consent banner. Properly handling cookies and personal data is a pain in the ass.

### Determining what data you need

Even before choosing a tool, it may be worth thinking through the data that you need. This way, you can ensure the tool that you’re looking at supports your requirements. But, how do we decide what we need to track?

Since this article is geared toward marketing sites, as a reference I’ll cover a couple of the key things I want when designing and building these and why. If you’re not a developer, not to worry—knowing this stuff will help you communicate with them and understand the possibilities.

#### Specific button clicks 

Understanding what people are clicking on within your site is important, especially when it comes to conversion. While most tools will tell you which pages users navigated between, they won’t specify how they navigated between them.

You can imagine the scenario where you just redesigned a page, wouldn’t be it be helpful to know which section is pushing users to convert? Or, what if most users are just using [the CTA](https://en.wikipedia.org/wiki/Call_to_action_(marketing)) within the [header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)? In any case, this helps us understand what content is effectively helping us drive users to take the next step.

There’s also a scenario where a marketing site and product are decoupled—leaving a gap in the built-in page navigation data. Some tools will provide exit data that covers this, but adding these custom events to important clicks ensures it, while giving us deeper insight.

In this instance, this data will also help inform where users are falling off. Let’s pretend, over the course of a month, our site sent 10,000 users to the product’s sign up page but, during that same period, only saw 500 sign ups. Here we discover the current hangup being the sign up page itself.

#### Scroll depth

Marketing websites are largely influenced by content. It's important to know what parts of the content people actually see - just visiting a page doesn't necessarily mean they see everything on it.

Scroll depth tracking helps us understand what parts of the page users see. This method records custom events as a user scrolls through a webpage. I use two different formats of this on this site. You can check it out by opening the developer tools (`⌘⌥i`) and looking at the console.

If your site uses [semantic HTML](https://www.semrush.com/blog/semantic-html5-guide/) and the [sections](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) are not too large, you can record custom events when these sections are viewed. If your HTML is not well organized or you want to understand pages with a lot of content (like a blog post), it might be better to record custom events at specific points as a user scrolls down the page. For example, you could record when a user has scrolled 10%, 25%, 50%, 75%, and 100% of the page.

You can do this with Javascript's intersection observer. I won't go into the code details here, but you can see how I use Plausible and intersection observer for this [here.](https://github.com/stillingdesign/blame.design/blob/main/src/assets/javascript/analytics.js)

This data will help us structure our pages by showing us which parts to put the most effort into. For instance, if most users are only looking at the first three sections of our pages, we can stop pouring so much time into updates on less seen areas. From here, we could even use our tool’s API and generate [basic heat maps](https://www.hotjar.com/heatmaps/).

#### Going beyond

While these two properties likely won’t cover everything you want from analytics, the intention is to show how to go about considering what data you may need—then how it can be captured. Every site and every company is different, so the data that is needed will vary.

### Implementing custom analytics

I’m not going to deep dive into how to do this with code because it is extremely simple for most developers and it varies from tool to tool. If you’re a novice developer like myself, to get started visit your tool’s docs and look for “custom events”. Please reach out if you have any questions!

The important takeaway here is the fundamentals. Even if you don’t know the front-end from the back, after reading this article, you should know how to constructively communicate with team members who can help with implementing custom analytics.

If there’s push back due to time constraints, it’s non-sense. Most developers could add a custom event in hours, if not only minutes.

## Start designing with data

Now, you’ll notice I didn’t touch on actual data analysis. That was intentional—I don’t know the first thing about sample sizes and evaluating whether or not, based on that, the data I’m looking at is accurate or not. To some extent, I don’t believe that this matters. 🌶️

This could be blissful ignorance. But whether your site has 100 or 100,000 users, utilizing any amount of data should improve your designs and lead to better outcomes. We now know what this data is, how to comprehend it, and how we can start to utilize it—so let’s go!

Dive into analytics, understand how and why people are getting to your site, know what works and what doesn’t, fix it, experiment, iterate, keep on designing, and you’ll quickly become the acquisition rock star at your company.