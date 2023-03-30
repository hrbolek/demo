import { authorizedFetch } from 'queries/authorizedFetch'

export const GroupQuerySmall = (id) =>
    authorizedFetch('/gql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify({
            "query":
                `query ($id: ID!) {
                    groupById(id: $id) {
                        id, name, valid, lastchange
                        grouptype { id, name }
                        roles {
                            id, user { id, name,surname, email }
                        }
                        subgroups {
                            id, name, valid, lastchange, grouptype { id, name }
                        }
                    }
                }`,
            "variables": {"id": id}
        }),
    })