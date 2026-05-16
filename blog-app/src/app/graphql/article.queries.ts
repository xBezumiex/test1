import { gql } from 'apollo-angular';

export const GET_ARTICLE = gql`
  query GetArticle($id: ID!) {
    article(id: $id) {
      id
      title
      content
      createdAt
      image
      rating
      categoryId
      category {
        id
        name
      }
    }
  }
`;

export const GET_COMMENTS = gql`
  query GetComments($articleId: ID!) {
    commentsByArticle(articleId: $articleId) {
      id
      username
      content
      createdAt
      rating
      articleId
    }
  }
`;

export const ARTICLE_RATING_UP = gql`
  mutation ArticleRatingUp($id: ID!) {
    articleRatingUp(id: $id) {
      id
      title
      content
      createdAt
      image
      rating
      categoryId
      category {
        id
        name
      }
    }
  }
`;

export const ARTICLE_RATING_DOWN = gql`
  mutation ArticleRatingDown($id: ID!) {
    articleRatingDown(id: $id) {
      id
      title
      content
      createdAt
      image
      rating
      categoryId
      category {
        id
        name
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation CreateComment($createComment: CreateCommentInput!) {
    createComment(createComment: $createComment) {
      id
      username
      content
      createdAt
      rating
      articleId
    }
  }
`;

export const COMMENT_RATING_UP = gql`
  mutation CommentRatingUp($id: ID!) {
    commentRatingUp(id: $id) {
      id
      rating
      articleId
    }
  }
`;

export const COMMENT_RATING_DOWN = gql`
  mutation CommentRatingDown($id: ID!) {
    commentRatingDown(id: $id) {
      id
      rating
      articleId
    }
  }
`;
