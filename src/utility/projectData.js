export const project = [
  {
    name: "Cull - A/B Testing UI Dashboard",
    stack: ["Go", "MongoDB", "React", "Material-UI"],
    description: "Cull is an A/B testing platform for identifying non deterministic features that are best suited for a given set of audience.",
    contribution: "Worked on the dashboard creation for Cull using ReactJS with few contribution towards backend using Go. I was completely responsible for building the UI dashboard from scratch. Used Material-UI for react as the css design framework and gained fair bit of knowledge on how to create a responsive UI using it.",
    year: 2020
  },
  {
    name: "Cyborg - Data Spec Validation Tool",
    stack: ["Spring Booot", "MongoDB", "ReactJS", "Material-UI"],
    description: "Cyborg is a validation application backend built in Spring Boot with MongoDB for data persistance and ReactJS for the visual dashboard. It has the capability to validate whether the response from a financial institution is compliant with the Open Banking standard or not. As Open Banking standard has various version viz. v3.0, v3.1.2 or v3.1.2 and so on, and all financial institute must send there data response in the format specified by Open Banking Standard corresponding to these versions. So, we as a financial aggregator we built a layer that would validate the response before we persist the data. MongoDB is used to store the version mapping and format specs for each version. Dashboard is used for manual validation. Also Cyborg can provide analysis and compare the fields that we were getting from the webpage with that of the data we are getting in the response.",
    contribution: "To build the whole data spec validation tool (Cyborg) both frontend as well as the backend as an individual contributor.",
    year: 2019
  },
  {
    name: "Page As Response (PAR)",
    stack: ["Core Java", "Vanilla JavaScript", "Selenium"],
    description: "Page As Response is a technique where we don't fetch whole web content such as css, js and other media files while scrapping a webpage. We analyze the websites behavior and pick network call(s) that sends the required web data and make that request using JavaScriptExecutor in Selenium to mimick the request and fetch the response as a text instead of whole webpage, that we get while loading a web url using selenium and chrome driver.",
    contribution: "I alongwith my team lead sort of invented this technique when we observed huge number of failures while scrapping web data due to page load issues and page load timeouts. Earlier we were facing an long running issue for a bank site where the bank page was not loading even after numerous wait and timeouts, also increasing the latency of the script to 200-220 secs per request where complete data was fetched. But with this PAR technique we were able to reduce the latency to 40-45 secs at max and that was a huge infrastructural gain",
    year: 2019
  }
]