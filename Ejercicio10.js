
const removeHTMLTags = (text) => {
    return text.replace(/<[^>]*>?/g, '');
}
const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');
 
console.log(result); // lorem ipsum

