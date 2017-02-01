export const parseArticleResponse = response => {
  const attributes = response.data.data.attributes;
  let categories, comments;

  [categories, comments] = parseIncluded(response.data.included)

  return (
    {
      id: response.data.data.id,
      title: attributes.title,
      text: attributes.text,
      categories,
      comments
    }
  )
}

const parseIncluded = (included) => {
  let categories = [];
  let comments = [];
  included.forEach(element => {
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
