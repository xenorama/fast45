const topics = [];
const topicOverview = [];
const quotes = [];
const inputs = [
    {
        text: `Poor Employment as peter a Reason /// Accessibility of IHAE // Students in IHAE, Employment Insecurity // Employment of Artists, Poor Employment Prospects //// Career Start /// Graduates & Alumni // Students in IHAE`,
        quote: `probably it's good if peter you did internships before in a certain area. And probably these internships weren't paid very well, so you can only do them if you can afford to do not well paid internships`,
        author: 'classified'
    },
    {
        text: `Problem Solving Skills////Critical Thinking/// Soft Skills //Artists Skill Sets, Soft Skills //Artists Skill Sets`,
        quote: `I do think that there is just as much work to be done in our field as in other fields in learning to recognise how an artist’s problem solving skills could be incorporated in their own activities.`,
        author: `classified2`
    }
];
let increment = 0;
inputs.forEach((input) => {
    let quote = {
        id: quotes.length + 1,
        text: input.quote,
        author: input.author,
        topics: []
    };
    quotes.push(quote);
    let parsedInput = input.text.split(',');
    parsedInput.forEach((value) => {
        let parts = value.split(new RegExp('\s?/+\s?', 'g'));
        let lastTopic = null;
      let mainTopic = {};

      parts.reverse().forEach((value, index) => {
          increment = increment + 1;
          let topic = {
              id: increment, // 1 2 3
              name: value.trim()
          };

          if (index + 1 === parts.length) {
              quote.topics.push(topic.id);
              topic.quotes = [quote.id];
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
