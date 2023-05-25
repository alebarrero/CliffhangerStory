import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_STORY = gql`
  mutation addStory($content: String!, $title: String!, $story_type: String!) {
    addStory(content: $content, title: $title, story_type: $story_type) {
      title
      content
      date
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_SKILL = gql`
  mutation removeSkill($skill: String!) {
    removeSkill(skill: $skill) {
      _id
      name
      skills
    }
  }
`;
// export const ADD_STORY = gql`
//   mutation addStory($authorId: String!, $content: String!,  $title:String! $storytype: String!) {
//     addStory(author_id: $authorId, content:$content, title:$title, story_type:$storytype) {
//     author_id
//     title
//     content
//     date
//     contributors
//     is_deleted
//     }
//   }
// `;
