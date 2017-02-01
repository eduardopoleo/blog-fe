export const articleNoAssociated = {
  data: {
    type: "articles",
    id: "1",
    attributes: {
      title: "Hey there",
      text: "how are you?"
    },
    links: {
    },
    relationships: {
    }
  }, included: []
}

export const articleWithCategories = {
  data: {
    type: "articles",
    id: "1",
    attributes: {
      title: "Hey there",
      text: "how are you?"
    },
    links: {
    },
    relationships: {
      categories: {
        links: {
          self: "http://localhost:4444/articles/1/relationships/categories",
          related: "http://localhost:4444/articles/1/categories"
        },
        data: [
          {
            type: "categories",
            id: "6"
          },
          {
            type: "categories",
            id: "7"
          }
        ]
      }
    }
  },
  included: [
    {
      type: "categories",
      id: "6",
      attributes: {
        name: "js"
      },
      links: {
        self: "http://localhost:4444/categories/6"
      }
    },
    {
      type: "categories",
      id: "7",
      attributes: {
        name: "dumplings"
      },
      links: {
        self: "http://localhost:4444/categories/7"
      }
    }
  ]
}

export const articleWithComments = {
  data: {
    type: "articles",
    id: "1",
    attributes: {
      title: "Hey there",
      text: "how are you?"
    },
    links: {
    },
    relationships: {
      comments: {
        links: {
          self: "http://localhost:4444/articles/36/relationships/comments",
          related: "http://localhost:4444/articles/36/comments"
        },
        data: [
          {
            type: "comments",
            id: "25"
          },
          {
            type: "comments",
            id: "27"
          }
        ]
      }
    }
  },
  included: [
    {
      type: "comments",
      id: "25",
      attributes: {
        commenter: "jose",
        body: "small comment"
      },
      links: {
        self: "http://localhost:4444/categories/6"
      }
    },
    {
      type: "comments",
      id: "27",
      attributes: {
        commenter: "juan",
        body: "big comment"
      },
      links: {
        self: "http://localhost:4444/categories/7"
      }
    }
  ]
}

export const articleWithCommentsAndCategories = {
  data: {
    type: "articles",
    id: "1",
    attributes: {
      title: "Hey there",
      text: "how are you?"
    },
    links: {
    },
    relationships: {
      comments: {
        links: {
          self: "http://localhost:4444/articles/36/relationships/comments",
          related: "http://localhost:4444/articles/36/comments"
        },
        data: [
          {
            type: "comments",
            id: "25"
          },
          {
            type: "comments",
            id: "27"
          }
        ]
      },
      categories: {
        links: {
          self: "http://localhost:4444/articles/1/relationships/categories",
          related: "http://localhost:4444/articles/1/categories"
        },
        data: [
          {
            type: "categories",
            id: "6"
          },
          {
            type: "categories",
            id: "7"
          }
        ]
      }
    }
  },
  included: [
    {
      type: "comments",
      id: "25",
      attributes: {
        commenter: "jose",
        body: "small comment"
      },
      links: {
        self: "http://localhost:4444/categories/6"
      }
    },
    {
      type: "comments",
      id: "27",
      attributes: {
        commenter: "juan",
        body: "big comment"
      },
      links: {
        self: "http://localhost:4444/categories/7"
      }
    },
    {
      type: "categories",
      id: "6",
      attributes: {
        name: "js"
      },
      links: {
        self: "http://localhost:4444/categories/6"
      }
    },
    {
      type: "categories",
      id: "7",
      attributes: {
        name: "dumplings"
      },
      links: {
        self: "http://localhost:4444/categories/7"
      }
    }
  ]
}
