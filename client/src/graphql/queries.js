import { gql } from 'apollo-boost';
import { USER_INFO, POST_DATA } from './fragments';

export const PROFILE = gql`
    query {
        profile {
            ...userInfo
        }
    }
    ${USER_INFO}
`;

export const GET_ALL_POSTS = gql`
    query { 
        allPosts {
        _id
        content
        }
}
`;

export const ALL_USERS = gql`
    query {
        allUsers {
            ...userInfo
        }
    }
    ${USER_INFO}
`;

export const POSTS_BY_USER = gql`
    query {
        postsByUser {
            ...postData
        }
    }
    ${POST_DATA}
`;

export const SINGLE_POST = gql`
    query singlePost($postId: String!) {
        singlePost(postId: $postId) {
            ...postData
        }
    }
    ${POST_DATA}
`;

export const TOTAL_POSTS = gql`
    query {
        totalPosts
    }
`;

export const EXTRACT_EXERCISE_LOGS = gql`
    query {
        ExtractExerciseLogs {
            MuscleGroup
            Exercise
            Reps
            Weight
            Max
        }
    }
`;

export const SEARCH = gql`
    query search($query: String!) {
        search(query: $query) {
            ...postData
        }
    }
    ${POST_DATA}
`;
