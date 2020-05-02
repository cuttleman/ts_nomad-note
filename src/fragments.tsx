import gql from "graphql-tag";

export const NOTE_FRAGMENT = gql`
    fragment noteParts on Note{
        id
        title
        content
    }
`;