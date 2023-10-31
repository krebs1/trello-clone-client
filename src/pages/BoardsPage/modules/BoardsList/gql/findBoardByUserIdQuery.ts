import {gql} from "@apollo/client";

export const findBoardByUserIdQuery = gql`
    query FindBoardByUserId($uid: String!) {
        findBoardByUserId(_id: $uid) {
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
                    labels
                    name
                    startDate
                }
            }
            members {
                _id
                userId
            }
        }
    }
`