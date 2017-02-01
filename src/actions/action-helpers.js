export const parseArticleResponse = response => {
  const atributes = response.data.attributes;
  let categories, comments;

  [categories, comments] = parseIncluded(response)

  return (
    {
      title: atributes.title,
      text: atributes.text,
      categories,
      comments
    }
  )
}

const parseIncluded = (response) => {
  let categories = [];
  let comments = [];
  response.included.forEach(element => {
    switch(element.type) {
      case 'comments':
      comments.push(element.attributes)
      break;
      case 'categories':
      categories.push(element.attributes.name)
      break;
    }
    return element.attributes.name
  })

  return [categories, comments]
}
