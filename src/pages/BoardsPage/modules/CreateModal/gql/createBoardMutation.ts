import {gql} from "@apollo/client";

export const createBoardMutation = gql`
    mutation CreateBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
            background
            name
            labels {
                _id
                colorId
                text
            }
            lists {
                _id
                name
                cards {
                    _id
                    description
                    dueDate
                    name
                    startDate
                    labels
                }
            }
            members {
                userId
            }
        }
    }
`