const topics = [];
const topicOverview = [];
const quotes = [];
const authors = [];
const partners = [];



const inputs = [
    {
        text: `Poor Employment as peter a Reason /// Accessibility of IHAE // Students in IHAE, Employment Insecurity // Employment of Artists, Poor Employment Prospects //// Career Start /// Graduates & Alumni // Students in IHAE`,
        quote: `probably it's good if peter you did internships before in a certain area. And probably these internships weren't paid very well, so you can only do them if you can afford to do not well paid internships`,
        author: 'eschenbacher',
        partner: 'p05'
    },
    {
        text: `Problem Solving Skills////Critical Thinking/// Soft Skills //Artists Skill Sets, Soft Skills //Artists Skill Sets`,
        quote: `I do think that there is just as much work to be done in our field as in other fields in learning to recognise how an artist’s problem solving skills could be incorporated in their own activities.`,
        author: `meriläinen`,
        partner: 'p07'
    }
];

// initialise indices
topic_index = 0;
// set properties for each input
inputs.forEach((input) => {
          let quote = {
              id: quotes.length + 1,
              text: input.quote,
              author: input.author,
              topics: [],
              partner: input.partner
          };
          quotes.push(quote); // add quote

// added authors and partners here

            let author = {
              id: authors.length + 1,
              name: input.author,
              quotes: [],
              topics: [],
              partners: []
            };
            if (!authors.includes(input.author)) { // add author
            authors.push(author);
          }

            let partner = {
              id: partners.length + 1,
              name: input.partner,
              topics: [],
              authors: [],
              quotes: []
            };
            if (!partners.includes(input.partner)) { // add partner
            partners.push(partner);
          }

// resume code

    let parsedInput = input.text.split(','); // parse topic branches
    parsedInput.forEach((value) => {
        let parts = value.split(new RegExp('\s?/+\s?', 'g'));
        let lastTopic = null;
        let mainTopic = {};

        parts.reverse().forEach((value, index) => {
            topic_index += 1;
            let topic = {
                id: topic_index, // 1 2 3
                name: value.trim()
            };

            // let author = {
            //   id: authors.length + 1,
            //   quotes: [quote.id],
            //   topics: [],
            //   partners: []
            // };

            if (index + 1 === parts.length) {
                quote.topics.push(topic.id);
                topic.quotes = [quote.id];

// added fields for authors and partners

                  if (!author.topics.includes(topic.id)) { // add partner
                    author.topics.push(topic.id);
                  };
                  if (!author.partners.includes(partner.id)) { // add partner
                    author.partners.push(partner.id);
                  };

                  if (!partner.topics.includes(topic.id)) { // add partner
                    partner.topics.push(topic.id);
                  };
                  if (!partner.authors.includes(author.id)) { // add partner
                    partner.authors.push(author.id);
                  };

// resume code

            } else {
                topic.children = [];
            }

            if (lastTopic !== null) {
                lastTopic.children.push(topic);
            } else {
                mainTopic = topic;
            }

            lastTopic = topic;
            topicOverview.push({
                id: topic.id,
                name: topic.name,
                mainTopic: mainTopic.id,
                quotes: [quote.id],
                authors: author.id,
                partners: partner.id
            });
        });
        topics.push(mainTopic);
    })
    author.quotes.push(quote.id);
    partner.quotes.push(quote.id);
    authors[author] = author;
    partners[partner] = partner;
});

console.log("topics",topics)
console.log("quotes",quotes)
console.log("all topics",topicOverview)
console.log("authors",authors)
console.log("partnters",partners)

const findAll = (value) => {
    var search = new RegExp(value.toLowerCase(), 'i');
    let topicsResult = topicOverview.filter(item => search.test(item.name.toLowerCase()));
    let quotesResult = quotes.filter(item => search.test(item.text.toLowerCase()));

    return [topicsResult, quotesResult];
}

// console.log(findAll('art'));
