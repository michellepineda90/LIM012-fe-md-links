const getArrayOfHttpResponses = (formattedLinks) => new Promise((resolve, reject) => {
  const linksToValidate = formattedLinks.slice();
  const extractedUrls = linksToValidate.map((link) => (link.href));
  const httpResponses = extractedUrls.map((url) => fetch(url));
  resolve(Promise.all(httpResponses), linksToValidate);
  reject(new Error());
});

const validateLinks = (promise) => {
  promise
    .then((responses) => {
      responses.forEach((response, index) => {
        linksToValidate[index].status = response.status;
        linksToValidate[index].statusText = response.statusText;
      });
      return linksToValidate;
    })
    .catch(new Error());
};
